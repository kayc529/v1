import { waitFor } from "@testing-library/react";
import { render, screen } from "@/test/test-utils";
import { test, expect } from "vitest";
import { VisitorCounter } from "./visitor-counter";

test("shows visitor count from API", async () => {
  render(<VisitorCounter />);

  const counter = await screen.findByTestId("visitor-count");

  await waitFor(() => expect(counter).toHaveTextContent("00000123"));
});
