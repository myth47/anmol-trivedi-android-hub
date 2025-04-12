
import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <a 
              href="https://github.com/anmoltrvd01" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full hover:bg-background text-muted-foreground hover:text-android-green transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/anmoltrvd01" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full hover:bg-background text-muted-foreground hover:text-android-green transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:anmoltrvd01@gmail.com" 
              aria-label="Email"
              className="p-2 rounded-full hover:bg-background text-muted-foreground hover:text-android-green transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <Separator className="w-16" />
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {year} Anmol Trivedi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
