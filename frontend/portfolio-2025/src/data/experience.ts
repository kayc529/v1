export const experience: Experience[] = [
  {
    title: "Full stack Developer",
    year: "FEB 2024 - SEP 2025",
    company: "ByteTech Systems",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.",
    tech: ["React", "Springboot", "Typescript", "Java", "AWS", "PostgreSQL"],
    link: "https://google.com",
  },
  {
    title: "Application Development Analyst",
    company: "Accenture",
    year: "APR 2020 - APR 2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.",
    tech: ["React", "Springboot", "Typescript", "Java", "AWS", "PostgreSQL"],
    link: "https://google.com",
  },
  {
    title: "System Developer",
    company: "Antelope",
    year: "AUG 2019 - MAR 2020",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.",
    tech: ["React", "Springboot", "Typescript", "Java", "AWS", "PostgreSQL"],
    link: "https://google.com",
  },
  {
    title: "Frontend Developer",
    company: "Skytree",
    year: "NOV 2018 - JUN 2019",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.",
    tech: ["React", "Springboot", "Typescript", "Java", "AWS", "PostgreSQL"],
    link: "https://google.com",
  },
];

export interface Experience {
  title: string;
  company: string;
  year: string;
  description: string;
  tech: string[];
  link: string;
}
