
import React from "react";

const ResumeProjects = () => (
  <div className="mb-5">
    <h2 className="text-primaryBlue text-lg font-semibold border-b border-primaryBlue pb-1 mb-3 uppercase tracking-wide">Projects</h2>
    
    <div className="mb-5">
      <div className="flex justify-between items-baseline">
        <h3 className="text-base font-semibold">Mental Health AI Assistant</h3>
        <div className="text-sm italic">
          <a href="https://github.com/anmoltrvd01/MentalHealthAiAssistant.git" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-linkBlue hover:underline">
            GitHub
          </a> | Jan - Apr 2024
        </div>
      </div>
      
      <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
        <li>Developed a comprehensive mobile application for mental health tracking with an AI-powered chat assistant to provide personalized support and coping strategies</li>
        <li>Designed and implemented a clean, intuitive dashboard displaying key health metrics including steps, sleep quality, hydration, and mood patterns</li>
        <li>Integrated Google Fit API to automatically track physical activities and correlate them with mental wellbeing</li>
        <li>Implemented secure local storage using RoomDB for sensitive user health data with encryption</li>
        <li>Added Google Sign-In for seamless authentication while maintaining strict user privacy protocols</li>
        <li><span className="font-semibold">Tech Stack:</span> Kotlin, Android Studio, MVVM Architecture, Google Fit API, RoomDB, Firebase ML Kit</li>
      </ul>
    </div>
    
    <div>
      <div className="flex justify-between items-baseline">
        <h3 className="text-base font-semibold">Blinkit Clone - Quick Delivery App</h3>
        <div className="text-sm italic">
          <a href="https://github.com/anmoltrvd01/BlinkitCloneUser.git" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-linkBlue hover:underline">
            GitHub
          </a> | Aug - Dec 2023
        </div>
      </div>
      
      <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
        <li>Built a fully functional e-commerce application inspired by Blinkit with features including product browsing, cart management, and order tracking</li>
        <li>Created a polished UI with smooth animations for splash screen, product transitions, and checkout flow</li>
        <li>Implemented secure user authentication with phone number verification and OTP validation using Firebase</li>
        <li>Developed custom RecyclerView adapters for efficient product category and listing displays</li>
        <li>Currently implementing Firebase Realtime Database for product information and user order history</li>
        <li><span className="font-semibold">Tech Stack:</span> Kotlin, Firebase Authentication, RecyclerView, Material Design Components, MVVM Architecture</li>
      </ul>
    </div>
  </div>
);

export default ResumeProjects;
