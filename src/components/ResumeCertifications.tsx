
import React from "react";

const ResumeCertifications = () => (
  <div>
    <h2 className="text-primaryBlue text-lg font-semibold border-b border-primaryBlue pb-1 mb-3 uppercase tracking-wide">Certifications</h2>
    
    <div className="mb-3">
      <div className="flex justify-between items-baseline">
        <h3 className="text-base font-semibold">Introduction to C++ - Simplilearn</h3>
        <p className="text-sm italic">January 2024</p>
      </div>
      <p className="text-sm">Credential ID: 4782685</p>
    </div>
    
    <div>
      <div className="flex justify-between items-baseline">
        <h3 className="text-base font-semibold">Android Development with Kotlin - Google Developer Training</h3>
        <p className="text-sm italic">March 2024</p>
      </div>
      <p className="text-sm">Comprehensive training in modern Android development practices and Kotlin programming</p>
    </div>
  </div>
);

export default ResumeCertifications;
