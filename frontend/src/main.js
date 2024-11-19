import React from 'react';
import './styles/Main.css';
import MoodTracking from './components/MoodTracking';
import ActivityLogging from './components/ActivityLogging';
import StatisticalAnalysis from './components/StatisticalAnalysis';

const Main = () => {
  return (
    <div>
      <h1>Your Wellness, Simplified</h1>
      <MoodTracking />
      <ActivityLogging />
      <StatisticalAnalysis />
    </div>
  );
};

export default Main;
