import React from 'react';
import Sidebar from '../components/Sidebar';

const Skills = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />

      {/* Right Content Area */}
      <div className="flex flex-col flex-1 md:ml-64 mt-5 items-center pt-12 px-4">
        {/* Card */}
        <div className="bg-gradient-to-br from-[#060b28f0] to-[#0a0e234d] backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 w-full max-w-4xl border-0 flex flex-col items-center relative">
          {/* Header */}
          <div className="w-full mb-6">
            <h3 className="text-2xl font-semibold text-gray-200 text-center mb-4">
              Skills In Progress
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center text-green-400 mb-4 text-center gap-2 px-2">
              <i className="fa-solid fa-circle-check text-xl"></i>
              <span className="text-sm font-medium">
                Track your progress on the skills you are currently learning.
              </span>
            </div>
          </div>

          {/* Stats - stacked on small, inline on larger */}
          <div className="flex flex-col sm:flex-row justify-between w-full px-4 text-center sm:text-left">
            <div className="text-lg font-semibold text-gray-300 mb-2 sm:mb-0">
              0 Skills in Progress
            </div>
            <div className="text-lg font-semibold text-gray-300">
              0% Skills Completion
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
