import { aboutParagraphs } from "@/data/about";

export const AboutSection = () => {
  return (
    <section
      id="section-about"
      className="flex w-full flex-col gap-y-5 lg:max-w-[35rem]"
    >
      <p className="text-md mb-5 font-bold uppercase md:text-lg">about me</p>
      {aboutParagraphs.map((paragraph, index) => (
        <p key={index} className="text-slate-700 dark:text-zinc-400">
          {paragraph}
        </p>
      ))}
    </section>
  );
};
