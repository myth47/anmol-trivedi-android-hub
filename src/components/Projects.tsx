import { ExternalLink, Github, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ProjectLogo from "./ProjectLogo";

const Projects = () => {
  const projects = [
    {
      key: "mental-health-ai",
      title: "Mental Health AI Assistant",
      description:
        "An intelligent mobile app designed to assist users with mental health tracking and personalized support.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=300",
      logo: "mental-health-ai",
      badges: ["Kotlin", "Android Studio", "Google Fit API", "RoomDB", "Google Sign-In", "Material Design"],
      github: "https://github.com/anmoltrvd01/MentalHealthAiAssistant.git",
      live: "#",
      features: [
        "Clean dashboard UI showing health metrics like steps, sleep, calories",
        "Google Fit API integration for health data",
        "Local user data storage using RoomDB",
        "Google Sign-In for authentication",
        "Material Design components for a cohesive Android experience",
        "Planned Gemini API integration for health data analysis",
      ],
    },
    {
      key: "blinkit-clone",
      title: "Blinkit Clone",
      description:
        "A working clone of the popular Blinkit grocery delivery application with authentication and database integration.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=300",
      logo: "blinkit-clone",
      badges: ["Kotlin", "Firebase", "XML", "Authentication", "Material Design"],
      github: "https://github.com/anmoltrvd01/BlinkitCloneUser.git",
      live: "#",
      features: [
        "Splash screen with smooth animations",
        "OTP verification system",
        "Firebase Authentication",
        "Material Design components for Android standard UI",
        "Sign-In and OTP fragments",
        "Firebase Realtime Database integration (in progress)",
      ],
    },
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
    <Card className="flex flex-col reveal android-card h-full material-card relative" style={{ animationDelay: `${index * 200}ms` }}>
      <div className="flex flex-col items-center relative">
        <div className="w-full h-24 relative z-10 rounded-t-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="absolute w-full h-full object-cover opacity-80"
            style={{ minHeight: "96px" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 z-20">
          <ProjectLogo projectKey={project.logo} />
        </div>
      </div>

      <div className="pt-10 pb-0 px-6 flex-grow flex flex-col">        
        <CardHeader className="material-card-header items-center text-center pt-2 pb-1">
          <CardTitle className="text-2xl font-medium mb-1">{project.title}</CardTitle>
          <CardDescription className="text-base">{project.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-grow w-full p-0 mt-1">
          <div className="flex flex-wrap gap-2 justify-center mb-2 mt-0">
            {project.badges.map((badge: string, i: number) => (
              <Badge key={i} variant="secondary" className="bg-android-green/10 text-android-green hover:bg-android-green/20 rounded-full px-3 py-1">
                {badge}
              </Badge>
            ))}
          </div>
          <div className="space-y-1">
            <h4 className="font-medium text-xs text-muted-foreground mb-0 mt-3 tracking-wide text-center uppercase">
              Key Features
            </h4>
            <ul className="space-y-1 list-disc pl-4 text-muted-foreground text-xs text-left">
              {project.features.map((feature: string, i: number) => (
                <li key={i} className="material-list-item">{feature}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </div>
      <CardFooter className="flex flex-wrap gap-2 pt-2 justify-center">
        <Button
          variant="outline"
          size="sm"
          className="gap-1 rounded-full material-button-outline"
          onClick={() => window.open(project.github, "_blank")}
        >
          <Github size={16} className="mr-1" /> Repository
        </Button>
        <Button
          variant="default"
          size="sm"
          className="gap-1 rounded-full bg-android-green hover:bg-android-green/90 material-button"
          onClick={() => window.open(project.live, "_blank")}
        >
          <ExternalLink size={16} className="mr-1" /> View Project
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Projects;
