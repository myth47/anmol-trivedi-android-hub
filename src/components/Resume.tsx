
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import html2pdf from "html2pdf.js";

const technicalSkills = [
  { name: "Kotlin", category: "Language", level: "Intermediate" },
  { name: "Java", category: "Language", level: "Beginner" },
  { name: "C++", category: "Language", level: "Beginner" },
  { name: "XML", category: "Language", level: "Intermediate" },
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
      margin: [8, 8],
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
        <div ref={resumeRef} className="bg-white text-black px-6 py-7 rounded-lg shadow-lg max-w-3xl mx-auto leading-tight text-[13px] border border-gray-200">
          {/* Header */}
          <div className="mb-3 text-center">
            <h1 className="text-2xl font-bold tracking-tight">Anmol Trivedi</h1>
            <p className="text-gray-700 mt-1 text-xs">Ujjain (M.P.), India | +91 9303744650 | anmoltrvd01@gmail.com</p>
            <div className="flex justify-center gap-4 mt-1 text-xs">
              <p className="text-gray-700">GitHub: <a href="https://github.com/anmoltrvd01" className="text-purple-600">anmoltrvd01</a></p>
              <p className="text-gray-700">LinkedIn: <a href="https://www.linkedin.com/in/anmoltrvd01" className="text-purple-600">anmoltrvd01</a></p>
            </div>
          </div>

          <Separator className="my-3" />
          
          {/* Technical Skills */}
          <div className="mb-4">
            <h2 className="text-base font-semibold border-b border-gray-300 pb-1 mb-[6px] uppercase tracking-wide text-gray-800">Technical Skills</h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex-1">
                <h3 className="font-medium text-xs mb-1 text-purple-800">Languages</h3>
                <ul className="space-y-1">
                  {languageSkills.map(skill => (
                    <li key={skill.name} className="flex justify-between text-xs">
                      <span>{skill.name}</span>
                      <span className={`px-2 py-0.5 rounded-full ${skill.level === "Intermediate" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-600"}`}>{skill.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-xs mb-1 text-purple-800">Tools & Platforms</h3>
                <ul className="space-y-1">
                  {toolSkills.map(skill => (
                    <li key={skill.name} className="flex justify-between text-xs">
                      <span>{skill.name}</span>
                      <span className={`px-2 py-0.5 rounded-full ${skill.level === "Intermediate" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-600"}`}>{skill.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-xs mb-1 text-purple-800">Libraries & Frameworks</h3>
                <ul className="space-y-1">
                  {frameworkSkills.map(skill => (
                    <li key={skill.name} className="flex justify-between text-xs">
                      <span>{skill.name}</span>
                      <span className={`px-2 py-0.5 rounded-full ${skill.level === "Intermediate" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-600"}`}>{skill.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <Separator className="my-3" />

          {/* Projects */}
          <div className="mb-4">
            <h2 className="text-base font-semibold border-b border-gray-300 pb-1 mb-[6px] uppercase tracking-wide text-gray-800">Projects</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-start gap-3">
                <div className="flex-shrink-0 mb-1 md:mb-0 md:mr-3">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=120&q=80"
                    alt="Mental Health AI Assistant"
                    className="rounded-md h-16 w-24 object-cover border"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-[15px] font-semibold">Mental Health AI Assistant</h3>
                    <a href="https://github.com/anmoltrvd01/MentalHealthAiAssistant.git" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-600">GitHub</a>
                  </div>
                  <p className="italic text-gray-700 text-xs mb-0.5">Kotlin, Android Studio, Google Fit API, RoomDB, Google Sign-In</p>
                  <ul className="list-disc pl-5 space-y-0.5 text-xs">
                    <li>Mobile app for mental health tracking and AI support.</li>
                    <li>Dashboard for health metrics (steps, sleep, calories).</li>
                    <li>Google Fit and RoomDB integration.</li>
                    <li>Google Sign-In for authentication.</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-3">
                <div className="flex-shrink-0 mb-1 md:mb-0 md:mr-3">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=120&q=80"
                    alt="Blinkit Clone"
                    className="rounded-md h-16 w-24 object-cover border"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-[15px] font-semibold">Blinkit Clone</h3>
                    <a href="https://github.com/anmoltrvd01/BlinkitCloneUser.git" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-600">GitHub</a>
                  </div>
                  <p className="italic text-gray-700 text-xs mb-0.5">Kotlin, Firebase Realtime Database, XML</p>
                  <ul className="list-disc pl-5 space-y-0.5 text-xs">
                    <li>Grocery app clone with splash screen, OTP, and auth.</li>
                    <li>SignIn/OTP fragments and Firebase Auth.</li>
                    <li>Realtime Database integration in progress.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-3" />

          {/* Education */}
          <div className="mb-4">
            <h2 className="text-base font-semibold border-b border-gray-300 pb-1 mb-[6px] uppercase tracking-wide text-gray-800">Education</h2>
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-semibold mb-0">B.Tech in Computer Science & Business System</h3>
              <span className="italic text-xs text-gray-600">Expected Graduation: 2026</span>
            </div>
            <p className="text-xs mt-0">School of Information Technology, UTD, RGPV, Bhopal</p>
          </div>

          {/* Certifications */}
          <div className="mb-1">
            <h2 className="text-base font-semibold border-b border-gray-300 pb-1 mb-[6px] uppercase tracking-wide text-gray-800">Certifications</h2>
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-semibold mb-0">Introduction to C++ – Simplilearn</h3>
              <span className="italic text-xs text-gray-600">Issued Jan 2024</span>
            </div>
            <p className="text-xs">Credential ID: 4782685</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;

