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
  detailSummary: string;
  experience: string[];
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Vibe Generator",
    description:
      "An interactive web application that generates personalized vibes and moods. Built with modern web technologies to create an engaging user experience.",
    year: "2025",
    technologies: ["Node.js", "Express", "Next.js", "OAuth"],
    liveUrl: "https://vibegenerator.vercel.app/",
    githubUrl: "https://github.com/efekatircioglu/spotify-vibe-generator",
    featured: true,
    imageUrl: "/images/vibegenerator.png",
    detailSummary:
      "Vibe Generator combines authentication, music-driven personalization, and a polished frontend flow to turn user listening context into a playful interactive experience.",
    experience: [
      "Designed the full user journey from login through vibe generation so the product felt fast, personal, and easy to explore.",
      "Integrated OAuth and backend logic to securely connect user accounts and power personalized responses with real user context.",
      "Focused on the product layer as much as the code, shaping a feature that feels engaging rather than purely technical."
    ],
    highlights: [
      "Built an end-to-end full-stack experience with authentication and dynamic content generation.",
      "Connected frontend interactions to backend processing in a way that kept the UI responsive and intuitive.",
      "Shipped a public live version that showcases both technical execution and product thinking."
    ]
  },
  {
    id: 2,
    title: "Cooked",
    description:
      "A modern web application for recipe management and meal planning, delivered while leading a team of 5 developers. Discover, save, and organize your favorite recipes with an intuitive interface.",
    year: "2025",
    technologies: ["Python", "Django", "CSS"],
    liveUrl: "https://cooked.dylankainth.com/",
    imageUrl: "/images/cooked.png",
    detailSummary:
      "Cooked is a recipe-focused web application centered on organizing meals and surfacing useful content through a clean, approachable interface, built while leading a 5-person development team.",
    experience: [
      "Led a team of 5 developers in shaping the product direction and delivering a clear recipe discovery and meal-planning experience.",
      "Coordinated the technical work across the team while using Django to support a structured backend and server-rendered application behavior.",
      "Guided the interface direction so the product stayed lightweight, readable, and centered on content usability."
    ],
    highlights: [
      "Led a 5-developer team on a client-facing recipe management product.",
      "Private client-facing project with a live deployment.",
      "Simple interface designed to keep the experience approachable."
    ]
  },
  {
    id: 3,
    title: "Air Pollution Dashboard",
    description:
      "Developed a JavaFX-based GUI to visualize London's air pollution data from 2018 to 2023, utilizing a dataset of 5 million data points.",
    year: "2025",
    technologies: ["Java", "JavaFX", "Data Visualization"],
    imageUrl: "/images/air-pollution-dashboard.png",
    detailSummary:
      "Air Pollution Dashboard turns a large public dataset into an explorable desktop interface, helping users understand air-quality trends across London over time while reflecting your role leading the team behind the project.",
    experience: [
      "Led a team of 4 developers and translated a large multi-year dataset into a UI that made patterns easier to inspect and compare.",
      "Directed the JavaFX implementation so the visualizations balanced performance, clarity, and usability while handling millions of records.",
      "Approached the project as both a data problem and a communication problem, guiding the team toward clearer user interpretation."
    ],
    highlights: [
      "Visualized roughly 5 million data points from 2018 to 2023.",
      "Led a 4-person team through the end-to-end build.",
      "Created a desktop GUI tailored for exploration instead of static reporting.",
      "Improved accessibility of complex environmental data through clear presentation."
    ]
  },
  {
    id: 4,
    title: "Track-It",
    description:
      "For Klabs Academy, engineered a full-stack Next.js app with NextAuth-based user authentication. Developed custom API endpoints to manage user-specific tasks.",
    year: "2025",
    technologies: ["Next.js", "NextAuth", "PostgreSQL", "Neon"],
    imageUrl: "/images/track-it.png",
    detailSummary:
      "Track-It is a full-stack task management platform built in collaboration with King's Labs, combining authentication, database-backed persistence, and user-specific workflows.",
    experience: [
      "Built authenticated task flows for King's Labs so users could securely manage their own data inside a clean full-stack product.",
      "Implemented custom API endpoints and database-backed task handling to support reliable create, update, and retrieval flows.",
      "Worked across frontend and backend layers, making sure the application felt coherent from sign-in through day-to-day task usage."
    ],
    highlights: [
      "Developed for King's Labs as a practical full-stack product.",
      "Used NextAuth to support secure user authentication and session handling.",
      "Connected the app to PostgreSQL and Neon for persistent user-specific task storage."
    ]
  },
  {
    id: 5,
    title: "Simulation In Jungle",
    description:
      "Third Coursework project. Simulation of interactions between several entities within a forest in a 2D-grid.",
    year: "2025",
    technologies: ["Java"],
    imageUrl: "/images/simulation-in-jungle.png",
    detailSummary:
      "Simulation In Jungle models interactions between multiple entities inside a grid-based environment, focusing on object-oriented structure and system behavior.",
    experience: [
      "Designed the simulation around clear entity interactions and state changes.",
      "Used Java to organize the rules of the environment into manageable logic.",
      "Focused on making the simulation behavior consistent and easy to reason about."
    ],
    highlights: [
      "Grid-based entity simulation.",
      "Coursework project centered on logic design.",
      "Emphasis on system rules and interaction handling."
    ]
  },
  {
    id: 6,
    title: "Survival In The City",
    description:
      "Second coursework project. A text-based adventure game where the player must navigate a city to find parts for a car and escape to a shelter.",
    year: "2024",
    technologies: ["Java"],
    imageUrl: "/images/survival-in-the-city.png",
    detailSummary:
      "Survival In The City is a narrative-driven text adventure built around progression, exploration, and decision-making under pressure.",
    experience: [
      "Created a text-based gameplay loop that encouraged exploration and resource-focused choices.",
      "Structured game logic in Java around player progression and item collection.",
      "Used the project to build confidence in state management and branching interactions."
    ],
    highlights: [
      "Text adventure gameplay.",
      "Exploration and progression-focused design.",
      "Java coursework project with narrative logic."
    ]
  },
  {
    id: 7,
    title: "Space Invaders",
    description: "A personal project inspired by the classic arcade game Space Invaders.",
    year: "2024",
    technologies: ["Python", "Pygame"],
    imageUrl: "/images/space-invaders.png",
    detailSummary:
      "Space Invaders recreates the feel of the arcade classic while giving room to practice gameplay loops, collision logic, and real-time feedback.",
    experience: [
      "Implemented the core arcade loop using Python and Pygame.",
      "Worked on collision handling, movement, and responsive player feedback.",
      "Used the project as a way to deepen practical game-development fundamentals."
    ],
    highlights: [
      "Classic arcade-inspired gameplay.",
      "Built with Python and Pygame.",
      "Focus on core game mechanics and polish."
    ]
  }
];

export const getProjects = (): Project[] => projects;