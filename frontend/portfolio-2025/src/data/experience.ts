export const experience: Experience[] = [
  {
    title: "Freelance Software Developer",
    year: "JAN 2024 - PRESENT",
    company: "Self-employed",
    description: [
      "Built and deployed a modern homepage and content management system for a Canadian NGO using Next.js and Firebase, including image hosting and analytics tracking",
      "Maintained and customized an enterprise ERP system (Microsoft Business Central) for a Canadian autoparts company using AL Language, improving UX and internal workflows for sales and warehouse operations",
      "Developed web scraping scripts using Python, Scrapy, and Puppeteer to extract structured data from fragmented online autoparts catalogs, enabling internal analytics and search features",
      "Migrated client websites from WordPress to a modern stack using React, Springboot and AWS, improving performance, security, and maintainability",
    ],
    tech: [
      "React",
      "Next.js",
      "Springboot",
      "Typescript",
      "Java",
      "TailwindCSS",
      "AWS",
      "PostgreSQL",
      "Firebase",
      "Web scraping",
    ],
  },
  {
    title: "Software Developer",
    company: "Accenture",
    year: "APR 2020 - APR 2021",
    description: [
      "Served as the lead mobile developer on a cross-functional team delivering a robust, scalable cross-platform mobile app for a major transportation and logistics organization",
      "Architected and developed the app from scratch using React Native, TypeScript, and Firebase, implementing key features including biometric login, barcode scanning, and in-app notifications ",
      "Built a reusable assets/component library for mobile development, adopted internally to standardize UI patterns and accelerate delivery in future projects",
      "Mentored junior developers through code reviews and one-on-one guidance, promoting quality and maintainability across the codebase",
    ],
    tech: [
      "React",
      "React Native",
      "Typescript",
      "AWS",
      "Microsoft Azure",
      "Firebase",
      "Mobile App Development",
      "REST API",
    ],
    link: "https://www.accenture.com/hk-en",
  },
  {
    title: "Software Developer",
    company: "Antelope",
    year: "AUG 2019 - MAR 2020",
    description: [
      "Developed and enhanced features for a Document Management System using Java and Android Studio, supporting both tablets and smartphones",
      "Optimized offline access using SQLite for local data caching, improving app usability in low-connectivity environments",
      "Resolved 90%+ of known bugs, significantly increasing system stability and improving end-user satisfaction",
      "Built a custom Android app demo for Canon printers, integrating a third-party payment gateway to support direct in-printer payment for print services",
    ],
    tech: [
      "Java",
      "Android Studio",
      "Mobile App Development",
      "SQLite",
      "SOAP API",
    ],
    link: "https://www.antelopeglobal.com/products",
  },
  {
    title: "Frontend Developer",
    company: "Skytree",
    year: "NOV 2018 - JUN 2019",
    description: [
      "Developed, maintained and shipped production code for an award-winning mobile game on both iOS and Android platforms using C# and Unity3D",
      "Implemented an efficient file zipping system that resulted in a 30% reduction in game assets download time, significantly enhancing the game’s accessibility and user satisfaction",
      "Built a web-based top-up platform using HTML, CSS, and JavaScript, integrating with MyCard API to enable seamless in-game currency purchases",
      "Managed monthly in-game event configurations via MySQL, ensuring timely updates and engaging content for the player base",
    ],
    tech: [
      "C#",
      "Javascript",
      "Unity3D",
      "MySQL",
      "HTML",
      "CSS",
      "iOS",
      "Android",
    ],
    link: "https://www.skytree.com.hk/games/trillionia",
  },
];

export interface Experience {
  title: string;
  company: string;
  year: string;
  description: string[];
  tech: string[];
  link?: string;
}
