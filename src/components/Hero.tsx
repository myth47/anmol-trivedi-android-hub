
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16 pb-12 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 reveal active">
          <span className="text-android-green">Anmol</span> Trivedi
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6 md:mb-8 reveal active" style={{ animationDelay: "200ms" }}>
          Android Developer
        </h2>
        <p className="text-lg md:text-xl max-w-[42rem] text-muted-foreground mb-8 reveal active" style={{ animationDelay: "400ms" }}>
          Building modern, intuitive, and impactful Android applications with Kotlin and Java
        </p>
        <div className="flex flex-col sm:flex-row gap-4 reveal active" style={{ animationDelay: "600ms" }}>
          <Button asChild size="lg" className="bg-android-green hover:bg-android-green/90">
            <a href="#projects">View My Projects</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-8 animate-bounce p-2 rounded-full border border-muted-foreground/20 mt-16"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} className="text-muted-foreground" />
        </a>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
        <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-android-green blur-3xl"></div>
        <div className="absolute -left-20 top-40 w-60 h-60 rounded-full bg-android-navy blur-3xl"></div>
        <div className="absolute right-60 bottom-40 w-40 h-40 rounded-full bg-android-green blur-2xl"></div>
      </div>
    </section>
  );
};

export default Hero;
