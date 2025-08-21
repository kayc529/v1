import { VisitorCounter } from "./visitor-counter";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      id="footer"
      className="flex flex-col items-center justify-center md:items-start lg:justify-start"
    >
      <p className="pt-10 text-center text-sm text-slate-700 md:text-start dark:text-zinc-400">
        Built by Kay Cheung {year} with React. Design inspired by{" "}
        <span>
          <a
            href="https://brittanychiang.com/"
            target="_blank"
            className="hover:text-neon-secondary dark:hover:text-neon"
          >
            Brittany Chiang
          </a>
        </span>
        .
      </p>
      <div className="mt-5">
        <VisitorCounter />
      </div>
    </footer>
  );
};
