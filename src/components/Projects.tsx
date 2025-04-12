
import { ExternalLink, Github, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Mental Health AI Assistant",
      description: "An intelligent mobile app designed to assist users with mental health tracking and personalized support.",
      image: "/placeholder.svg",
      badges: ["Kotlin", "Android Studio", "Google Fit API", "RoomDB", "Google Sign-In"],
      github: "#",
      live: "#",
      features: [
        "Clean dashboard UI showing health metrics like steps, sleep, calories",
        "Google Fit API integration for health data",
        "Local user data storage using RoomDB",
        "Google Sign-In for authentication",
        "Planned Gemini API integration for health data analysis"
      ]
    },
    {
      title: "Blinkit Clone",
      description: "A working clone of the popular Blinkit grocery delivery application with authentication and database integration.",
      image: "/placeholder.svg",
      badges: ["Kotlin", "Firebase", "XML", "Authentication"],
      github: "#",
      live: "#",
      features: [
        "Splash screen with smooth animations",
        "OTP verification system",
        "Firebase Authentication",
        "Sign-In and OTP fragments",
        "Firebase Realtime Database integration (in progress)"
      ]
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <Card className="flex flex-col reveal android-card h-full" style={{ animationDelay: `${index * 200}ms` }}>
      <div className="relative h-48 bg-muted overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-android-navy/5">
          <Smartphone className="h-20 w-20 text-android-green opacity-30" />
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-2xl">{project.title}</CardTitle>
        <CardDescription className="text-base">{project.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.badges.map((badge: string, i: number) => (
            <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
              {badge}
            </Badge>
          ))}
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-muted-foreground mb-2">KEY FEATURES:</h4>
          <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
            {project.features.map((feature: string, i: number) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-wrap gap-3 pt-2">
        <Button variant="outline" size="sm" className="gap-1">
          <Github size={16} className="mr-1" /> Repository
        </Button>
        <Button variant="default" size="sm" className="gap-1 bg-android-green hover:bg-android-green/90">
          <ExternalLink size={16} className="mr-1" /> View Project
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Projects;
