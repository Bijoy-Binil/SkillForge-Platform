import React from 'react';
import Sidebar from '../Sidebar';

const GitHub = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br backdrop-blur-lg rounded-3xl shadow-xl">
      <Sidebar />

      {/* Right Content Area */}
      <div className="flex flex-col flex-1 items-center pt-12 px-4">
        {/* Card */}
        <div className="relative bg-gradient-to-br from-[#060b28f0] to-[#0a0e234d] backdrop-blur-lg rounded-3xl shadow-xl p-8 w-320 min-h-160 text-white flex flex-col gap-6">
          {/* Header */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-200 mb-4 tracking-wide">
              GitHub Analysis
            </h3>
          </div>

          {/* GitHub Username Input */}
          <input
            type="text"
            className="w-100 ml-100 h-10 px-4 py-2 rounded-lg bg-[#ffffff0a] text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your GitHub username"
            required
          />

          {/* Action Buttons */}
          <div className="flex gap-7 justify-center">
            <button className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-sm text-white font-semibold transition">
              Analyse
            </button>
            <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold transition">
              Connect GitHub
            </button>
          </div>

   
        </div>
      </div>
    </div>
  );
};

export default GitHub;
