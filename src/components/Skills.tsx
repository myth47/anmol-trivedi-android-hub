
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Skills = () => {
  const languages = [
    { name: "Kotlin", level: 90 },
    { name: "Java", level: 85 },
    { name: "XML", level: 80 },
    { name: "C++", level: 70 },
  ];

  const tools = [
    { name: "Android Studio", level: 90 },
    { name: "Firebase", level: 80 },
    { name: "Git/GitHub", level: 85 },
    { name: "RoomDB", level: 75 },
  ];

  const frameworks = [
    { name: "Material Design", level: 85 },
    { name: "Room Database", level: 75 },
    { name: "Firebase Authentication", level: 80 },
    { name: "Google Sign-In", level: 75 },
    { name: "Google Fit API", level: 70 },
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <SkillCategory title="Languages" skills={languages} />
        <SkillCategory title="Tools & Platforms" skills={tools} />
        <SkillCategory title="Libraries & Frameworks" skills={frameworks} />
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills }: { title: string; skills: { name: string; level: number }[] }) => {
  return (
    <Card className="reveal">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground text-sm">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Skills;
