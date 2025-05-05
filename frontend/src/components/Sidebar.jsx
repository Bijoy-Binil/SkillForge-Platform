import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <p
        className="fixed top-1 left-5 z-50 md:hidden p- rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa-solid fa-bars text-sm py-0 px-0"></i>
      </p>

      {/* Sidebar */}
      <div
        className={`w-64 h-screen fixed top-0 left-0 z-40 p-6 flex flex-col text-white bg-black transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:m-7 md:mt-10 md:bg-transparent`}
      >
        <Link
          to="/"
          className="text-[18px] leading-[1.5] tracking-[2px] font-[500] font-['Plus Jakarta Display','Helvetica','Arial',sans-serif] bg-gradient-to-r from-white to-transparent text-transparent bg-clip-text inline-block relative z-[1] max-w-full mx- opacity-100"
        >
          <i className="fa-solid fa-bolt text-yellow-700"></i> SKILL FORGE
        </Link>

        <div className="w-full h-px my-5 ml-[-17px] opacity-50 bg-gradient-to-r from-transparent via-white to-transparent" />

        <Link to="/" className="text-[16px] py-5 rounded-full font-semibold cursor-pointer flex items-center space-x-3 hover:bg-gray-800 px-2 transition">
          <i className="fa-solid fa-house text-blue-500 p-2 bg-gray-800 rounded-full"></i>
          <span>Dashboard</span>
        </Link>

        <Link to="/learning-paths" className="text-[16px] py-5 rounded-full font-semibold cursor-pointer flex items-center space-x-3 hover:bg-gray-800 px-2 transition">
          <i className="fa-solid fa-graduation-cap text-blue-500 p-2 bg-gray-800 rounded-full"></i>
          <span>Learning Paths</span>
        </Link>

        <Link to="/skills" className="text-[16px] py-5 rounded-full font-semibold cursor-pointer flex items-center space-x-3 hover:bg-gray-800 px-2 transition">
          <i className="fa-solid fa-book-open text-blue-500 p-2 bg-gray-800 rounded-full"></i>
          <span>Skills</span>
        </Link>

        <Link to="/job-matches" className="text-[16px] py-5 rounded-full font-semibold cursor-pointer flex items-center space-x-3 hover:bg-gray-800 px-2 transition">
          <i className="fa-solid fa-suitcase text-blue-500 p-2 bg-gray-800 rounded-full"></i>
          <span>Job Matches</span>
        </Link>

        <Link to="/resume-builder" className="text-[16px] py-5 rounded-full font-semibold cursor-pointer flex items-center space-x-3 hover:bg-gray-800 px-2 transition">
          <i className="fa-solid fa-file text-blue-500 p-2 bg-gray-800 rounded-full"></i>
          <span>Resume</span>
        </Link>

        <Link to="/github" className="text-[16px] py-5 rounded-full font-semibold cursor-pointer flex items-center space-x-3 hover:bg-gray-800 px-2 transition">
          <i className="fa-brands fa-github text-blue-500 p-2 bg-gray-800 rounded-full"></i>
          <span>GitHub Analysis</span>
        </Link>

        <Link to="/charts" className="text-[16px] py-5 rounded-full font-semibold cursor-pointer flex items-center space-x-3 hover:bg-gray-800 px-2 transition">
          <i className="fa-solid fa-chart-simple text-blue-500 p-2 bg-gray-800 rounded-full"></i>
          <span>Language Charts</span>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
