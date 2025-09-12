import { type Experience } from "../data/experience";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlinePlayArrow } from "react-icons/md";

export const ExperienceCard = ({
  exp: { title, company, year, description, tech, link },
}: {
  exp: Experience;
}) => {
  return (
    <div className="group lg:hover:bg-neon/10 lg:hover:border-neon/15 relative flex w-full flex-col gap-x-6 rounded-md border-1 border-transparent text-wrap transition-all duration-300 md:flex-row lg:max-w-[42rem] lg:p-4 lg:dark:hover:border-white/15 lg:dark:hover:bg-white/10">
      <a
        className="absolute top-0 left-0 z-10 hidden h-full w-full lg:block"
        href={link}
        target="_blank"
      ></a>
      {/* YEAR */}
      <p className="mb-2 w-full text-sm text-nowrap uppercase md:mb-0 md:w-[160px]">
        {year}
      </p>

      <div className="flex w-full flex-col">
        {/* TITLE */}
        <a
          className="exp-title dark:hover:text-neon hover:text-neon-secondary lg:dark:group-hover:text-neon lg:group-hover:text-neon-secondary relative font-bold uppercase transition-colors duration-300 ease-in-out"
          href={link}
          target="_blank"
        >
          {title}
          <span>
            <FaArrowRight className="mb-0.5 ml-1 inline-block -rotate-45 transition-transform duration-300 ease-in-out lg:group-hover:translate-x-0.5 lg:group-hover:-translate-y-0.5" />
          </span>
        </a>

        {/* COMPANY */}
        <p>{company}</p>

        {/* DESCRIPTION */}
        <div className="flex flex-col gap-y-3 pt-3 pb-5">
          {description.map((d, index) => (
            <div
              key={index}
              className="flex gap-x-1 text-sm text-slate-700 dark:text-zinc-400"
            >
              <MdOutlinePlayArrow className="text-neon-secondary h-5 w-5 pt-1" />
              <p className="w-full">{d}</p>
            </div>
          ))}
        </div>

        {/* TECH */}
        <ul className="flex w-full flex-wrap gap-2">
          {tech.map((t) => (
            <li key={t}>
              <p className="dark:bg-neon/15 bg-neon/30 dark:text-neon text-neon-dark rounded-2xl px-3 py-1 text-sm">
                {t}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
