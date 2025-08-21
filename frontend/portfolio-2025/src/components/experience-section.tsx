import { experience } from "../data/experience";
import { ExperienceCard } from "./experience-card";
import { FaArrowRight } from "react-icons/fa6";

export const ExperienceSection = () => {
  return (
    <section id="section-experience" className="flex w-full flex-col">
      <p className="text-lg font-bold">EXPERIENCE</p>
      <ol className="flex w-full flex-col gap-y-8 pt-4">
        {experience.map((item) => (
          <li key={item.title}>
            <ExperienceCard exp={item} />
          </li>
        ))}
      </ol>
      <a
        className="group dark:hover:text-neon hover:text-neon-secondary relative mt-5 w-max transition-colors duration-300 ease-in-out lg:px-4"
        href="https://google.com"
        target="_blank"
      >
        <p className="font-bold">
          View Full Resume
          <span>
            <FaArrowRight className="-mt-1 ml-1 inline-block -rotate-45 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </p>
      </a>
    </section>
  );
};
