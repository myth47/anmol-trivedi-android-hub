
import React from "react";

const ResumeTechnicalSkills = () => {
  return (
    <div className="mb-5">
      <h2 className="text-primaryBlue text-lg font-semibold border-b border-primaryBlue pb-1 mb-3 uppercase tracking-wide">Technical Skills</h2>
      
      <div className="space-y-2">
        <div>
          <span className="font-semibold">Languages:</span> Kotlin, Java, XML, C++, SQL
        </div>
        <div>
          <span className="font-semibold">Android Development:</span> UI/UX Design, Activity Lifecycle, RecyclerView, ViewBinding, REST APIs, MVVM Architecture
        </div>
        <div>
          <span className="font-semibold">Tools & Platforms:</span> Android Studio, Firebase, Git, GitHub, RoomDB, Figma
        </div>
        <div>
          <span className="font-semibold">Libraries & Frameworks:</span> Material Design, Retrofit, Coroutines, Google Fit API, Google Sign-In, Room Database
        </div>
      </div>
    </div>
  );
};

export default ResumeTechnicalSkills;
