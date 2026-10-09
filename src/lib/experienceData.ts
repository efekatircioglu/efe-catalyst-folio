export interface ExperienceEntry {
  id: number;
  title: string;
  organization: string;
  location: string;
  dateRange: string;
  category: "Engineering" | "Certification";
  sortOrder: number;
  bullets: string[];
}

export const experienceData: ExperienceEntry[] = [
  {
    id: 1,
    title: "Technology Intern",
    organization: "ICBC Standard Bank",
    location: "London, United Kingdom",
    dateRange: "Jun 2026 - Sep 2026",
    category: "Engineering",
    sortOrder: 202606,
    bullets: [
      "Designed and implemented an end-to-end TeamCity CI/CD pipeline that autonomously extracts Markdown, validates it via Copilot, and publishes updates to Confluence — a reusable automation framework that removes knowledge-sharing bottlenecks.",
      "Delivered a production-ready application by rescuing a stalled migration from AngularJS 1.8 to Angular 22 within a .NET/C# stack, resolving npm dependency conflicts, mitigating legacy vulnerabilities, and validating 36 REST API endpoints via Swagger.",
      "Increased line and branch test coverage by running MSTest, Rhino Mocks, and Jasmine suites in Visual Studio, resolving 5 hidden bugs and cleaning legacy code.",
      "Minimized token overhead and streamlined LLM processing by developing a reusable skills library to tokenize and restructure legacy technical documentation, patching gaps across 41 Legal & Compliance applications and data feeds."
    ]
  }
];
