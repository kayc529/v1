import { screen, within, waitFor, render } from "@/test/test-utils";
import { VisitorCounter } from "./visitor-counter";
import { server } from "@/test/testServer";
import { http, HttpResponse, delay } from "msw";
import { describe, it, expect } from "vitest";

const base = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8787";

describe("Visitor Counter (integration)", () => {
  it("renders count from API (happy path)", async () => {
    server.use(
      http.get(`${base}/visitors`, async () => {
        await delay(10);
        return HttpResponse.json({ visitor_count: 123 });
      }),
    );

    render(<VisitorCounter />);

    const counter = await screen.findByTestId("visitor-count");
    const digits = within(counter).getAllByText(/\d/);
    await waitFor(() =>
      expect(digits.map((d) => d.textContent).join("")).toBe("00000123"),
    );
  });

  it("show default visitor count when API fails", async () => {
    server.use(
      http.get(`${base}/visitors`, () => {
        return HttpResponse.json(
          { message: "Internal Service Error" },
          { status: 500 },
        );
      }),
    );

    render(<VisitorCounter />);

    const counter = await screen.findByTestId("visitor-count");
    const digits = within(counter).getAllByText(/\d/);
    await waitFor(() =>
      expect(digits.map((d) => d.textContent).join("")).toBe("00000131"),
    );
  });
});
