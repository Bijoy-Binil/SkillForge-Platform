import React from "react";

const MoneyCard = ({name,icons}) => {
  return (
    <div className="bg-gradient-to-br  from-[rgba(6,11,40,0.94)] to-[rgba(10,14,35,0.49)] text-white rounded-xl p-4 shadow-lg backdrop-blur-xl">
       
      <div className="flex justify-between items-start">
        {/* Text content */}
        <div>
     
          <h2 className="text-sm cursor-pointer hover: font-semibold mt-1 ">
          <span className="mr-2"><i className={icons}></i></span>{name} <span className="text-xs  text-green-400 ml-2">%</span>
          </h2>
        </div>

     
      </div>
    </div>
  );
};

export default MoneyCard;
