import React from 'react';
import './styles/Main.css';
import MoodTracking from './components/MoodTracking';
import ActivityLogging from './components/ActivityLogging';
import StatisticalAnalysis from './components/StatisticalAnalysis';

  const quotes = [
    {
      text: "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
      author: "— Unknown",
    },
    {
      text: "It's okay to not be okay as long as you are not giving up.",
      author: "— Karen Salmansohn",
    },
    {
      text: "The best way out is always through.",
      author: "— Robert Frost",
    },
    {
      text: "Take time to do what makes your soul happy.",
      author: "— Unknown",
    },
    {
      text: "You are enough, just as you are.",
      author: "— Meghan Markle",
    },
  ];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
const Main = () => {
  return (
    <div>
      <h1>Welcome back!</h1>
      <MoodTracking />
      <ActivityLogging />
      <StatisticalAnalysis />
    <div className="quote-container">
    <p className="quote-text">{randomQuote.text}</p>
    <p className="quote-author">{randomQuote.author}</p>
    </div>
  </div>
  );
};

export default Main;
