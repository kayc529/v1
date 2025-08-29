import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  PutCommand,
  UpdateCommand,
  GetCommand,
} from "@aws-sdk/lib-dynamodb";
import crypto from "crypto";

const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({}));

const VISITOR_IP_TABLE = process.env.VISITOR_IP_TABLE;
const VISITOR_COUNT_TABLE = process.env.VISITOR_COUNT_TABLE;
const IP_SALT = process.env.IP_SALT || "";
const IP_TTL_DAYS = Number(process.env.IP_TTL_DAYS || "0");
const CORS_ORIGINS = process.env.CORS_ORIGINS;

//Get Client IP address from header
const getClientIP = (event) => {
  //HTTP API & Function URL
  if (event?.requestContext?.http?.sourceIp) {
    return event.requestContext.http.sourceIp;
  }
  //REST API
  if (event?.requestContext?.identity?.sourceIp) {
    return event.requestContext.identity.sourceIp;
  }
  //Fallback(ALB or proxies) - return the first IP address in the list
  const xff =
    event?.headers?.["X-Forwarded-For"] || event?.headers?.["x-forwarded-for"];
  if (xff) {
    return String(xff).split(",")[0].trim();
  }
  return null;
};

//Hash Client IP before storing in DB
const hashClientIP = (ip) => {
  return crypto.createHash("sha256", IP_SALT).update(ip).digest("hex");
};

//Get expire_on epoch
const getExpireOn = () => {
  if (!IP_TTL_DAYS || isNaN(IP_TTL_DAYS) || IP_TTL_DAYS <= 0) {
    return undefined;
  }

  const seconds = Math.floor(Date.now() / 1000) + IP_TTL_DAYS * 86400;
  return seconds;
};

//json response with headers
const json = (statusCode, bodyObj) => {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": CORS_ORIGINS || "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: bodyObj === undefined ? "" : JSON.stringify(bodyObj),
  };
};

export const handler = async (event) => {
  try {
    // For preflight CORS
    if (event.httpMethod === "OPTIONS") {
      return json(204, {});
    }

    if (event.httpMethod !== "GET") {
      return json(405, { message: "Method Not Allowed" });
    }

    //Get Client IP adress from headers
    const ip = getClientIP(event);

    //Just return the latest visitor count if cannot read IP address
    if (!ip) {
      const getCommand = new GetCommand({
        TableName: VISITOR_COUNT_TABLE,
        Key: { id: "global" },
        ProjectionExpression: "visitor_count",
      });
      const res = await docClient.send(getCommand);
      const visitor_count = res.Item?.visitor_count ?? 0;
      return json(200, { visitor_count });
    }

    //This will be the IP string stored in the DB
    const hashedIp = "ip#" + hashClientIP(ip);
    let isNewVisitor = false;

    //check if this IP already exist in VISITOR_IP_TABLE
    try {
      const now = new Date().toISOString();

      const putCommand = new PutCommand({
        TableName: VISITOR_IP_TABLE,
        Item: { ip: hashedIp, last_seen: now, expired_on: getExpireOn() },
        ConditionExpression: "attribute_not_exists(ip)",
      });
      await docClient.send(putCommand);

      isNewVisitor = true;
    } catch (error) {
      console.error(error);
      //Don't throw ConditionalCheckFailedException
      if (error && error.name !== "ConditionalCheckFailedException") {
        throw error;
      }
    }

    //If not, update VISITOR_COUNT_TABLE
    if (isNewVisitor) {
      const updateCommand = new UpdateCommand({
        TableName: VISITOR_COUNT_TABLE,
        Key: { id: "global" },
        UpdateExpression: "SET #attr1 = if_not_exists(#attr1, :zero) + :inc",
        ExpressionAttributeNames: {
          "#attr1": "visitor_count",
        },
        ExpressionAttributeValues: { ":zero": 0, ":inc": 1 },
        ReturnValues: "UPDATED_NEW",
      });
      const res = await docClient.send(updateCommand);
      const visitor_count = res.Attributes?.visitor_count ?? 0;
      return json(200, { visitor_count });
    }

    //return existing visitor_count if IP already in DB
    const getCommand = new GetCommand({
      TableName: VISITOR_COUNT_TABLE,
      Key: { id: "global" },
      ProjectionExpression: "visitor_count",
    });
    const res = await docClient.send(getCommand);
    const visitor_count = res.Item?.visitor_count ?? 0;
    return json(200, { visitor_count });
  } catch (error) {
    console.error(error);
    return json(500, {
      message: "Internal Error",
      error: error?.message || String(error),
    });
  }
};
