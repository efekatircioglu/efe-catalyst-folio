import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-navy">
            EK
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
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
              <a href="mailto:efe.katircioglu@example.com">
                Contact
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;