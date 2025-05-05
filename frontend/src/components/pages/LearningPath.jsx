import React from 'react';
import Sidebar from '../Sidebar';

const LearningPath = () => {
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
              Learning Paths
            </h3>
            <div className="flex justify-center items-center text-green-400 mb-4">
              <i className="fa-solid fa-circle-check text-xl mr-2"></i>
              <span className="text-sm font-medium">
                Track your progress through guided learning paths or discover new ones.
              </span>
            </div>
          </div>

          {/* Placeholder for content */}
          <div className="flex flex-col absolute bottom-90 left-10 text-blue-500 text-lg font-semibold space-y-2">
  <p>My Learning Paths</p>
  <p className="text-sm font-normal text-gray-300">
    You haven't enrolled in any learning paths yet. Browse the available paths below or create your own.
  </p>
</div>

        </div>
      </div>
    </div>
  );
};

export default LearningPath;
