/// <reference types="node" />

import { test, expect } from "@playwright/test";

const useRealAPI = process.env.E2E_USE_REAL_API === "1";

test("home shows visitor count", async ({ page }) => {
  test.skip(useRealAPI, "This test uses a mocked response");

  await page.route("**/v1/visitors", (route) =>
    route.fulfill({ json: { visitor_count: 123 } }),
  );

  await page.goto("/");

  // Assert UI
  await expect(page.getByTestId("visitor-count")).toHaveText("00000123");
});

test("home shows visitor count (real API)", async ({ page }) => {
  test.skip(!useRealAPI, "Only runs when E2E_USE_REAL_API=1");

  const respPromise = page.waitForResponse(
    (r) =>
      /\/v1\/visitors(?:\?.*)?$/.test(r.url()) &&
      r.request().method() === "GET",
  );

  await page.goto("/");

  page.on(
    "request",
    (r) => r.url().includes("/visitors") && console.log("REQ", r.url()),
  );
  page.on(
    "response",
    (r) => r.url().includes("/visitors") && console.log("RES", r.status()),
  );

  // Ensure the container actually appears (even if empty at first)
  const counter = page.getByTestId("visitor-count");
  await expect(counter).toBeAttached({ timeout: 15000 });

  const resp = await respPromise;
  const { visitor_count } = await resp.json();
  const expected = String(visitor_count).padStart(8, "0");

  await expect(counter).toHaveText(expected);
});
