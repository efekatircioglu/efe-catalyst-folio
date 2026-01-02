import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { getProjects } from "@/lib/projectsLoader";

const Projects = () => {
  const projects = getProjects();

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-lg shadow-medium overflow-hidden transition-all duration-300 hover:shadow-large hover:scale-105 border border-border"
              >
                {/* Project Preview Area */}
                <div className="aspect-video bg-gray-light border-b border-border flex items-center justify-center text-muted-foreground relative overflow-hidden">
                  {project.title === "Vibe Generator" ? (
                    <img 
                      src="/images/vibegenerator.png" 
                      alt="Vibe Generator Project" 
                      className="w-full h-full object-cover"
                    />
                  ) : project.title === "Simulation In Jungle" ? (
                    <img 
                      src="/images/simulation-in-jungle.png" 
                      alt="Simulation In Jungle Project" 
                      className="w-full h-full object-cover"
                    />
                  ) : project.title === "Space Invaders" ? (
                    <img 
                      src="/images/space-invaders.png" 
                      alt="Space Invaders Project" 
                      className="w-full h-full object-cover"
                    />
                  ) : project.title === "Track-It" ? (
                    <img 
                      src="/images/track-it.png" 
                      alt="Track-It Project" 
                      className="w-full h-full object-cover"
                    />
                  ) : project.title === "Air Pollution Dashboard" ? (
                    <img 
                      src="/images/air-pollution-dashboard.png" 
                      alt="Air Pollution Dashboard Project" 
                      className="w-full h-full object-cover"
                    />
                  ) : project.title === "Survival In The City" ? (
                    <img 
                      src="/images/survival-in-the-city.png" 
                      alt="Survival In The City Project" 
                      className="w-full h-full object-cover"
                    />
                  ) : project.title === "Cooked" ? (
                    <img 
                      src="/images/cooked.png" 
                      alt="Cooked Project" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-sm opacity-60 mb-1">{project.title.toLowerCase().replace(/\s+/g, '_')}</div>
                      {project.featured && (
                        <div className="text-xs bg-blue-accent text-primary-foreground px-2 py-1 rounded">
                          Featured
                        </div>
                      )}
                    </div>
                  )}
                  {project.featured && (
                    <div className="absolute top-2 right-2">
                      <div className="text-xs bg-blue-accent text-primary-foreground px-2 py-1 rounded">
                        Featured
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-card-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Year */}
                  <div className="text-xs text-muted-foreground mb-4">
                    {project.year}
                  </div>
                  
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-accent/20 text-blue-accent rounded-full text-xs border border-blue-accent/30"
                      >
                        #{tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-muted/20 text-muted-foreground rounded-full text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button
                        variant="hero"
                        size="sm"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Live
                        </a>
                      </Button>
                    )}
                    
                    {project.githubUrl && (
                      <Button
                        variant="social"
                        size="sm"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs"
                        >
                          <Github className="w-3 h-3" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
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