import React from 'react'

const LearnCard = () => {
   
  return (
    <div className="bg-gradient-to-br  from-[#060b28f0] to-[#0a0e234d] backdrop-blur-sm rounded-xl shadow-lg p-6 w-390 h-200 border-0">
  {/* Header */}
  <div className="flex justify-between items-center mb-6">
    <div>
      <h3 className="text-lg font-medium  mb-2 text-gray-300">Learning Paths</h3>
      <div className="flex items-center text-green-400">
      <i class="fa-solid fa-circle-check"></i>
        <span className="text-sm ml-1">
        Track your progress through guided learning paths or discover new ones.
        </span>
      </div>
    </div>
    <button className="text-gray-400 hover:text-gray-200">
    <i class="fa-solid fa-ellipsis-vertical"></i>
    </button>
  </div>

  {/* Table */}

</div>
  )
}


export default LearnCard