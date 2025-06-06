
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const languages = [
    { name: "Kotlin", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
    { name: "XML", level: "Intermediate" },
    { name: "C++", level: "Beginner" },
  ];

  const tools = [
    { name: "Android Studio", level: "Intermediate" },
    { name: "Firebase", level: "Intermediate" },
    { name: "Git/GitHub", level: "Intermediate" },
    { name: "RoomDB", level: "Beginner" },
  ];

  const frameworks = [
    { name: "Material Design", level: "Intermediate" },
    { name: "Room Database", level: "Beginner" },
    { name: "Firebase Authentication", level: "Intermediate" },
    { name: "Google Sign-In", level: "Beginner" },
    { name: "Google Fit API", level: "Beginner" },
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

const SkillCategory = ({ title, skills }: { title: string; skills: { name: string; level: string }[] }) => {
  // Function to get the appropriate color based on skill level
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "text-green-600 dark:text-green-500";
      case "Intermediate":
        return "text-blue-600 dark:text-blue-500";
      case "Beginner":
        return "text-amber-600 dark:text-amber-500";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className="reveal">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="space-y-3">
          {skills.map((skill, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="font-medium">{skill.name}</span>
              <span className={`text-sm font-medium ${getLevelColor(skill.level)}`}>
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Skills;
