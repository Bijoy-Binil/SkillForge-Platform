import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header"; // Assuming you want the Header visible too
import MoneyCard from "../Cards/DashboardCards/MoneyCard";
import Card from "../Cards/DashboardCards/Card";
import SkillCard from "../Cards/DashboardCards/SkillCard";



const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

       {/* Dashboard  */}
      <div className="p-8 text-white">
        <h1 className="text-2xl font-semiboldbold mb-4">Welcome Name</h1>
      <div className="flex gap-8 mb-10">
      <MoneyCard name={"Learning Paths"} icons={"fa-solid fa-graduation-cap"}/>
      <MoneyCard name={"Skills in progress"} icons={"fa-solid fa-book-open"}/>
      <MoneyCard name={"Job Matches"} icons={"fa-solid fa-suitcase"}/>
      <MoneyCard name={"Resume Completeness"} icons={"fa-solid fa-file"}/>
      </div>
     

<Card/>
<SkillCard/>

      </div>
    </div>
  );
};

export default Dashboard;
