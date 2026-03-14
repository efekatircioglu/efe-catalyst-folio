import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { getProjects, type Project } from "@/lib/projectsLoader";

const renderProjectPreview = (project: Project) => {
  if (project.imageUrl) {
    return (
      <img
        src={project.imageUrl}
        alt={`${project.title} project preview`}
        className="w-full h-full object-cover"
      />
    );
  }

  return (
    <div className="text-center">
      <div className="text-sm opacity-60 mb-1">
        {project.title.toLowerCase().replace(/\s+/g, "_")}
      </div>
      {project.featured && (
        <div className="text-xs bg-blue-accent text-primary-foreground px-2 py-1 rounded">
          Featured
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const projects = getProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
              Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="bg-card rounded-lg shadow-medium overflow-hidden transition-all duration-300 hover:shadow-large hover:-translate-y-1 border border-border flex flex-col"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-left w-full"
                    aria-label={`View details for ${project.title}`}
                  >
                    <div className="aspect-video bg-gray-light border-b border-border flex items-center justify-center text-muted-foreground relative overflow-hidden">
                      {renderProjectPreview(project)}
                      {project.featured && (
                        <div className="absolute top-2 right-2">
                          <div className="text-xs bg-blue-accent text-primary-foreground px-2 py-1 rounded">
                            Featured
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-card-foreground mb-3">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="text-xs text-muted-foreground mb-4">
                        {project.year}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-5">
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

                      <div className="inline-flex items-center gap-1 text-sm font-medium text-blue-accent">
                        View details
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  <div className="px-6 pb-6 mt-auto flex gap-2">
                    {project.liveUrl && (
                      <Button variant="hero" size="sm" asChild>
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
                      <Button variant="social" size="sm" asChild>
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
                </article>
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

      <Dialog
        open={Boolean(selectedProject)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProject(null);
          }
        }}
      >
        {selectedProject && (
          <DialogContent className="max-w-4xl p-0 overflow-hidden max-h-[90vh]">
            <div className="overflow-y-auto max-h-[90vh]">
              <div className="aspect-video bg-gray-light border-b border-border flex items-center justify-center text-muted-foreground relative overflow-hidden">
                {renderProjectPreview(selectedProject)}
                {selectedProject.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="text-xs bg-blue-accent text-primary-foreground px-2 py-1 rounded">
                      Featured Project
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8">
                <DialogHeader className="pr-8">
                  <div className="text-sm font-medium text-blue-accent mb-2">
                    {selectedProject.year}
                  </div>
                  <DialogTitle className="text-2xl sm:text-3xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-base leading-7">
                    {selectedProject.detailSummary}
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-wrap gap-2 mt-6">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-accent/20 text-blue-accent rounded-full text-xs border border-blue-accent/30"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>

                <div className="grid gap-8 mt-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Project Overview
                    </h4>
                    <p className="text-muted-foreground leading-7">
                      {selectedProject.description}
                    </p>

                    <h4 className="text-lg font-semibold text-foreground mt-8 mb-3">
                      Experience
                    </h4>
                    <ul className="space-y-3 text-muted-foreground leading-7 list-disc pl-5">
                      {selectedProject.experience.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Highlights
                    </h4>
                    <ul className="space-y-3 text-muted-foreground leading-7 list-disc pl-5">
                      {selectedProject.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3 mt-8">
                      {selectedProject.liveUrl && (
                        <Button variant="hero" asChild>
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Live Site
                          </a>
                        </Button>
                      )}

                      {selectedProject.githubUrl && (
                        <Button variant="social" asChild>
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default Projects;