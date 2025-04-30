
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import html2pdf from "html2pdf.js";
import ResumeTechnicalSkills from "./ResumeTechnicalSkills";
import ResumeEducation from "./ResumeEducation";
import ResumeProjects from "./ResumeProjects";
import ResumeCertifications from "./ResumeCertifications";

const Resume = () => {
  const [showResume, setShowResume] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const downloadResume = () => {
    const element = resumeRef.current;
    if (!element) return;
    const opt = {
      margin: [18, 18, 18, 18], // top, right, bottom, left (in mm)
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
        <div ref={resumeRef} className="bg-white text-black px-7 py-7 rounded-lg shadow-lg max-w-[210mm] mx-auto leading-tight text-base border border-gray-200">
          {/* Header */}
          <div className="relative mb-4">
            <h1 className="text-3xl font-bold text-primaryBlue text-center">Anmol Trivedi</h1>
            <p className="text-xs text-gray-500 italic absolute top-0 right-0">Last updated in April 2025</p>
          </div>
          
          {/* Contact Information - First Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-2 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </span>
              <a href="mailto:anmoltrvd01@gmail.com" className="text-gray-700 hover:text-primaryBlue">anmoltrvd01@gmail.com</a>
            </div>
            
            <div className="flex items-center gap-1">
              <span className="text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              <a href="tel:+919303744650" className="text-gray-700 hover:text-primaryBlue">+91 9303744650</a>
            </div>
            
            <div className="flex items-center gap-1">
              <span className="text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-gray-700">Ujjain (M.P.), India</span>
            </div>
          </div>
          
          {/* Contact Information - Second Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-1 mb-6 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
              </span>
              <a href="https://preview--anmol-trivedi-android-hub.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primaryBlue">Portfolio</a>
            </div>
            
            <div className="flex items-center gap-1">
              <span className="text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </span>
              <a href="https://linkedin.com/in/anmoltrvd01" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primaryBlue">anmoltrvd01</a>
            </div>
            
            <div className="flex items-center gap-1">
              <span className="text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </span>
              <a href="https://github.com/anmoltrvd01" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primaryBlue">anmoltrvd01</a>
            </div>
          </div>
          
          {/* Resume sections */}
          <ResumeEducation />
          <ResumeTechnicalSkills />
          <ResumeProjects />
          <ResumeCertifications />
          
          {/* Footer with page info */}
          <div className="text-xs text-gray-500 text-right mt-8 italic">
            Anmol Trivedi - Page 1 of 1
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
