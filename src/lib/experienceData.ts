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
      "Architected a TeamCity CI/CD pipeline with a doc-to-code dependency mapper that selectively extracts and AI-validates outdated technical Markdown documents, then publishes updates to Confluence via MCP on PR merges.",
      "Resolved critical npm blockers while migrating a legacy AngularJS 1.8 frontend to Angular 22 across a .NET/C# stack, using standalone components to cut deprecated dependencies and reduce technical debt by 40%.",
      "Restructured and token-optimized thousands of lines of legacy documentation into a semantic Markdown schema, improving LLM context-window utility and reducing hallucinations in RAG-driven refactoring workflows."
    ]
  }
];
