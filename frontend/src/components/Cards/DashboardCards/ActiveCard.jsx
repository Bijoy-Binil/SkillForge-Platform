import React from 'react';

const ActiveCard = () => {
  return (
    <div className="bg-gradient-to-br from-[#060b28f0] to-[#0a0e234d]  sm:w-[350px] md:w-[400px] lg:w-[450px] mb-10 backdrop-blur-sm rounded-xl  flex flex-col shadow-lg p-6 h-auto border-0 text-white relative overflow-hidden">
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full animate-shimmer" />
      
      <div className="space-y-4 relative z-10">
        {/* Greeting Section */}
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-white/10 rounded-lg">
            <span className="text-2xl">👋</span>
          </div>
          <div>
            <p className="text-sm text-gray-300">Hello, Learner!</p>
            <p className="font-medium">Your Current Progress</p>
          </div>
        </div>

        {/* Active Learning Path */}
        <h2 className="text-lg font-semibold text-gray-300 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Active Learning Path
        </h2>

        {/* Current Skill */}
        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
          <p className="text-xl font-bold bg-gradient-to-r from-green-500 to-blue-700 bg-clip-text text-transparent">
            Mern Stack
          </p>
        </div>

        {/* Progress Section */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Progress</span>
            <span className="font-medium">70%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-900 to-blue-500 transition-all duration-500" 
              style={{ width: '70%' }}
            />
          </div>
        </div>
      </div>

      {/* Continue Learning CTA */}
      <a
        href="#"
        className="mt-6 inline-flex items-center justify-end gap-2 text-sm font-medium text-blue-300 hover:text-purple-100 transition-colors group"
      >
        Continue Learning
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </a>
    </div>
  );
};

export default ActiveCard;