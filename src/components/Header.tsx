
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/anmoltrvd01", ariaLabel: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/anmoltrvd01", ariaLabel: "LinkedIn" },
    { icon: Mail, href: "mailto:anmoltrvd01@gmail.com", ariaLabel: "Email" }
  ];

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-md py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold flex items-center gap-2 text-android-green">
          <span>&lt;Anmol Trivedi /&gt;</span>
        </a>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-android-green font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="ml-4 flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.ariaLabel}
                href={link.href}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="text-gray-600 hover:text-android-green dark:text-gray-300 dark:hover:text-android-green transition-colors"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg py-4">
          <div className="flex flex-col space-y-4 px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-android-green py-2 font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-5 py-2">
              {socialLinks.map((link) => (
                <a
                  key={link.ariaLabel}
                  href={link.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="text-gray-600 hover:text-android-green dark:text-gray-300 dark:hover:text-android-green"
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
