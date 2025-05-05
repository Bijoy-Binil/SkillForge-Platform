import React from 'react';
import Sidebar from '../Sidebar';

const JobMatches = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      {/* Right Content Area */}
      <div className="flex flex-col flex-1 mt-5 items-center pt-12 px-4">
        {/* Card */}
        <div className="bg-gradient-to-br from-[#060b28f0] to-[#0a0e234d] backdrop-blur-lg rounded-3xl shadow-xl p-8 w-320 h-160 border-0 flex flex-col items-center ">
          {/* Header */}
          <div className="w-full mb-6">
            <h3 className="text-2xl font-semibold text-gray-200 text-center mb-4">
            Job Matches
            </h3>
            <div className="flex justify-center items-center text-green-400 mb-4">
              <i className="fa-solid fa-circle-check text-xl mr-2"></i>
              <span className="text-sm font-medium">
              Explore jobs that match your skills and interests.
              </span>
            </div>
          </div>
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

export default JobMatches;
