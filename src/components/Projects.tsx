import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Project data - easily expandable by adding new objects to this array
const projects = [
  {
    id: 1,
    title: "Vibe Generator",
    description: "An interactive web application that generates personalized vibes and moods. Built with modern web technologies to create an engaging user experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://vibegenerator.vercel.app/",
    githubUrl: "https://github.com/efekatircioglu/", // Update with actual repo URL when available
    featured: true,
  },
  // Add more projects here as needed
  // {
  //   id: 2,
  //   title: "Another Project",
  //   description: "Description of another project...",
  //   technologies: ["Tech1", "Tech2"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com/username/repo",
  //   featured: false,
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-navy">
            Projects
          </h2>
          
          <div className="grid gap-8 md:gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bg-card rounded-lg shadow-medium overflow-hidden transition-all duration-300 hover:shadow-large ${
                  project.featured ? 'ring-2 ring-blue-accent ring-opacity-50' : ''
                }`}
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-navy">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="px-3 py-1 bg-blue-accent text-primary-foreground text-sm rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-medium text-lg mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="hero"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                      
                      <Button
                        variant="social"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-medium text-lg mb-6">
              More projects coming soon! Currently working on exciting new developments.
            </p>
            <Button variant="professional" size="lg" asChild>
              <a
                href="https://github.com/efekatircioglu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View All Repositories
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;