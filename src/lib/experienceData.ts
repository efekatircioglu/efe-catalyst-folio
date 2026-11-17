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
    id: 2,
    title: "Founding Engineer",
    organization: "ChatBlu AI",
    location: "London, United Kingdom",
    dateRange: "Oct 2026 - Present",
    category: "Engineering",
    sortOrder: 202610,
    bullets: [
      "Shipped a production Oracle OPERA Cloud (OHIP) integration, turning a mock-only stub into a multi-tenant adapter with OAuth 2.0 single-flight token caching and 15+ live endpoints, validated at p50 350 ms across 3 concurrent hotels.",
      "Eliminated duplicate reservations on a vendor API with no native idempotency by persisting booking intents in PostgreSQL and reconciling before every retry, guaranteeing exactly 1 booking even under injected network timeouts.",
      "Rebuilt the Mews PMS integration from 3/16 to 21/21 working API calls, adding a sliding-window rate limiter, HMAC-verified webhooks, and a 15-minute reconciliation worker that recovers dropped events.",
      "Built the core front-desk messaging gateway, the feature clients request most, on WhatsApp via Meta Cloud API and 360dialog; cut webhook acks from 10 s to a 5 s budget by moving AI to background workers, so 3 redeliveries yield 1 reply.",
      "Built an idempotent per-hotel provisioning pipeline for Retell AI voice agents with dry-runs, rollbacks, and drift detection, enforcing tenant isolation with signed per-tenant keys that rejected 7/7 cross-tenant access attempts.",
      "Cut hallucinated hotel-policy answers from 8/10 to 0/10 with bilingual LLM reply guardrails, and fixed 5 multi-agent routing failures including a guest-to-staff privilege escalation.",
      "Raised end-to-end guest journey pass rates from 87% to 100% with a harness replaying signed Twilio and Retell webhooks, writing 590+ tests (27% of the backend suite) and a daily GitHub Actions smoke test."
    ]
  },
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
