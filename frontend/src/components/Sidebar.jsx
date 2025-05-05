import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen m-7 -mt-18 text-white p-6 flex flex-col">
      <span className="text-[18px] leading-[1.5] tracking-[2px] font-[500] font-['Plus Jakarta Display','Helvetica','Arial',sans-serif] bg-gradient-to-r from-white to-transparent text-transparent bg-clip-text inline-block relative z-[1] max-w-full mx-5 opacity-100">
        SKILL FORGE
      </span>

      <div className="w-full h-px my-5 ml-[-17px] opacity-50 bg-gradient-to-r from-transparent via-white to-transparent" />

      {/* Dashboard */}
      <Link to="/" className="text-[16px] py-5 rounded-full font-semibold cursor-pointer flex items-center space-x-3 hover:bg-gray-800 px-2 transition">
        <i className="fa-solid fa-house text-blue-500 p-2 bg-gray-800 rounded-full"></i>
        <span>Dashboard</span>
      </Link>

      {/* Learning Paths */}
      <Link to="/learning-paths" className="text-[16px] py-5 rounded-full font-semibold cursor-pointer flex items-center space-x-3 hover:bg-gray-800 px-2 transition">
        <i className="fa-solid fa-graduation-cap text-blue-500 p-2 bg-gray-800 rounded-full"></i>
        <span>Learning Paths</span>
      </Link>

      {/* Skills */}
      <Link to="/skills" className="text-[16px] py-5 rounded-full font-semibold cursor-pointer flex items-center space-x-3 hover:bg-gray-800 px-2 transition">
        <i className="fa-solid fa-book-open text-blue-500 p-2 bg-gray-800 rounded-full"></i>
        <span>Skills</span>
      </Link>

      {/* Job Matches */}
      <Link to="/job-matches" className="text-[16px] py-5 rounded-full font-semibold cursor-pointer flex items-center space-x-3 hover:bg-gray-800 px-2 transition">
        <i className="fa-solid fa-suitcase text-blue-500 p-2 bg-gray-800 rounded-full"></i>
        <span>Job Matches</span>
      </Link>

      {/* Resume */}
      <Link to="/resume-builder" className="text-[16px] py-5 rounded-full font-semibold cursor-pointer flex items-center space-x-3 hover:bg-gray-800 px-2 transition">
        <i className="fa-solid fa-file text-blue-500 p-2 bg-gray-800 rounded-full"></i>
        <span>Resume</span>
      </Link>

      {/* GitHub Analysis */}
      <Link to="/github" className="text-[16px] py-5 rounded-full font-semibold cursor-pointer flex items-center space-x-3 hover:bg-gray-800 px-2 transition">
        <i className="fa-brands fa-github text-blue-500 p-2 bg-gray-800 rounded-full"></i>
        <span>GitHub Analysis</span>
      </Link>

      {/* Language Charts */}
      <Link to="/charts" className="text-[16px] py-5 rounded-full font-semibold cursor-pointer flex items-center space-x-3 hover:bg-gray-800 px-2 transition">
        <i className="fa-solid fa-chart-simple text-blue-500 p-2 bg-gray-800 rounded-full"></i>
        <span>Language Charts</span>
      </Link>
    </div>
  );
};

export default Sidebar;
