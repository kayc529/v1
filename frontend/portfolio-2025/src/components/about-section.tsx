export const AboutSection = () => {
  return (
    <section
      id="section-about"
      className="flex w-full flex-col gap-y-5 lg:max-w-[35rem]"
    >
      <p className="text-md -mb-2 font-bold uppercase md:text-lg">about</p>
      <p className="text-slate-700 dark:text-zinc-400">
        I design and build robust, scalable software solutions across the entire
        stack — from clean, responsive frontends to reliable cloud-based
        backends. With experience spanning enterprise ERP customization,
        cloud-native apps, and freelance work for NGOs and small businesses, I
        bring both adaptability and technical depth to every project.
      </p>

      <p className="text-slate-700 dark:text-zinc-400">
        Over the years, I've contributed to startups, small businesses, large
        multinational corporations, and freelance clients, giving me a
        well-rounded understanding of different team dynamics, workflows, and
        delivery goals.
      </p>

      <p className="text-slate-700 dark:text-zinc-400">
        I'm proficient in modern frameworks like React, Next.js, and Spring
        Boot, and have hands-on experience with Firebase, AWS, PostgreSQL,
        Redis, and more. My toolkit spans frontend, backend, and cloud —
        supported by certifications in AWS Solutions Architect Associate and AWS
        Developer Associate.
      </p>
    </section>
  );
};
