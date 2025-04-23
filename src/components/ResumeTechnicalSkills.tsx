
import React from "react";

const technicalSkills = [
  { name: "Kotlin", category: "Language", level: "Beginner" },
  { name: "Java", category: "Language", level: "Beginner" },
  { name: "C++", category: "Language", level: "Beginner" },
  { name: "XML", category: "Language", level: "Beginner" },
  { name: "Android Studio", category: "Tool", level: "Intermediate" },
  { name: "Firebase", category: "Tool", level: "Beginner" },
  { name: "Git/GitHub", category: "Tool", level: "Intermediate" },
  { name: "RoomDB", category: "Tool", level: "Beginner" },
  { name: "Material Design", category: "Framework", level: "Intermediate" },
  { name: "Google Fit API", category: "Framework", level: "Beginner" },
  { name: "Room Database", category: "Framework", level: "Beginner" },
  { name: "Google Sign-In", category: "Framework", level: "Beginner" },
  { name: "Firebase Authentication", category: "Framework", level: "Beginner" },
];

const ResumeTechnicalSkills = () => {
  const languageSkills = technicalSkills.filter(s => s.category === "Language");
  const toolSkills = technicalSkills.filter(s => s.category === "Tool");
  const frameworkSkills = technicalSkills.filter(s => s.category === "Framework");

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide text-gray-800">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-medium text-base mb-2 text-gray-800">Languages</h3>
          <ul className="space-y-1 list-disc pl-5">
            {languageSkills.map(skill => (
              <li key={skill.name} className="text-sm">
                {skill.name}: <span className="italic">{skill.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-base mb-2 text-gray-800">Tools & Platforms</h3>
          <ul className="space-y-1 list-disc pl-5">
            {toolSkills.map(skill => (
              <li key={skill.name} className="text-sm">
                {skill.name}: <span className="italic">{skill.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-base mb-2 text-gray-800">Libraries & Frameworks</h3>
          <ul className="space-y-1 list-disc pl-5">
            {frameworkSkills.map(skill => (
              <li key={skill.name} className="text-sm">
                {skill.name}: <span className="italic">{skill.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumeTechnicalSkills;
