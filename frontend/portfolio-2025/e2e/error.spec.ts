import { test, expect } from "@playwright/test";

test("falls back to default on API failure", async ({ page }) => {
  await page.route("**/v1/visitors", (route) =>
    route.fulfill({ json: { message: "Internal Server Error" }, status: 500 }),
  );

  await page.goto("/");

  const counter = page.getByTestId("visitor-count");
  // normalize whitespace since digits are separate <li><p> nodes
  const text = (await counter.innerText()).replace(/\s/g, "");
  await expect(counter).toBeVisible();
  await expect.poll(() => text).toBe("00000131");
});
