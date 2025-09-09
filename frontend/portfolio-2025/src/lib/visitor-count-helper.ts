import type { VisitCountResponse } from "@/api/visitor-count";

const MAX_DIGITS = 8;
export const DEFAULT_COUNT_ARR = ["0", "0", "0", "0", "0", "1", "3", "1"];

export const getCountStrArr = (
  obj: VisitCountResponse | undefined,
): string[] => {
  if (obj === undefined) {
    return DEFAULT_COUNT_ARR;
  }

  const countStrArr = obj.visitor_count
    .toString()
    .padStart(MAX_DIGITS, "0")
    .split("");
  return countStrArr;
};
