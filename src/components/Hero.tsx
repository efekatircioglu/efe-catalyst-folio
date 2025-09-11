import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-navy">
            Efe Katircioglu
          </h1>
          <p className="text-xl md:text-2xl text-gray-medium mb-8 max-w-2xl mx-auto">
            Computer Science Student at King's College London
          </p>
          <p className="text-lg text-gray-medium mb-12 max-w-3xl mx-auto">
            Specializing in full-stack development, driven to solve meaningful problems 
            through user-centric applications and scalable server-side architecture.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="hero" 
              size="lg"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/efe-katircioglu-420309328/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              variant="social" 
              size="lg"
              asChild
            >
              <a 
                href="https://github.com/efekatircioglu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            
            <Button 
              variant="social" 
              size="lg"
              asChild
            >
              <a 
                href="mailto:efe.katircioglu@example.com"
                className="inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </Button>
            
            <Button 
              variant="professional" 
              size="lg"
              asChild
            >
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;