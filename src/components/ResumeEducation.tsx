
import React from "react";

const ResumeEducation = () => (
  <div className="mb-5">
    <h2 className="text-primaryBlue text-lg font-semibold border-b border-primaryBlue pb-1 mb-3 uppercase tracking-wide">Education</h2>
    
    <div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-base font-semibold">School of Information Technology, UTD, RGPV, Bhopal</h3>
          <p className="text-sm italic">Bachelor of Technology in Computer Science and Business System</p>
        </div>
        <p className="italic text-sm text-gray-600 text-right">Expected Graduation: 2026</p>
      </div>
      
      <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
        <li>Relevant Coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems</li>
        <li>CGPA: 6.43</li>
      </ul>
    </div>
  </div>
);

export default ResumeEducation;
