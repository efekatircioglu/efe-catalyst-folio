import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-end md:items-center pt-24 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-subtle pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 opacity-30 md:opacity-50 pointer-events-none">
        <img
          src="/images/Screenshot 2026-03-14 at 21.21.20.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[center_20%] grayscale-[20%] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-sm uppercase tracking-[0.22em] text-primary mb-5 font-medium">
            Backend · Pipelines · CI/CD · AI Tools
          </p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[0.95] mb-6">
            Efe Katircioglu
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed">
            Final-year Computer Science student at King&apos;s College London · graduating Summer 2027
            · London, UK
          </p>

          <p className="text-base md:text-lg text-muted-foreground/90 max-w-2xl mb-10 leading-relaxed">
            I build backend applications, data pipelines, CI/CD systems, and automated
            scripts — and work with AI tools to ship secure, production-ready services
            from OAuth and APIs through testing, deployment, and observability.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <Button variant="hero" size="lg" asChild>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4" />
                View CV
              </a>
            </Button>
            <Button variant="social" size="lg" onClick={scrollToExperience}>
              <ArrowDown className="w-4 h-4" />
              Experience
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a
                href="https://github.com/efekatircioglu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/efe-katircioglu-420309328/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="mailto:katirciogluefe04@gmail.com">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </Button>
          </div>

          <div className="border-t border-border/70 pt-6 space-y-5 max-w-3xl">
            {[
              {
                label: "Languages",
                items: ["TypeScript", "JavaScript", "Python", "Java", "C++", "C#", "SQL", "HTML", "CSS"],
              },
              {
                label: "Frameworks",
                items: ["Node.js", "Express", "Next.js", "React", "Django", "Angular", ".NET", "JavaFX"],
              },
              {
                label: "Tools",
                items: [
                  "Git",
                  "GitHub",
                  "npm",
                  "TeamCity",
                  "GitHub Actions",
                  "CI/CD",
                  "OAuth",
                  "JWT",
                  "REST APIs",
                  "PostgreSQL",
                  "Neon",
                  "Confluence",
                  "MCP",
                ],
              },
              {
                label: "Cloud / AI",
                items: [
                  "AWS",
                  "Vercel",
                  "DigitalOcean",
                  "S3/R2",
                  "ElevenLabs",
                  "Cursor",
                  "Claude",
                  "Gemini",
                ],
              },
            ].map((group) => (
              <div key={group.label} className="space-y-2">
                <p className="text-xs font-medium tracking-wide text-primary/90">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
