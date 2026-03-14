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
    title: "Software Engineer",
    organization: "King's Labs",
    location: "London, United Kingdom",
    dateRange: "Dec 2025 - Current",
    category: "Engineering",
    sortOrder: 202512,
    bullets: [
      "Building a client-facing full-stack platform with an embedded AI agent that schedules and interviews candidates through a unified workflow.",
      "Writing each successful interview into the client's production database with the required operational details while feeding interview context back into the AI system.",
      "Contributing within a team of 10 developers on MedibleGo, an internal operations portal that centralizes scheduling, prompt delivery, status tracking, and a WhatsApp chatbot with candidate knowledge."
    ]
  },
  {
    id: 2,
    title: "Academy Participant",
    organization: "King's Labs",
    location: "London, United Kingdom",
    dateRange: "Feb 2025 - Apr 2025",
    category: "Engineering",
    sortOrder: 202502,
    bullets: [
      "Built `Track-It`, a full-stack task management application as part of King's Labs, focusing on secure user-specific workflows.",
      "Architected the application with Next.js and NextAuth, combining dynamic frontend behavior with a secure authentication layer.",
      "Developed CRUD APIs backed by Neon PostgreSQL to enforce multi-tenant data isolation and support reliable task management."
    ]
  },
  {
    id: 3,
    title: "Software Engineer",
    organization: "King's Quant Society",
    location: "London, United Kingdom",
    dateRange: "Jan 2026 - Current",
    category: "Engineering",
    sortOrder: 202601,
    bullets: [
      "Developing a full-stack decision-support platform with a team of 6 developers for a client managing a 20k USD portfolio.",
      "Building portfolio diagnostics and hedge design tooling that surfaces exposures, concentration, beta, volatility, hedge sizing, and user-defined restrictions.",
      "Supporting scenario testing, factor analytics, and reusable workflows so investment teams can evaluate ideas faster and replace fragmented manual processes."
    ]
  },
  {
    id: 4,
    title: "Software Engineer",
    organization: "Student Administration Website",
    location: "London, United Kingdom",
    dateRange: "Jan 2026 - Current",
    category: "Engineering",
    sortOrder: 202601,
    bullets: [
      "Leading a team of 7 developers building a university support platform that helps students raise, route, and track academic issues in one structured place.",
      "Driving the shared workflow design so students, teaching staff, and admins can assign issues to the right department, discuss them transparently, and resolve them more efficiently.",
      "Shaping the product as a bridge between students and academic support staff rather than a generic ticketing system."
    ]
  },
  {
    id: 5,
    title: "Founder & Software Engineer",
    organization: "Vibe Generator",
    location: "London, United Kingdom",
    dateRange: "Jun 2025 - Sep 2025",
    category: "Engineering",
    sortOrder: 202506,
    bullets: [
      "Built and shipped Vibe Generator as an end-to-end full-stack product centered on personalized music-driven experiences.",
      "Implemented Spotify OAuth 2.0, token handling, and secure session management to support authenticated user flows.",
      "Engineered a high-throughput Node.js data pipeline and optimized the frontend experience with Next.js and React for faster, more responsive interactions."
    ]
  },
  {
    id: 6,
    title: "Web Development Bootcamp",
    organization: "Udemy",
    location: "Remote",
    dateRange: "Nov 2024 - Jun 2025",
    category: "Certification",
    sortOrder: 202411,
    bullets: [
      "Completed a comprehensive full-stack web development certification covering the MERN stack: MongoDB, Express.js, React, and Node.js.",
      "Built hands-on proficiency in HTML, CSS, JavaScript, Node.js, React, and PostgreSQL through project-based learning.",
      "Strengthened the technical foundation that now supports both my coursework and professional full-stack development work."
    ]
  }
];
