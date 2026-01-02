import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Efe Katircioglu</h3>
          <p className="text-blue-light mb-8">
            Computer Science Student & Software Engineer
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.linkedin.com/in/efe-katircioglu-420309328/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-navy-light hover:bg-blue-accent transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/efekatircioglu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-navy-light hover:bg-blue-accent transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:katirciogluefe04@gmail.com"
              className="p-3 rounded-full bg-navy-light hover:bg-blue-accent transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="border-t border-navy-light pt-8">
            <p className="text-blue-light text-sm">
              © {new Date().getFullYear()} Efe Katircioglu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;