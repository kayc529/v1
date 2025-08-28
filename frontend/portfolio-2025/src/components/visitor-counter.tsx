import { getVisitorCount, type VisitCountResponse } from "@/api/visitor-count";
import { useQuery } from "@tanstack/react-query";

const MAX_DIGITS = 8;
const DEFAULT_COUNT_ARR = ["0", "0", "0", "0", "0", "1", "3", "1"];

export const VisitorCounter = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["vistorCount"],
    queryFn: getVisitorCount,
  });

  const getCountStrArr = (obj: VisitCountResponse | undefined): string[] => {
    if (obj === undefined) {
      return DEFAULT_COUNT_ARR;
    }

    const countStrArr = obj.visitor_count
      .toString()
      .padStart(MAX_DIGITS, "0")
      .split("");
    return countStrArr;
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="flex w-max flex-col items-center md:items-start">
      <ul className="flex gap-x-2">
        {getCountStrArr(data).map((letter, i) => (
          <li>
            <p
              key={i}
              className="dark:text-neon text-neon-dark border-neon-dark dark:border-neon bg-neon/30 rounded-sm px-2 py-0.5 text-sm font-bold dark:bg-slate-700"
            >
              {letter}
            </p>
          </li>
        ))}
      </ul>
      <p className="dark:text-neon text-neon-dark mt-2 text-xs">
        People have been here!
      </p>
    </div>
  );
};
