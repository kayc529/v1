import { describe, it, expect } from "vitest";
import { getCountStrArr, DEFAULT_COUNT_ARR } from "./visitor-count-helper";

describe("getCountArr", () => {
  it("returns default array when obj is undefined", () => {
    expect(getCountStrArr(undefined)).toEqual(DEFAULT_COUNT_ARR);
  });

  it("zero-pads to 8 digits", () => {
    expect(getCountStrArr({ visitor_count: 123 } as any)).toEqual([
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
      "2",
      "3",
    ]); // "00000123"
  });

  it("handles zero correctly", () => {
    expect(getCountStrArr({ visitor_count: 0 } as any)).toEqual([
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
    ]);
  });

  it("allows >8 digits (no truncation)", () => {
    const arr = getCountStrArr({ visitor_count: 987654321 } as any);
    expect(arr.join("")).toBe("987654321");
    expect(arr).toHaveLength(9);
  });
});
