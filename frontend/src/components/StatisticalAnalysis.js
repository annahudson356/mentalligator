// StatisticalAnalysis.js
import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import '../styles/StatisticalAnalysis.css';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement);

const StatisticalAnalysis = () => {
  useEffect(() => {
    // Cleanup: Destroy chart instances to prevent canvas reuse errors
    return () => {
      Object.values(ChartJS.instances).forEach((chart) => chart.destroy());
    };
  }, []);

  const moodData = {
    labels: ['Rad', 'Good', 'Okay', 'Bad', 'Awful'],
    datasets: [
      {
        label: 'Mood Frequency',
        data: [5, 10, 8, 4, 2], // Dummy data
        backgroundColor: 'rgba(70, 130, 180, 0.8)',
        borderColor: 'rgba(70, 130, 180, 1)',
        borderWidth: 1,
      },
    ],
  };

  const activityData = {
    labels: ['Exercise', 'Work', 'Socializing', 'Relaxing', 'Reading'],
    datasets: [
      {
        label: 'Activity Frequency',
        data: [8, 12, 5, 10, 7], // Dummy data
        backgroundColor: 'rgba(138, 43, 226, 0.8)',
        borderColor: 'rgba(138, 43, 226, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="statistical-analysis">
      <h2>Your Trends</h2>
      <div className="chart-container">
        <h3>Mood Trends</h3>
        <Bar data={moodData} options={{ responsive: false, maintainAspectRatio: false }}  />
      </div>
      <div className="chart-container">
        <h3>Activity Trends</h3>
        <Line data={activityData} options={{ responsive: false, maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default StatisticalAnalysis;
