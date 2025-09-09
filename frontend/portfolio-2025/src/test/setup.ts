import "@testing-library/jest-dom";
import { server } from "./testServer";
import { beforeAll, afterEach, afterAll } from "vitest";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
