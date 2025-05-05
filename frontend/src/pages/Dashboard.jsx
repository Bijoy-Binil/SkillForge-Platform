import React from "react";
import Sidebar from "../components/Sidebar";
import MoneyCard from "../../src/components/Cards/DashboardCards/MoneyCard";
import Card from "../components/Cards/DashboardCards/ActiveCard";
import SkillCard from "../../src/components/Cards/DashboardCards/SkillCard";
import JobCard from "../components/Cards/DashboardCards/JobCard";
import RadarCard from "../components/Cards/DashboardCards/RadarCard";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 md:ml-64 px-4 sm:px-6 md:px-8 py-6">
        
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <MoneyCard name="Learning Paths" icons="fa-solid fa-graduation-cap" />
          <MoneyCard name="Skills in progress" icons="fa-solid fa-book-open" />
          <MoneyCard name="Job Matches" icons="fa-solid fa-suitcase" />
          <MoneyCard name="Resume Completeness" icons="fa-solid fa-file" />
        </div>

        {/* Responsive Flex Wrap for Cards */}
        <div className="flex flex-col lg:flex-row flex-wrap gap-6">
          <Card />
          <JobCard />
          <RadarCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
