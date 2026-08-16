import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group"
            aria-label="Go to top"
          >
            <img
              src="/nav-logo.png"
              alt="Efe Katircioglu logo"
              className="h-9 w-9 rounded-md object-cover"
            />
            <span className="hidden sm:inline font-display text-lg text-foreground group-hover:text-primary transition-colors">
              Efe Katircioglu
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            <Button variant="ghost" onClick={() => scrollToSection("hero")}>
              About
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("experience")}>
              Experience
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("projects")}>
              Projects
            </Button>
            <Button variant="hero" asChild>
              <a href="mailto:katirciogluefe04@gmail.com">Contact</a>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl absolute top-full left-0 right-0 z-50">
            <div className="px-4 py-4 space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection("hero")}
              >
                About
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </Button>
              <Button variant="hero" className="w-full justify-start" asChild>
                <a href="mailto:katirciogluefe04@gmail.com">Contact</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
