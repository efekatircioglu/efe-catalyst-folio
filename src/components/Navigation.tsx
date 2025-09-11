import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-foreground">
            EK
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('hero')}
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </Button>
            <Button 
              variant="social"
              asChild
            >
              <a href="mailto:katirciogluefe04@gmail.com">
                Contact
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md absolute top-full left-0 right-0 z-50">
            <div className="px-4 py-4 space-y-2">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-left"
                onClick={() => scrollToSection('hero')}
              >
                About
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-left"
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </Button>
              <Button 
                variant="social"
                className="w-full justify-start text-left"
                asChild
              >
                <a href="mailto:katirciogluefe04@gmail.com">
                  Contact
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;