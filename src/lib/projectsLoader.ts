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
  const lines = text.trim().split('\n');
  
  // Split by double newlines to get project blocks
  const projectBlocks = text.trim().split('\n\n');
  
  projectBlocks.forEach((block, index) => {
    const blockLines = block.trim().split('\n').filter(line => line.trim());
    
    if (blockLines.length >= 4) {
      const title = blockLines[0].trim();
      const description = blockLines[1].trim();
      const year = blockLines[2].trim();
      const technologies = blockLines[3].trim().split(',').map(tech => tech.trim());
      const liveUrl = blockLines[4]?.trim() || undefined;
      const githubUrl = blockLines[5]?.trim() || undefined;
      
      projects.push({
        id: projects.length + 1,
        title,
        description,
        year,
        technologies,
        liveUrl: liveUrl || undefined,
        githubUrl: githubUrl || undefined,
        featured: projects.length === 0, // First project is featured
      });
    }
  });
  
  return projects;
};

// Static projects data from Projects.txt
export const projectsData = `Cooked
A modern web application for recipe management and meal planning. Discover, save, and organize your favorite recipes with an intuitive interface.
2025
Python, Django, CSS
https://cooked.dylankainth.com/

Vibe Generator
An interactive web application that generates personalized vibes and moods. Built with modern web technologies to create an engaging user experience.
2025
Node.js,Express,Next.js, OAuth
https://vibegenerator.vercel.app/
https://github.com/efekatircioglu/spotify-vibe-generator

Air Pollution Dashboard
Developed a JavaFX-based GUI to visualize London's air pollution data from 2018 to 2023, utilizing a dataset of 5 million data points.
2025
Java,JavaFX,Data Visualization

Track-It
For Klabs Academy, engineered a full-stack Next.js app with NextAuth-based user authentication. Developed custom API endpoints to manage user-specific tasks.
2025
Next.js,NextAuth,PostgreSQL,Neon

Simulation In Jungle
Third Coursework project. Simulation of interactions between several entities within a forest in a 2D-grid.
2025
Java

Survival In The City
Second coursework project. A text-based adventure game where the player must navigate a city to find parts for a car and escape to a shelter.
2024
Java

Space Invaders
A personal project inspired by the classic arcade game Space Invaders. 
2024
Python, Pygame
`;

export const getProjects = (): Project[] => {
  const projects = parseProjectsFromText(projectsData);
  console.log('Parsed projects:', projects);
  return projects;
};