import React from 'react';
import Sidebar from '../Sidebar';

const ResumeBuilder = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br backdrop-blur-lg rounded-3xl shadow-xl">
      <Sidebar />

      {/* Right Content Area */}
      <div className="flex flex-col flex-1 mt-5 items-center pt-12 px-4">
        {/* Card */}
        <div className="relative bg-gradient-to-br from-[#060b28f0] to-[#0a0e234d] backdrop-blur-lg rounded-3xl shadow-xl p-8 w-320 min-h-160 text-white flex flex-col gap-6">
          {/* Header */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-200 mb-3 tracking-wide">
              Resume Completeness
            </h3>
            <div className="flex justify-center items-center text-green-400">
              <i className="fa-solid fa-circle-check text-lg mr-2"></i>
              <span className="text-sm">
                See how complete your resume is and get tips to improve it.
              </span>
            </div>
          </div>

          {/* Resume Status */}
          <div className="bg-[#ffffff0a] p-4 rounded-xl space-y-2">
            <p className="font-semibold text-gray-300 text-base mb-1">0% Complete</p>
            <ul className="list-disc list-inside pl-2 space-y-1 text-sm text-gray-400">
              <li>Personal Info</li>
              <li>Work Experience</li>
              <li>Education</li>
              <li>Skills</li>
              <li>Certifications</li>
              <li>Projects</li>
            </ul>
          </div>

          {/* Suggestions */}
          <div className="bg-[#ffffff0a] p-4 rounded-xl space-y-2 text-sm text-gray-400">
            <p className="font-semibold text-gray-300 mb-1">Suggestions to improve your resume:</p>
            <ul className="list-disc list-inside pl-2 space-y-1">
              <li>Add or update your Personal Info section.</li>
              <li>Add or update your Work Experience section.</li>
              <li>Add or update your Education section.</li>
              <li>Add or update your Skills section.</li>
              <li>Add or update your Certifications section.</li>
              <li>Add or update your Projects section.</li>
            </ul>
          </div>

          {/* Footer Stats */}
          <div className="absolute bottom-4 left-6 text-xs text-gray-300">
            0 Skills in Progress
          </div>
          <div className="absolute bottom-4 right-6 text-xs text-gray-300">
            0% Skills Completion
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
