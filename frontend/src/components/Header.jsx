import React from 'react';
import { useLocation } from 'react-router-dom';
import {Link} from "react-router-dom"
const Header = () => {
  const location = useLocation();

  // Mapping routes to display names
  const routeNameMap = {
    '/': 'Dashboard',
    '/learning-paths': 'Learning Paths',
    '/skills': 'Skills',
    '/job-matches': 'Job Matches',
    '/resume-builder': 'Resume',
    '/github': 'GitHub Analysis',
    '/charts': 'Language Charts',
  };

  const currentPath = location.pathname;
  const pageName = routeNameMap[currentPath] || 'Dashboard';

  return (
    <div className="flex justify-between items-center  ml-25 text-white mx-18 mt-12">
      {/* Left side: Breadcrumb and Title */}
      <div className="flex flex-col items-start ml-61">
        <p className="text-sm font-semibold text-gray-400">
         <Link to="/"><i className="fa-solid fa-house text-xs mr-1"></i> / {pageName}</Link> 
        </p>
        <p className="text-lg font-bold">{pageName}</p>
      </div>

      {/* Right side: User options */}
      <div className="flex items-center space-x-4">
        <p className="text-[18px] font-semibold cursor-pointer">Sign In</p>
        <i className="fa-solid fa-gear text-lg cursor-pointer"></i>
        <i className="fa-solid fa-bell text-lg cursor-pointer"></i>
      </div>
    </div>
  );
};

export default Header;
