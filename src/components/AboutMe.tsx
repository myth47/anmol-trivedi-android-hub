
import { Smartphone, Code, Server, Clock, Lightbulb, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutMe = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Android Development",
      description: "Native applications using Kotlin and Java for Android platforms"
    },
    {
      icon: Code,
      title: "Clean Architecture",
      description: "Focus on maintainable and scalable code architecture"
    },
    {
      icon: Server,
      title: "Backend Integration",
      description: "Firebase and local database systems like RoomDB"
    },
    {
      icon: Clock,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Analytical approach to tackle complex development challenges"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always expanding knowledge of mobile development"
    }
  ];

  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="space-y-8">
        <div className="max-w-3xl reveal">
          <p className="text-lg text-muted-foreground mb-4">
            I'm Anmol Trivedi, an Android developer with a focus on creating impactful mobile applications. Currently pursuing my Bachelor's in Computer Science and Business System at RGPV, Bhopal, I combine strong programming fundamentals with hands-on experience in Kotlin, Java, and Android development.
          </p>
          <p className="text-lg text-muted-foreground">
            My goal is to contribute to innovative mobile solutions that make a difference in users' daily lives. I'm passionate about clean, efficient code and creating intuitive user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 reveal">
          {features.map((feature, index) => (
            <Card key={index} className="border-l-4 border-android-green">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
