
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import html2pdf from "html2pdf.js";

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
        <div className="flex justify-center mb-2">
          <Button onClick={downloadResume} variant="outline" className="flex items-center gap-2">
            <Download size={16} />
            Download PDF
          </Button>
        </div>
      )}

      {showResume && (
        <div ref={resumeRef} className="bg-white text-black px-6 py-7 rounded-lg shadow-lg max-w-3xl mx-auto leading-tight text-[13px]">
          {/* Header */}
          <div className="mb-2 text-center">
            <h1 className="text-2xl font-bold tracking-tight">Anmol Trivedi</h1>
            <p className="text-gray-700 mt-1 text-xs">Ujjain (M.P.), India | +91 9303744650 | anmoltrvd01@gmail.com</p>
            <div className="flex justify-center gap-4 mt-1 text-xs">
              <p className="text-gray-700">GitHub: <a href="https://github.com/anmoltrvd01" className="text-purple-600">anmoltrvd01</a></p>
              <p className="text-gray-700">LinkedIn: <a href="https://www.linkedin.com/in/anmoltrvd01" className="text-purple-600">anmoltrvd01</a></p>
            </div>
          </div>

          <Separator className="my-2" />

          {/* Technical Skills */}
          <div className="mb-3">
            <h2 className="text-base font-semibold border-b border-gray-300 pb-1 mb-[6px] uppercase tracking-wide text-gray-800">Technical Skills</h2>
            <div className="text-xs flex flex-wrap gap-x-2 gap-y-0.5 items-center mb-1">
              <span className="font-medium">Languages:</span>
              <span>Kotlin</span>
              <span>•</span>
              <span>Java</span>
              <span>•</span>
              <span>C++</span>
              <span>•</span>
              <span>XML</span>
            </div>
            <div className="text-xs flex flex-wrap gap-x-2 gap-y-0.5 items-center mb-1">
              <span className="font-medium">Tools/Platforms:</span>
              <span>Android Studio</span>
              <span>•</span>
              <span>Firebase</span>
              <span>•</span>
              <span>Git</span>
              <span>•</span>
              <span>GitHub</span>
              <span>•</span>
              <span>RoomDB</span>
            </div>
            <div className="text-xs flex flex-wrap gap-x-2 gap-y-0.5 items-center">
              <span className="font-medium">Libraries/Frameworks:</span>
              <span>Material Design</span>
              <span>•</span>
              <span>Google Fit API</span>
              <span>•</span>
              <span>Google Sign-In</span>
              <span>•</span>
              <span>Room Database</span>
              <span>•</span>
              <span>Firebase Authentication</span>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-3">
            <h2 className="text-base font-semibold border-b border-gray-300 pb-1 mb-[6px] uppercase tracking-wide text-gray-800">Projects</h2>
            <div className="flex flex-col gap-2">
              <div>
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
              <div>
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

          {/* Education */}
          <div className="mb-3">
            <h2 className="text-base font-semibold border-b border-gray-300 pb-1 mb-[6px] uppercase tracking-wide text-gray-800">Education</h2>
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-semibold mb-0">B.Tech in Computer Science & Business System</h3>
              <span className="italic text-xs text-gray-600">Expected Graduation: 2026</span>
            </div>
            <p className="text-xs mt-0">School of Information Technology, UTD, RGPV, Bhopal</p>
          </div>

          {/* Certifications */}
          <div>
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
