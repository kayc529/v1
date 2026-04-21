export const experience: Experience[] = [
  {
    title: "Freelance Software Developer",
    year: "JAN 2024 - PRESENT",
    company: "Self-employed",
    description: [
      "Migrated client websites from WordPress to full-stack applications using Spring Boot, PostgreSQL, and React, deployed on AWS",
      "Customized an enterprise ERP system for a Canadian auto parts company by scraping product data with Python, designing database schemas, and improving internal workflows for sales and warehouse operations",
      "Built and deployed a website for a Canadian NGO using Next.js and Firebase, including a custom CMS, analytics integration, and backend services for content and media management",
      "Developed a data visualization tool for a local councillor’s office to convert internal data into charts for publication on a community website",
    ],
    tech: [
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "React",
      "AWS",
      "Next.js",
      "Firebase",
      "TypeScript",
      "Python",
      "Web scraping",
      "TailwindCSS",
    ],
  },
  {
    title: "Software Developer",
    company: "Accenture",
    year: "APR 2020 - APR 2021",
    description: [
      "Architected and developed a cross-platform cargo tracking application for the Hong Kong Airport Authority (HKAA) using React Native and TypeScript",
      "Integrated Firebase Cloud Messaging, biometric login, and real-time notifications to support operational tracking workflows",
      "Built a reusable component library for mobile development, adopted internally to standardize UI patterns and accelerate delivery",
      "Led mobile development and collaborated with a cross-functional team to deliver the application",
    ],
    tech: [
      "React Native",
      "TypeScript",
      "Mobile App Development",
      "Firebase",
      "REST API",
      "React",
      "Microsoft Azure",
      "AWS",
    ],
    link: "https://www.accenture.com/hk-en",
  },
  {
    title: "Software Developer",
    company: "Antelope",
    year: "AUG 2019 - MAR 2020",
    description: [
      "Developed and enhanced features for a Document Management System using Java and Android Studio for tablet and smartphone clients",
      "Designed and implemented an offline-first data synchronization layer using SQLite, enabling reliable local caching and server sync in low-connectivity environments",
      "Built a custom Android application for Canon printers, integrating a third-party payment gateway API to enable direct in-printer payment processing for print services",
      "Resolved 70%+ of known bugs, significantly increasing system stability and improving end-user satisfaction",
    ],
    tech: [
      "Java",
      "Android Studio",
      "SQLite",
      "Mobile App Development",
      "SOAP API",
    ],
    link: "https://www.antelopeglobal.com/products",
  },
  {
    title: "Frontend Developer",
    company: "Skytree",
    year: "NOV 2018 - JUN 2019",
    description: [
      "Developed, maintained, and shipped production code for an award-winning mobile game on iOS and Android using C# and Unity3D",
      "Implemented an efficient file zipping system that resulted in a 40% reduction in game assets download time, significantly enhancing the game’s accessibility and user satisfaction",
    ],
    tech: [
      "C#",
      "Unity3D",
      "JavaScript",
      "iOS",
      "Android",
      "HTML",
      "CSS",
      "MySQL",
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
