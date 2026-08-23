import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-rule py-14">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h3 className="font-display text-3xl font-semibold text-foreground mb-2">
              Efe Katircioglu
            </h3>
            <p className="text-muted-foreground max-w-md">
              Technology Intern at ICBC Standard Bank &amp; Final-year Computer Science student at
              King&apos;s College London, graduating Summer 2027. Based in London, UK.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/efe-katircioglu-420309328/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/efekatircioglu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:katirciogluefe04@gmail.com"
              className="p-2.5 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-border/70 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Efe Katircioglu
        </div>
      </div>
    </footer>
  );
};

export default Footer;
