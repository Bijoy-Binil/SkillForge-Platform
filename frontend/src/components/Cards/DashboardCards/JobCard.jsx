import React from 'react';

const JobCard = () => {
  return (
<div className="bg-gradient-to-br from-[#060b28f0] to-[#0a0e234d] w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg mb-10 backdrop-blur-sm rounded-xl flex flex-col  shadow-lg p-6 h-auto border-0 text-white">
<div className="space-y-4">
        {/* Header Section */}
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-white/10 rounded-lg">
            <span className="text-2xl">📈</span>
          </div>
          <div>
            <p className="text-sm text-gray-300">Job Match Analysis</p>
            <h1 className="text-xl font-semibold">Job Match Recommendations</h1>
          </div>
        </div>

        {/* Job Matches */}
        <div className="space-y-4">
          {/* Senior Frontend Match */}
          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">🏆</span>
                <span className="font-medium">Senior Frontend Developer</span>
              </div>
              <span className="text-green-400 font-bold">82%</span>
            </div>
            <div className="mt-2 h-1 bg-white/10 rounded-full">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-teal-300" 
                style={{ width: '82%' }}
              />
            </div>
          </div>

          {/* TechCorp Match */}
          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">🏢</span>
                <span className="font-medium">TechCorp Position</span>
              </div>
              <span className="text-blue-400 font-bold">78%</span>
            </div>
            <div className="mt-2 h-1 bg-white/10 rounded-full">
              <div 
                className="h-full bg-gradient-to-r from-blue-400 to-purple-300" 
                style={{ width: '78%' }}
              />
            </div>
          </div>
        </div>

        {/* View All CTA */}
        <a
          href="#"
          className="text-white flex justify-end items-center text-sm font-semibold hover:underline mt-4 group"
        >
          View All Matches
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default JobCard;