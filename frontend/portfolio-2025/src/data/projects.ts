export const projects: Project[] = [
  {
    name: "Tender Chops | Microservices E-Commerce Platform",
    summary:
      "Tender Chops is a distributed, event-driven e-commerce system built with Spring Boot and AWS (ECS, RDS, SNS/SQS, S3, Lambda, CloudFront), integrating Stripe for payments and Keycloak for authentication.",
    description: [
      "Designed and built a distributed e-commerce backend with independently deployable Spring Boot microservices, using REST APIs and asynchronous SNS/SQS messaging",
      "Implemented secure authentication with Keycloak (OAuth2/OIDC) and deployed services on AWS ECS Fargate with PostgreSQL (RDS), Redis, and ALB routing",
      "Built Stripe payment flows with idempotent processing, transactional consistency, and webhook-driven state transitions",
      "Implemented an S3/CloudFront media pipeline with Lambda-based image processing for product image upload and delivery",
      "Containerized services with Docker, managed database migrations with Flyway, and used EventBridge Scheduler for cost-optimized infrastructure management",
    ],
    github: "https://github.com/kayc529/tender-chops-ecommerce",
  },
];

export interface Project {
  name: string;
  summary: string;
  description: string[];
  github: string;
}
