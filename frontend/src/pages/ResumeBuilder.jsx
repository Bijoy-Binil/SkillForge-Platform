import React from 'react';
import Sidebar from '../components/Sidebar';

const ResumeBuilder = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />

      {/* Right Content Area */}
      <div className="flex flex-col flex-1 md:ml-64 mt-5 items-center pt-12 px-4">
        {/* Card */}
        <div className="relative bg-gradient-to-br from-[#060b28f0] to-[#0a0e234d] backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 w-full max-w-4xl text-white flex flex-col gap-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-200 mb-2">AI Resume Editor</h3>
              <p className="text-sm text-gray-400">AI-powered resume optimization and editing</p>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-semibold">John Doe</h2>
                <button className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors">
                  📷 Upload Photo
                </button>
              </div>
              <p className="text-gray-300">Senior Frontend Developer</p>
            </div>
          </div>

          {/* AI Summary Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-purple-300">
              <span>🎯</span>
              <h4 className="font-semibold">Summary:</h4>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-gray-300">
                Results-driven frontend developer with 5+ years of experience building responsive web applications.
                Proficient in modern JavaScript frameworks and passionate about creating intuitive user experiences.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-300">
              <span>🛠</span>
              <h4 className="font-semibold">Skills:</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'Redux', 'Python', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'REST APIs'].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="flex-1 py-2 px-4 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors">
              Regenerate with AI
            </button>
            <button className="flex-1 py-2 px-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
              Export PDF
            </button>
            <button className="flex-1 py-2 px-4 bg-green-500 hover:bg-green-600 rounded-lg transition-colors">
              Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;