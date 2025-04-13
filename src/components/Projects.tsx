
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
      badges: ["Kotlin", "Android Studio", "Google Fit API", "RoomDB", "Google Sign-In", "Material Design"],
      github: "https://github.com/anmoltrvd01/MentalHealthAiAssistant.git",
      live: "#",
      features: [
        "Clean dashboard UI showing health metrics like steps, sleep, calories",
        "Google Fit API integration for health data",
        "Local user data storage using RoomDB",
        "Google Sign-In for authentication",
        "Material Design components for a cohesive Android experience",
        "Planned Gemini API integration for health data analysis"
      ]
    },
    {
      title: "Blinkit Clone",
      description: "A working clone of the popular Blinkit grocery delivery application with authentication and database integration.",
      image: "/placeholder.svg",
      badges: ["Kotlin", "Firebase", "XML", "Authentication", "Material Design"],
      github: "https://github.com/anmoltrvd01/BlinkitCloneUser.git",
      live: "#",
      features: [
        "Splash screen with smooth animations",
        "OTP verification system",
        "Firebase Authentication",
        "Material Design components for Android standard UI",
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
    <Card className="flex flex-col reveal android-card h-full material-card" style={{ animationDelay: `${index * 200}ms` }}>
      <div className="relative h-48 bg-muted overflow-hidden rounded-t-lg">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-android-green/20 to-android-navy/30">
          <Smartphone className="h-20 w-20 text-android-green opacity-50" />
        </div>
      </div>
      
      <CardHeader className="material-card-header">
        <CardTitle className="text-2xl font-medium">{project.title}</CardTitle>
        <CardDescription className="text-base">{project.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.badges.map((badge: string, i: number) => (
            <Badge key={i} variant="secondary" className="bg-android-green/10 text-android-green hover:bg-android-green/20 rounded-full px-3 py-1">
              {badge}
            </Badge>
          ))}
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-muted-foreground mb-2">KEY FEATURES:</h4>
          <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
            {project.features.map((feature: string, i: number) => (
              <li key={i} className="material-list-item">{feature}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-wrap gap-3 pt-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-1 rounded-full material-button-outline"
          onClick={() => window.open(project.github, '_blank')}
        >
          <Github size={16} className="mr-1" /> Repository
        </Button>
        <Button 
          variant="default" 
          size="sm" 
          className="gap-1 rounded-full bg-android-green hover:bg-android-green/90 material-button"
          onClick={() => window.open(project.live, '_blank')}
        >
          <ExternalLink size={16} className="mr-1" /> View Project
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Projects;
