import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

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
    <div className="flex flex-col md:flex-row mb-[-30px]  justify-between items-start md:items-center text-white mt-12 px-4 sm:px-6 md:px-8 lg:px-12 md:ml-64 gap-4">
      
      {/* Breadcrumb and Page Title */}
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-gray-400">
          <Link to="/">
            <i className="fa-solid fa-house text-xs mr-1"></i> / {pageName}
          </Link>
        </p>
        <p className="text-lg font-bold">{pageName}</p>
      </div>

      {/* User Options */}
      <div className="flex flex-wrap items-center gap-4">
        <p className="text-[16px] font-semibold cursor-pointer flex items-center">
          <i className="fa-solid fa-user text-sky-700 mr-2"></i>Bijoy
        </p>
        <p className="text-[16px] font-semibold cursor-pointer">Sign In</p>
        <i className="fa-solid fa-gear text-lg cursor-pointer"></i>
        <i className="fa-solid fa-bell text-lg cursor-pointer"></i>
      </div>
    </div>
  );
};

export default Header;
