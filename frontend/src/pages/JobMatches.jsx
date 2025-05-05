import React from 'react';
import Sidebar from '../components/Sidebar';

const JobMatches = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />

      {/* Right Content Area */}
      <div className="flex flex-col flex-1 md:ml-64 mt-5 items-center pt-12 px-4">
        {/* Card */}
        <div className="bg-gradient-to-br from-[#060b28f0] to-[#0a0e234d] backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 w-full max-w-4xl border-0 relative">
          {/* Header */}
          <div className="w-full mb-6">
            <h3 className="text-2xl font-semibold text-gray-200 text-center mb-4">
              Job Matches
            </h3>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              <button className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                Remote
              </button>
              <button className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                Frontend
              </button>
              <button className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                Senior Level
              </button>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {/* Senior React Developer */}
            <div className="bg-white/5 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-red-400">🔥</span>
                <h4 className="text-lg text-white font-semibold">Senior React Developer (92% match)</h4>
              </div>
              
              <div className="mb-4">
                <span className="text-sm text-gray-300">TechStack:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {['React', 'Redux', 'Jest', 'TypeScript'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white/10 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Skills Match</span>
                  <span className="font-medium">60%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-green-400 to-teal-300 rounded-full" 
                    style={{ width: '60%' }}
                  />
                </div>

                <div className="flex justify-between text-sm mt-3">
                  <span>Learning Alignment</span>
                  <span className="font-medium">32%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-400 to-pink-300 rounded-full" 
                    style={{ width: '32%' }}
                  />
                </div>
              </div>
            </div>

            {/* Full-Stack Engineer */}
            <div className="bg-white/5 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-blue-400">💼</span>
                <h4 className="text-lg text-white font-semibold">Full-Stack Engineer (85% match)</h4>
              </div>
              
              <div className="mb-4">
                <span className="text-sm text-gray-300">TechStack:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {['Node.js', 'PostgreSQL', 'AWS', 'React'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white/10 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Skills Match</span>
                  <span className="font-medium">78%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-green-400 to-teal-300 rounded-full" 
                    style={{ width: '78%' }}
                  />
                </div>

                <div className="flex justify-between text-sm mt-3">
                  <span>Learning Alignment</span>
                  <span className="font-medium">45%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-400 to-pink-300 rounded-full" 
                    style={{ width: '45%' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="flex-1 py-2 px-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
              Show More Matches
            </button>
            <button className="flex-1 py-2 px-4 bg-green-500 hover:bg-green-600 rounded-lg transition-colors">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobMatches;