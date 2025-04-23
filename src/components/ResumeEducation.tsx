
import React from "react";
import { Separator } from "@/components/ui/separator";

const ResumeEducation = () => (
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
);

export default ResumeEducation;
