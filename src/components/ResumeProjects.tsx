
import React from "react";
import { Separator } from "@/components/ui/separator";

const ResumeProjects = () => (
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
);

export default ResumeProjects;
