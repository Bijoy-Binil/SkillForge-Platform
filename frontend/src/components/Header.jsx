import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation,useNavigate, Link } from 'react-router-dom';


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();


const [username,setUsername]=useState("")
const [loggedIn,setLoggedIn]=useState(false)

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (token) {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await axios.get("http://127.0.0.1:8000/api/user/", config);
          setLoggedIn(true);
          setUsername(response.data.username); // assuming the response has `username`
        } else {
          setLoggedIn(false);
          setUsername("");
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        setLoggedIn(false);
        setUsername("");
      }
    };

    checkLoggedIn();
  }, []);

const handleLogout = async () => {
  try {
    const refresh_token = localStorage.getItem("refreshToken");

    if (refresh_token) {
      await axios.post("http://127.0.0.1:8000/api/logout/", {"refresh": refresh_token })

      // Call the AuthContext logout function to properly update the auth state

      
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      setLoggedIn(false);
      setUsername('');
      navigate("/");
    }
  } catch (error) {
    console.error("Logout error:", error.response?.data || error.message);
  }
};

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
   
    <div className="flex flex-col  md:flex-row mb-[-0px]  justify-between items-start md:items-center text-white mt-12 px-4 sm:px-6 md:px-8 lg:px-12 md:ml-64 gap-4">
      
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
      <div className="flex flex-wrap  items-center gap-4">
        <p className="text-[16px] font-semibold cursor-pointer flex items-center">
          <i className="fa-solid fa-user text-sky-700 mr-2"></i> {loggedIn ? username :"Guest"}

        </p>
       {loggedIn ? (
  <button
    onClick={handleLogout}
    className="text-[16px] font-semibold cursor-pointer bg-transparent border-none outline-none"
  >
    LogOut
  </button>
) : (
  <Link to='/login' className="text-[16px] font-semibold cursor-pointer">Log In</Link>
)}


                
       <Link to='/register' className="text-[16px] font-semibold cursor-pointer">Register</Link> 
        <i className="fa-solid fa-gear text-lg cursor-pointer"></i>
        <i className="fa-solid fa-bell text-lg cursor-pointer"></i>
      </div>
    </div>
  );
};

export default Header;
