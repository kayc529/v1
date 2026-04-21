import { MdOutlinePlayArrow } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

type Project = {
  name: string;
  summary: string;
  github: string;
  description: string[];
};

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group lg:hover:bg-neon/10 lg:hover:border-neon/15 flex w-full flex-col gap-x-6 rounded-md border-1 border-transparent text-wrap transition-all duration-300 lg:max-w-[42rem] lg:p-4 lg:dark:hover:border-white/15 lg:dark:hover:bg-white/10">
      <div className="flex w-full flex-col gap-y-4">
        <p className="exp-title dark:hover:text-neon hover:text-neon-secondary lg:dark:group-hover:text-neon lg:group-hover:text-neon-secondary relative font-bold uppercase transition-colors duration-300 ease-in-out">
          {project.name}
        </p>

        <p className="text-sm">{project.summary}</p>

        <div className="flex flex-col gap-y-3 pt-3">
          {project.description.map((item, index) => (
            <div
              key={index}
              className="flex gap-x-1 text-sm text-slate-700 dark:text-zinc-400"
            >
              <MdOutlinePlayArrow className="text-neon-secondary h-5 w-5 pt-1" />
              <p className="w-full">{item}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-start px-4 pt-1 pb-2">
          <a href={project.github} target="_blank" rel="noreferrer">
            <FaGithub className="!h-9 !w-9 opacity-65 transition-opacity duration-500 hover:opacity-100 dark:opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
};
