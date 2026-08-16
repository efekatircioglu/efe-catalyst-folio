export interface Project {
  id: number;
  title: string;
  description: string;
  year: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  imageUrl?: string;
  architectureImageUrl?: string;
  detailSummary: string;
  experience: string[];
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Autonomous Job Finder",
    description:
      "A fully autonomous continuous-research job monitor: Python scripts on GitHub Actions crawl and filter openings every 15 minutes, dedupe against a git-backed ledger, and email new roles over Gmail SMTP — no local server, database, or frontend.",
    year: "2026",
    technologies: [
      "Python 3.12",
      "GitHub Actions",
      "REST API",
      "Gmail SMTP",
      "CI/CD",
      "JSON State"
    ],
    imageUrl: "/images/job-monitor.png",
    architectureImageUrl: "/images/job-finder-architecture.png",
    detailSummary:
      "Built in August 2026 as an autonomous continuous-research system. A GitHub Actions cron triggers Python scripts that pull programme listings, track seen job IDs in data/seen-jobs.json, and send structured alerts to my inbox when new roles open.",
    experience: [
      "Wrote check_jobs.py to fetch listings, filter UK Tech 2027 graduate programmes and summer internships, compare against seen job IDs/opening dates, and send HTML digests only for newly announced roles.",
      "Persisted state in a git-backed data/seen-jobs.json ledger (no database) and auto-committed updates after each Actions run so the monitor stays continuous across runners.",
      "Orchestrated everything on ubuntu-latest with a */15 cron, setup-python, secrets-backed Gmail SMTP (ssl://smtp.gmail.com:465), and notify_failure.py for pipeline failure alerts — Mac is not part of the runtime."
    ],
    highlights: [
      "Skill: autonomous continuous research — 24/7 monitoring, not one-off scraping.",
      "Runtime: Python 3.12 on GitHub Actions (checkout, setup-python, git-auto-commit).",
      "Data path: programme API → filter/dedupe → Gmail SMTP → inbox; state loops back via seen-jobs.json.",
      "No frontend, no Docker, no cloud DB — private GitHub-hosted automation only."
    ]
  },
  {
    id: 2,
    title: "Vibe Generator",
    description:
      "A full-stack music intelligence platform with secure OAuth, high-throughput data pipelines, and caching designed for low-latency personalized experiences.",
    year: "2025",
    technologies: ["Node.js", "Express", "Next.js", "OAuth", "JWT"],
    liveUrl: "https://vibegenerator.vercel.app/",
    githubUrl: "https://github.com/efekatircioglu/spotify-vibe-generator",
    featured: true,
    imageUrl: "/images/vibegenerator.png",
    detailSummary:
      "Vibe Generator is a production music platform focused on secure authentication, resilient API aggregation, and performance under external rate limits.",
    experience: [
      "Architected a secure OAuth 2.0 gateway with JWT session management and AES-256 encryption for refresh tokens at rest.",
      "Built a Node.js pipeline that synchronizes and normalizes streaming metadata across 6+ external APIs using concurrent asynchronous I/O.",
      "Designed multi-layer caching and request batching that reduced average API latency by 60% and external calls by 80%."
    ],
    highlights: [
      "23x faster data retrieval through concurrent async ingestion.",
      "Production-ready auth and token security model.",
      "Public live deployment showcasing end-to-end backend and product craft."
    ]
  },
  {
    id: 2,
    title: "SAND",
    description:
      "Student Assistance & Navigation Dashboard — a university ticketing platform that replaces scattered emails with structured issue routing for students, TAs, and professors.",
    year: "2025",
    technologies: ["Django", "React", "REST APIs", "S3/R2", "IMAP/SMTP", "GitHub Actions"],
    liveUrl: "https://sand-lyart.vercel.app/",
    imageUrl: "/images/sand.png",
    architectureImageUrl: "/images/sand-architecture.png",
    detailSummary:
      "SAND gives students one place to raise attendance disputes, flag grading issues, and ask questions, while giving staff role-based tools to triage and resolve tickets quickly.",
    experience: [
      "Led a 7-person Agile team architecting a Django API + React SPA with session auth, CSRF protection, and modular backend apps for tickets, users, notifications, reports, and email integration.",
      "Designed the relational schema around Users, Tickets, Messages, Departments, Courses, Modules, attachments, and notification preferences for department-aware routing.",
      "Integrated object storage for ticket attachments and IMAP/SMTP mail flows, with 94% backend and 97% frontend coverage across 595 GitHub Actions suites."
    ],
    highlights: [
      "Smart ticketing with open-to-resolved status tracking.",
      "Role-based access for students, TAs, and professors.",
      "Modular Django architecture with SPA frontend, relational DB, and external mail/storage services.",
      "Live at sand-lyart.vercel.app."
    ]
  },
  {
    id: 3,
    title: "King's Labs — MedibleGo",
    description:
      "Internal operations portal for AI-led customer interviews: schedule calls, capture insights, and feed context into WhatsApp follow-ups from one dashboard.",
    year: "2026",
    technologies: ["TypeScript", "AI Agents", "ElevenLabs", "Data Pipelines"],
    liveUrl: "https://medible-go-ecru.vercel.app/dashboard",
    imageUrl: "/images/mediblego.png",
    detailSummary:
      "MedibleGo is the King's Labs client platform that automates voice-driven interviews and turns successful interview outcomes into structured customer context for acquisition workflows.",
    experience: [
      "Engineered the TypeScript client platform with a 10-person team as the core customer acquisition engine.",
      "Deployed an ElevenLabs AI agent for automated voice-driven customer interviews, including scheduling flows from the dashboard.",
      "Architected backend data extraction pipelines feeding a WhatsApp chatbot that continuously addresses specific customer needs."
    ],
    highlights: [
      "Schedule Interview dashboard with contact, timezone, and WhatsApp sync.",
      "AI-led interview automation tied to live acquisition workflows.",
      "Live demo at medible-go-ecru.vercel.app."
    ]
  },
  {
    id: 4,
    title: "Cooked",
    description:
      "A recipe management and meal-planning web app delivered while leading a team of 5 developers.",
    year: "2025",
    technologies: ["Python", "Django", "CSS"],
    liveUrl: "https://cooked.dylankainth.com/",
    imageUrl: "/images/cooked.png",
    detailSummary:
      "Cooked is a recipe-focused web application built around clear discovery and organization flows, delivered under team leadership.",
    experience: [
      "Led a team of 5 developers shaping product direction and delivery.",
      "Coordinated Django backend structure and server-rendered application behavior.",
      "Guided interface decisions so content stayed readable and approachable."
    ],
    highlights: [
      "Led a 5-developer delivery team.",
      "Live client-facing deployment.",
      "Focused meal-planning and recipe workflow."
    ]
  },
  {
    id: 5,
    title: "Air Pollution Dashboard",
    description:
      "Led a 4-person team building a JavaFX GUI to explore London air pollution data across millions of records from 2018 to 2023.",
    year: "2025",
    technologies: ["Java", "JavaFX", "Data Visualization"],
    imageUrl: "/images/air-pollution-dashboard.png",
    detailSummary:
      "An exploratory desktop dashboard for inspecting London air-quality trends at scale.",
    experience: [
      "Led a team of 4 through end-to-end design and delivery.",
      "Directed JavaFX visualizations that balanced performance and clarity on large datasets.",
      "Treated the work as both a data and communication problem."
    ],
    highlights: [
      "Visualized ~5 million data points.",
      "Team leadership on a complex visualization product.",
      "Exploration-first desktop GUI."
    ]
  },
  {
    id: 6,
    title: "King's Labs — TrackIt",
    description:
      "Full-stack Next.js task management app for King's Labs with NextAuth and Neon-backed user-specific APIs.",
    year: "2025",
    technologies: ["Next.js", "NextAuth", "PostgreSQL", "Neon"],
    imageUrl: "/images/track-it.png",
    detailSummary:
      "TrackIt combines authentication, persistence, and user-specific task workflows into a practical full-stack product.",
    experience: [
      "Built authenticated task flows for secure user-specific data management.",
      "Implemented CRUD APIs backed by Neon PostgreSQL with multi-tenant isolation.",
      "Worked across frontend and backend so the product felt coherent from sign-in to daily use."
    ],
    highlights: [
      "Secure NextAuth-based sessions.",
      "Neon/PostgreSQL persistence.",
      "Practical full-stack delivery with King's Labs."
    ]
  },
  {
    id: 7,
    title: "Simulation In Jungle",
    description:
      "Coursework simulation of entity interactions inside a forest on a 2D grid.",
    year: "2025",
    technologies: ["Java"],
    imageUrl: "/images/simulation-in-jungle.png",
    detailSummary:
      "A grid-based simulation focused on object-oriented structure and consistent system behavior.",
    experience: [
      "Designed entity interactions and state transitions.",
      "Organized environment rules into maintainable Java logic.",
      "Prioritized predictable simulation behavior."
    ],
    highlights: [
      "Grid-based entity simulation.",
      "Strong OO design focus.",
      "Coursework systems project."
    ]
  },
  {
    id: 8,
    title: "Survival In The City",
    description:
      "Text-based adventure where the player navigates a city, gathers parts, and escapes to a shelter.",
    year: "2024",
    technologies: ["Java"],
    imageUrl: "/images/survival-in-the-city.png",
    detailSummary:
      "A narrative adventure centered on progression, exploration, and branching decisions.",
    experience: [
      "Built a text gameplay loop around exploration and resource choices.",
      "Structured progression and item collection in Java.",
      "Practiced state management and branching interactions."
    ],
    highlights: [
      "Narrative-driven gameplay.",
      "Exploration and progression systems.",
      "Java coursework project."
    ]
  },
  {
    id: 9,
    title: "Space Invaders",
    description: "A personal arcade-inspired game built with Python and Pygame.",
    year: "2024",
    technologies: ["Python", "Pygame"],
    imageUrl: "/images/space-invaders.png",
    detailSummary:
      "A recreation of classic arcade pacing used to practice real-time loops, collisions, and feedback.",
    experience: [
      "Implemented the core arcade loop in Python and Pygame.",
      "Handled collision, movement, and responsive feedback.",
      "Used the project to deepen game-development fundamentals."
    ],
    highlights: [
      "Arcade-inspired gameplay loop.",
      "Python and Pygame implementation.",
      "Focus on core mechanics."
    ]
  }
];

export const getProjects = (): Project[] => projects;
