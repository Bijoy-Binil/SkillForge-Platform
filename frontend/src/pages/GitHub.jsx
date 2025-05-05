import React from 'react';
import Sidebar from '../components/Sidebar';

const GitHub = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />

      {/* Right Content Area */}
      <div className="flex flex-col flex-1 md:ml-64 mt-5 items-center pt-12 px-4">
        {/* Card */}
        <div className="relative bg-gradient-to-br from-[#060b28f0] to-[#0a0e234d] backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 w-full max-w-4xl text-white flex flex-col gap-6">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-200">GitHub Integration Panel</h3>
              
              <div className="flex items-center gap-4 mt-2">
                <button className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-sm transition-colors">
                  Connect GitHub
                </button>
                
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span>🔗 john-dev</span>
                  <span>|</span>
                  <span>📊 12 repos analyzed</span>
                  
                </div>
                
              </div>
                  {/* GitHub Username Input */}
          <input
            type="text"
            className="w-full h-10 px-4 mt-5 py-2 rounded-lg bg-[#ffffff0a] text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your GitHub username"
            required
          />

            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Language Proficiency */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-200">Language Proficiency</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Python</span>
                    <span>80%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-300 rounded-full" 
                      style={{ width: '80%' }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>JavaScript</span>
                    <span>50%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full" 
                      style={{ width: '50%' }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>React</span>
                    <span>40%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 to-teal-300 rounded-full" 
                      style={{ width: '40%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contribution Map */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-200">Contribution Map</h4>
              <div className="grid grid-cols-7 gap-[2px]">
                {Array.from({ length: 365 }).map((_, index) => (
                  <div 
                    key={index}
                    className="w-2 h-2 rounded-sm bg-gray-700" 
                    style={{
                      backgroundColor: `rgba(99, 102, 241, ${Math.random() * 0.8})`
                    }}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400 text-right">365 days</p>
            </div>
          </div>

          {/* Skill Gap Analysis */}
          <div className="mt-6 p-4 bg-white/5 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-200 mb-2">Skill Gap Analysis</h4>
            <p className="text-gray-300">
              "Based on your goals, focus on: <span className="text-purple-300">State Management → Redux</span>"
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
              Refresh Analysis
            </button>
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
              View Detailed Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHub;