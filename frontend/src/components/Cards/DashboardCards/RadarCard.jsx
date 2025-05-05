import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarCard = () => {
  const data = {
    labels: ['GitHub', 'Python', 'React', 'Communication', 'Problem Solving', 'Teamwork'],
    datasets: [
      {
        label: 'Skill Level',
        data: [85, 90, 88, 82, 87, 84],
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgb(99, 102, 241)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(99, 102, 241)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(99, 102, 241)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        pointLabels: {
          color: 'white',
          font: {
            size: 12
          }
        },
        ticks: {
          display: false,
          backdropColor: 'transparent'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false,
    responsive: true
  };

  return (
<div className="bg-gradient-to-br from-[#060b28f0] to-[#0a0e234d] w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg mb-10 backdrop-blur-sm rounded-xl shadow-lg p-6 h-auto border-0 text-white">
<div className="space-y-4">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-purple-400">📊</span>
          Skill Radar Chart
        </h2>
        
        <div className="h-64">
          <Radar data={data} options={options} />
        </div>

        <div className="flex justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
            <span>Core Technical Skills</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            <span>Complementary Skills</span>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-300">
          <p>Key Skills: GitHub/Python/React</p>
          <p className="mt-2">Current proficiency levels based on your activity and assessments</p>
        </div>

        <a href="#" className="inline-block mt-4 text-purple-300 hover:text-purple-100 text-sm font-medium transition-colors">
          View Detailed Breakdown →
        </a>
      </div>
    </div>
  );
};

export default RadarCard;