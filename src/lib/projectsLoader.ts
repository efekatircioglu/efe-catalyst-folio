// Function to parse projects from Projects.txt format
export interface Project {
  id: number;
  title: string;
  description: string;
  year: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const parseProjectsFromText = (text: string): Project[] => {
  const projects: Project[] = [];
  const lines = text.trim().split('\n').filter(line => line.trim());
  
  for (let i = 0; i < lines.length; i += 6) {
    if (i + 5 < lines.length) {
      const title = lines[i].trim();
      const description = lines[i + 1].trim();
      const year = lines[i + 2].trim();
      const technologies = lines[i + 3].trim().split(',').map(tech => tech.trim());
      const liveUrl = lines[i + 4].trim() || undefined;
      const githubUrl = lines[i + 5].trim() || undefined;
      
      projects.push({
        id: projects.length + 1,
        title,
        description,
        year,
        technologies,
        liveUrl,
        githubUrl,
        featured: projects.length === 0, // First project is featured
      });
    }
  }
  
  return projects;
};

// Static projects data from Projects.txt
export const projectsData = `Vibe Generator
An interactive web application that generates personalized vibes and moods. Built with modern web technologies to create an engaging user experience.
2024
React,TypeScript,Tailwind CSS,Vercel
https://vibegenerator.vercel.app/
https://github.com/efekatircioglu/

KerGNN Traffic Accident Prediction
A KerGNN model predicting traffic accidents on city-level graphs using graph kernels and learnable filters.
2024
Dissertation,Python,PyTorch,Torch Geometric,SciKit-learn,Machine Learning


SocialEase
An AI-powered real-time social coaching app that helps users practice conversations and improve social skills through instant feedback on speech and nonverbal cues.
2025
Flutter,Dart,Serverpod,Google Cloud,Machine Learning,Claude


Functional Language Compiler
A compiler for 'Fun', a functional language supporting arithmetic, logic, loops, global variables, and I/O, built using Scala and targeting the LLVM-IR.
2024
Scala,LLVM,Compiler,Functional Programming


Pacman MDP Agent
A Python-based Markov Decision Process solver controlling Pacman to maximize score and avoid ghosts across multiple maps.
2024
Python,MDP,Value Iteration,Reinforcement Learning


ProdDaemon
A Rust-based daemon and desktop application, providing screen-time analytics and personalized productivity advice through machine learning predictions.
2024
Rust,Python,Tauri,PostgreSQL,SolidJS
`;

export const getProjects = (): Project[] => {
  return parseProjectsFromText(projectsData);
};