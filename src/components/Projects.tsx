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
    <div className="flex h-full w-full items-end p-6 bg-secondary/50">
      <span className="font-display text-2xl text-foreground/80">{project.title}</span>
    </div>
  );
};

const Projects = () => {
  const projects = getProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-20 md:py-28 section-rule">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-14">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3 font-medium">
                Selected work
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
                Projects
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Click any project for a deeper look at the architecture, leadership, and outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="group border border-border/80 bg-card/40 overflow-hidden transition-colors duration-300 hover:border-primary/40"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-left w-full"
                    aria-label={`View details for ${project.title}`}
                  >
                    <div className="aspect-[16/10] bg-secondary/40 border-b border-border/80 relative overflow-hidden">
                      {renderProjectPreview(project)}
                      {project.featured && (
                        <div className="absolute top-4 left-4 text-xs tracking-wide uppercase bg-background/85 text-primary border border-primary/30 px-2.5 py-1">
                          Featured
                        </div>
                      )}
                    </div>

                    <div className="p-6 md:p-7">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-sm text-muted-foreground shrink-0">
                          {project.year}
                        </span>
                      </div>

                      <p className="text-muted-foreground text-sm mb-5 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="tech-chip">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                        View details
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </button>

                  {(project.liveUrl || project.githubUrl) && (
                    <div className="px-6 md:px-7 pb-6 flex gap-2">
                      {project.liveUrl && (
                        <Button variant="hero" size="sm" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
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
                          >
                            <Github className="w-3 h-3" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>

            <div className="mt-14">
              <Button variant="professional" size="lg" asChild>
                <a
                  href="https://github.com/efekatircioglu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                  View all repositories
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
          <DialogContent className="max-w-4xl p-0 overflow-hidden max-h-[90vh] border-border bg-card">
            <div className="overflow-y-auto max-h-[90vh]">
              <div className="aspect-video bg-secondary/40 border-b border-border relative overflow-hidden">
                {renderProjectPreview(selectedProject)}
              </div>

              <div className="p-6 sm:p-8">
                <DialogHeader className="pr-8">
                  <div className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
                    {selectedProject.year}
                  </div>
                  <DialogTitle className="font-display text-3xl sm:text-4xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-base leading-7 pt-2">
                    {selectedProject.detailSummary}
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-wrap gap-2 mt-6">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid gap-10 mt-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                  <div>
                    <h4 className="font-display text-xl text-foreground mb-3">
                      Overview
                    </h4>
                    <p className="text-muted-foreground leading-7 mb-8">
                      {selectedProject.description}
                    </p>

                    <h4 className="font-display text-xl text-foreground mb-3">
                      Experience
                    </h4>
                    <ul className="space-y-3 text-muted-foreground leading-7 mb-8">
                      {selectedProject.experience.map((item) => (
                        <li key={item} className="relative pl-5">
                          <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-primary/80" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {selectedProject.architectureImageUrl && (
                      <div>
                        <h4 className="font-display text-xl text-foreground mb-3">
                          Architecture
                        </h4>
                        <div className="border border-border/80 bg-secondary/30 overflow-hidden">
                          <img
                            src={selectedProject.architectureImageUrl}
                            alt={`${selectedProject.title} architecture diagram`}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="font-display text-xl text-foreground mb-3">
                      Highlights
                    </h4>
                    <ul className="space-y-3 text-muted-foreground leading-7 mb-8">
                      {selectedProject.highlights.map((item) => (
                        <li key={item} className="relative pl-5">
                          <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-primary/80" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3">
                      {selectedProject.liveUrl && (
                        <Button variant="hero" asChild>
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live site
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
                            Code
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
