
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import html2pdf from "html2pdf.js";

const Resume = () => {
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
      <div className="flex justify-between items-center mb-8">
        <h2 className="section-title">Resume</h2>
        <Button onClick={downloadResume} className="flex items-center gap-2">
          <Download size={16} />
          Download PDF
        </Button>
      </div>

      <div ref={resumeRef} className="bg-white text-black p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        {/* Resume Content */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Anmol Trivedi</h1>
          <p className="text-gray-700 mt-2">Ujjain (M.P.), India | +91 9303744650 | anmoltrvd01@gmail.com</p>
          <div className="flex justify-center gap-4 mt-2">
            <p className="text-gray-700">GitHub: <a href="https://github.com/anmoltrvd01" className="text-android-green">anmoltrvd01</a></p>
            <p className="text-gray-700">LinkedIn: <a href="https://www.linkedin.com/in/anmoltrvd01" className="text-android-green">anmoltrvd01</a></p>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Career Objective */}
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Career Objective</h2>
          <p>
            Aspiring App Developer with strong programming fundamentals and hands-on experience building Android applications using Kotlin, Firebase, and RoomDB. Eager to contribute to impactful mobile solutions.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Technical Skills</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><span className="font-medium">Languages:</span> Kotlin, Java, C++, XML</li>
            <li><span className="font-medium">Tools & Platforms:</span> Android Studio, Firebase, Git, GitHub, RoomDB</li>
            <li><span className="font-medium">APIs:</span> Google Fit API, Gemini API (Integration in progress)</li>
          </ul>
        </div>

        {/* Projects */}
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Projects</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Mental Health AI Assistant</h3>
            <p className="italic text-gray-700">Tech Stack: Kotlin, Android Studio, Google Fit API, RoomDB, Google Sign-In</p>
            <ul className="list-disc pl-6 space-y-1 mt-1">
              <li>Developed an intelligent mobile app to assist users with mental health tracking and personalized support.</li>
              <li>Built a clean dashboard UI showing health metrics like steps, sleep, calories, and more.</li>
              <li>Integrated Google Fit API and local user data storage using RoomDB.</li>
              <li>Implemented Google Sign-In for user authentication.</li>
              <li>Planned Gemini API integration for health data analysis.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Blinkit Clone (In Progress)</h3>
            <p className="italic text-gray-700">Tech Stack: Kotlin, Firebase Realtime Database, XML</p>
            <ul className="list-disc pl-6 space-y-1 mt-1">
              <li>Built a working clone with splash screen, OTP verification, and Firebase Authentication.</li>
              <li>Set up SignIn and OTP fragments.</li>
              <li>Currently resolving Firebase Realtime Database integration issues.</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Education</h2>
          <h3 className="text-lg font-semibold">Bachelor of Technology in Computer Science and Business System</h3>
          <p>School of Information Technology, UTD, Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal</p>
          <p className="italic">Expected Graduation: 2026</p>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Certifications</h2>
          <h3 className="text-lg font-semibold">Introduction to C++ – Simplilearn</h3>
          <p>Credential ID: 4782685 | Issued Jan 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
