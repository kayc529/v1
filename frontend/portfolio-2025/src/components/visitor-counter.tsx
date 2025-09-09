import { getVisitorCount } from "@/api/visitor-count";
import { getCountStrArr } from "@/lib/visitor-count-helper";
import { useQuery } from "@tanstack/react-query";

export const VisitorCounter = () => {
  const { isFetching, isError, data } = useQuery({
    queryKey: ["visitorCount"],
    queryFn: getVisitorCount,
  });

  const digits = getCountStrArr(isError ? undefined : data);

  return (
    <div className="flex w-max flex-col items-center md:items-start">
      <ul
        data-testid="visitor-count"
        aria-label="visitor count"
        className="flex gap-x-2"
        aria-busy={isFetching}
      >
        {digits.map((d, i) => (
          <li key={i}>
            <p className="dark:text-neon text-neon-dark border-neon-dark dark:border-neon bg-neon/30 rounded-sm px-2 py-0.5 text-sm font-bold dark:bg-slate-700">
              {d}
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
