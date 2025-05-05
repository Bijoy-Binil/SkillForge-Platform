import React from 'react';

const Header = () => {
  return (
    <>
    
      <div className="flex justify-between items-center ml-25 text-white mx-18 mt-12">
        {/* Home Button on the Left */}
        <div className="flex flex-col space-y-[-34px]  items-center ml-61 space-x-4">
          <p className="text-[14px]  font-semibold cursor-pointer">
            <i className="fa-solid  fa-house text-xs text-gray-500"></i> / Dashboard
          </p> <br />
          <p className="text-lg  font-bold mr-10 cursor-pointer">Dashboard</p>
        </div>

        {/* Other Components (Sign In, Gear, Bell) on the Right */}
        <div className="flex items-center space-x-4">
          <p className="text-[18px] font-semibold cursor-pointer">Sign In</p>
          <i className="fa-solid fa-gear text-lg cursor-pointer"></i>
          <i className="fa-solid fa-bell text-lg cursor-pointer"></i>
        </div>
      </div>
    </>
  );
};

export default Header;
