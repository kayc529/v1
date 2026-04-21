import { projects } from "../data/projects";
import { ProjectCard } from "./project-card";

export const ProjectsSection = () => {
  return (
    <section id="section-projects" className="flex w-full flex-col">
      <p className="text-lg font-bold">PROJECTS</p>

      <ol className="flex w-full flex-col gap-y-8 pt-4">
        {projects.map((project) => (
          <li key={project.name}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ol>
    </section>
  );
};
