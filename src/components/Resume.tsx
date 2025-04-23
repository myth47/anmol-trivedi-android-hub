
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import html2pdf from "html2pdf.js";

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

const Resume = () => {
  const [showResume, setShowResume] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const downloadResume = () => {
    const element = resumeRef.current;
    if (!element) return;
    const opt = {
      margin: [20, 20],
      filename: "anmol_trivedi_resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };
    html2pdf().set(opt).from(element).save();
  };

  // Group skills under headers
  const languageSkills = technicalSkills.filter(s => s.category === "Language");
  const toolSkills = technicalSkills.filter(s => s.category === "Tool");
  const frameworkSkills = technicalSkills.filter(s => s.category === "Framework");

  return (
    <section id="resume" className="section !py-10 md:!py-14">
      <div className="flex justify-center mb-6">
        <Button
          onClick={() => setShowResume(!showResume)}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
        >
          <FileText size={16} />
          {showResume ? "Hide Resume" : "View Resume"}
        </Button>
      </div>

      {showResume && (
        <div className="flex flex-col items-center mb-2 gap-2">
          <Button onClick={downloadResume} variant="outline" className="flex items-center gap-2">
            <Download size={16} />
            Download PDF
          </Button>
        </div>
      )}

      {showResume && (
        <div ref={resumeRef} className="bg-white text-black px-8 py-8 rounded-lg shadow-lg max-w-[210mm] mx-auto leading-tight text-base border border-gray-200">
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Anmol Trivedi</h1>
            <div className="flex flex-wrap justify-center gap-3 mt-2 text-sm">
              <p className="text-gray-700">Ujjain (M.P.), India</p>
              <span className="text-gray-400">•</span>
              <p className="text-gray-700">+91 9303744650</p>
              <span className="text-gray-400">•</span>
              <p className="text-gray-700">anmoltrvd01@gmail.com</p>
            </div>
            <div className="flex justify-center gap-4 mt-1 text-sm">
              <p className="text-gray-700">GitHub: <a href="https://github.com/anmoltrvd01" className="text-purple-600">anmoltrvd01</a></p>
              <span className="text-gray-400">•</span>
              <p className="text-gray-700">LinkedIn: <a href="https://www.linkedin.com/in/anmoltrvd01" className="text-purple-600">anmoltrvd01</a></p>
            </div>
          </div>

          <Separator className="my-4" />
          
          {/* Education */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide text-gray-800">Education</h2>
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="text-base font-semibold mb-0">B.Tech in Computer Science & Business System</h3>
                <p className="text-sm">School of Information Technology, UTD, RGPV, Bhopal</p>
              </div>
              <p className="italic text-sm text-gray-600">Expected Graduation: 2026</p>
            </div>
          </div>

          {/* Technical Skills */}
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
          
          <Separator className="my-4" />

          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide text-gray-800">Projects</h2>
            
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-semibold">Mental Health AI Assistant</h3>
                <a href="https://github.com/anmoltrvd01/MentalHealthAiAssistant.git" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-600">GitHub</a>
              </div>
              <p className="italic text-gray-700 text-sm mb-1">Kotlin, Android Studio, Google Fit API, RoomDB, Google Sign-In</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Mobile app for mental health tracking and AI support.</li>
                <li>Dashboard for health metrics (steps, sleep, calories).</li>
                <li>Google Fit and RoomDB integration.</li>
                <li>Google Sign-In for authentication.</li>
              </ul>
            </div>
            
            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-semibold">Blinkit Clone</h3>
                <a href="https://github.com/anmoltrvd01/BlinkitCloneUser.git" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-600">GitHub</a>
              </div>
              <p className="italic text-gray-700 text-sm mb-1">Kotlin, Firebase Realtime Database, XML</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Grocery app clone with splash screen, OTP, and auth.</li>
                <li>SignIn/OTP fragments and Firebase Auth.</li>
                <li>Realtime Database integration in progress.</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide text-gray-800">Certifications</h2>
            <div className="flex justify-between items-baseline">
              <h3 className="text-base font-semibold">Introduction to C++ – Simplilearn</h3>
              <span className="italic text-sm text-gray-600">Issued Jan 2024</span>
            </div>
            <p className="text-sm">Credential ID: 4782685</p>
          </div>
          
          <div className="text-xs text-gray-500 text-right mt-8 italic">
            Last updated: April 2024
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
