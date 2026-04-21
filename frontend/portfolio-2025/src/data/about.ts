export const aboutContent = `I’m a full-stack developer with experience building software across frontend, backend, and cloud. My work spans client-facing web applications, ERP customization, cross-platform applications, and distributed systems, with a focus on building solutions that are reliable, maintainable, and practical to operate.

---

I’ve worked with startups, small businesses, multinational companies, and freelance clients, which has given me experience adapting to different team structures, workflows, and delivery needs. I’m comfortable moving between product-facing work and deeper technical implementation depending on what a project requires.

---

My main stack includes Java, Spring Boot, React, Next.js, TypeScript, PostgreSQL, and AWS. I also have hands-on experience with tools and platforms such as Firebase, Redis, Docker, and Keycloak. I hold the AWS Solutions Architect Associate certification.`;

export const aboutParagraphs = aboutContent
  .split("\n\n---\n\n")
  .map((paragraph) => paragraph.trim())
  .filter(Boolean);
