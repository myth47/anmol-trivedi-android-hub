
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
      margin: [10, 10],
      filename: "anmol_trivedi_resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };
    
    html2pdf().set(opt).from(element).save();
  };

  return (
    <section id="resume" className="section">
      <div className="flex justify-center mb-8">
        <Button 
          onClick={() => setShowResume(!showResume)} 
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
        >
          <FileText size={16} />
          {showResume ? "Hide Resume" : "View Resume"}
        </Button>
      </div>

      {showResume && (
        <div className="flex justify-center mb-4">
          <Button onClick={downloadResume} variant="outline" className="flex items-center gap-2">
            <Download size={16} />
            Download PDF
          </Button>
        </div>
      )}

      {showResume && (
        <div ref={resumeRef} className="bg-white text-black p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-sm leading-relaxed">
          {/* Resume Content */}
          <div className="mb-4 text-center">
            <h1 className="text-2xl font-bold">Anmol Trivedi</h1>
            <p className="text-gray-700 mt-1">Ujjain (M.P.), India | +91 9303744650 | anmoltrvd01@gmail.com</p>
            <div className="flex justify-center gap-4 mt-1">
              <p className="text-gray-700 text-xs">GitHub: <a href="https://github.com/anmoltrvd01" className="text-purple-600">anmoltrvd01</a></p>
              <p className="text-gray-700 text-xs">LinkedIn: <a href="https://www.linkedin.com/in/anmoltrvd01" className="text-purple-600">anmoltrvd01</a></p>
            </div>
          </div>

          <Separator className="my-4" />

          {/* Technical Skills */}
          <div className="mb-4">
            <h2 className="text-lg font-bold border-b border-gray-300 pb-2 mb-3">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="font-medium">Languages:</p>
                <p>Kotlin, Java, C++, XML</p>
              </div>
              <div>
                <p className="font-medium">Tools & Platforms:</p>
                <p>Android Studio, Firebase, Git, GitHub, RoomDB</p>
              </div>
            </div>
            <div className="mt-2 text-xs">
              <p className="font-medium">Libraries & Frameworks:</p>
              <p>Material Design, Google Fit API, Google Sign-In, Room Database, Firebase Authentication</p>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-4">
            <h2 className="text-lg font-bold border-b border-gray-300 pb-2 mb-3">Projects</h2>
            
            <div className="mb-3">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-semibold">Mental Health AI Assistant</h3>
                <a href="https://github.com/anmoltrvd01/mental-health-assistant" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-600">GitHub</a>
              </div>
              <p className="italic text-gray-700 text-xs mb-1">Tech Stack: Kotlin, Android Studio, Google Fit API, RoomDB, Google Sign-In</p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Developed an intelligent mobile app to assist users with mental health tracking and personalized support.</li>
                <li>Built a clean dashboard UI showing health metrics like steps, sleep, calories, and more.</li>
                <li>Integrated Google Fit API and local user data storage using RoomDB.</li>
                <li>Implemented Google Sign-In for user authentication.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-base font-semibold">Blinkit Clone</h3>
                <a href="https://github.com/anmoltrvd01/blinkit-clone" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-600">GitHub</a>
              </div>
              <p className="italic text-gray-700 text-xs mb-1">Tech Stack: Kotlin, Firebase Realtime Database, XML</p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Built a working clone with splash screen, OTP verification, and Firebase Authentication.</li>
                <li>Set up SignIn and OTP fragments.</li>
                <li>Currently resolving Firebase Realtime Database integration issues.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h2 className="text-lg font-bold border-b border-gray-300 pb-2 mb-3">Education</h2>
            <h3 className="text-base font-semibold">Bachelor of Technology in Computer Science and Business System</h3>
            <p className="text-xs">School of Information Technology, UTD, Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal</p>
            <p className="italic text-xs">Expected Graduation: 2026</p>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-lg font-bold border-b border-gray-300 pb-2 mb-3">Certifications</h2>
            <h3 className="text-base font-semibold">Introduction to C++ – Simplilearn</h3>
            <p className="text-xs">Credential ID: 4782685 | Issued Jan 2024</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
