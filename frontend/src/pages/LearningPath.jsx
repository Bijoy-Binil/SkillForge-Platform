import React from 'react';
import Sidebar from '../components/Sidebar';

const LearningPath = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />

      {/* Right Content Area */}
      <div className="flex flex-col flex-1 md:ml-64 mt-5 items-center pt-12 px-4">
        {/* AI Path Builder Card */}
        <div className="bg-gradient-to-br from-[#060b28f0] to-[#0a0e234d] backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 w-full max-w-4xl border-0 relative">
          {/* Header */}
          <div className="w-full mb-6">
            <h3 className="text-2xl font-semibold text-gray-200 text-center mb-4">
              AI Path Builder
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center text-green-400 mb-6 text-center gap-2 px-2">
              <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
              <span className="text-sm font-medium">
                AI-generated personalized learning path based on your goals
              </span>
            </div>
          </div>

          {/* Path Details */}
          <div className="space-y-6 text-gray-300">
            {/* Goal & Duration */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-medium">Goal:</span>
                <div className="px-3 py-1 bg-white/10 rounded-full flex items-center gap-2">
                  <span>Frontend Developer</span>
                  <span className="text-yellow-400">🎯</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="font-medium">Duration:</span>
                <div className="flex-1 h-2 bg-white/10 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-400 to-pink-300 rounded-full" 
                    style={{ width: '40%' }}
                  />
                </div>
                <span className="text-sm ml-2">4 weeks</span>
              </div>
            </div>

            {/* Generated Path */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-200">Generated Path:</h4>
              
              {/* Week 1 */}
              <div className="bg-white/5 p-4 rounded-xl">
                <div className="font-medium mb-2 text-purple-300">Week 1: HTML/CSS Fundamentals</div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">📹</span>
                    <a href="#" className="hover:text-purple-300 transition-colors">
                      YouTube: CSS Grid Tutorial
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">📖</span>
                    <a href="#" className="hover:text-purple-300 transition-colors">
                      Article: Semantic HTML Best Practices
                    </a>
                  </li>
                </ul>
              </div>

              {/* Week 2 */}
              <div className="bg-white/5 p-4 rounded-xl">
                <div className="font-medium mb-2 text-purple-300">Week 2: JavaScript Basics</div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">📹</span>
                    <a href="#" className="hover:text-purple-300 transition-colors">
                      YouTube: Modern JavaScript Crash Course
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">📖</span>
                    <a href="#" className="hover:text-purple-300 transition-colors">
                      Article: ES6+ Features Guide
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="flex-1 py-2 px-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                Customize Path
              </button>
              <button className="flex-1 py-2 px-4 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors">
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;