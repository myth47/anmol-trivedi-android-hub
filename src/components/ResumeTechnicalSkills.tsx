
import React from "react";

const ResumeTechnicalSkills = () => {
  return (
    <div className="mb-5">
      <h2 className="text-primaryBlue text-lg font-semibold border-b border-primaryBlue pb-1 mb-3 uppercase tracking-wide">Technical Skills</h2>
      
      <div className="space-y-2">
        <div>
          <span className="font-semibold">Languages:</span> Kotlin (Advanced), Java (Advanced), XML (Advanced), C++ (Beginner), SQL
        </div>
        <div>
          <span className="font-semibold">Android Development:</span> UI/UX Design, Activity Lifecycle, RecyclerView, ViewBinding, REST APIs, MVVM Architecture
        </div>
        <div>
          <span className="font-semibold">Tools & Platforms:</span> Android Studio (Advanced), Firebase (Intermediate), Git (Advanced), GitHub (Advanced), RoomDB (Beginner), Figma
        </div>
        <div>
          <span className="font-semibold">Libraries & Frameworks:</span> Material Design (Advanced), Retrofit, Coroutines, Google Fit API (Beginner), Google Sign-In (Beginner), Room Database (Beginner)
        </div>
      </div>
    </div>
  );
};

export default ResumeTechnicalSkills;
