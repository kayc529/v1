export const certificates: Certificate[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuedBy: "Amazon Web Services (AWS)",
    issueDate: "JUL 2025",
    link: "https://www.credly.com/badges/683f2f84-699e-479a-b243-06e29ce9d3dd/public_url",
    image: "/aws-certified-solutions-architect-associate.png",
  },
];

export interface Certificate {
  name: string;
  issuedBy: string;
  issueDate: string;
  link: string;
  image: string;
}
