import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import html2pdf from "html2pdf.js";
import ResumeTechnicalSkills from "./ResumeTechnicalSkills";
import ResumeEducation from "./ResumeEducation";
import ResumeProjects from "./ResumeProjects";

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
          <ResumeEducation />
          <ResumeTechnicalSkills />
          <Separator className="my-4" />
          <ResumeProjects />
          <Separator className="my-4" />
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
