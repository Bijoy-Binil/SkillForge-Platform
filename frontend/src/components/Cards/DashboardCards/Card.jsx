import React from 'react';

const Card = () => {
  return (
    <div className="bg-gradient-to-br from-[#060b28f0] to-[#0a0e234d] w-140 mb-10 backdrop-blur-sm rounded-xl flex justify-between flex-col shadow-lg p-6 h-100 border-0 text-white">
      <div>
        <span className="text-sm tracking-[1.5px] font-medium text-gray-300">Welcome back,</span>
        <h3 className="text-3xl font-bold mt-1 text-white">Mark Johnson</h3>
        <h6 className="text-base font-medium mt-2 text-gray-300">
          Glad to see you again! <br />
          Ask me anything.
        </h6>
      </div>

      <a
        href="#"
        className="inline-flex items-center text-white text-sm font-semibold hover:underline mt-6"
      >
        Tap to record
        <span className="material-icons-round ml-1 text-white">
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </a>
    </div>
  );
};

export default Card;
