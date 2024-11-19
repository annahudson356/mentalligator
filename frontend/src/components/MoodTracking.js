// MoodTracking.js
import React, { useState } from 'react';
import '../styles/MoodTracking.css';

const MoodTracking = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const moods = ['Rad', 'Good', 'Okay', 'Bad', 'Awful'];

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <div className="mood-tracking">
      <h2>How are you feeling today?</h2>
      <div className="mood-options">
        {moods.map((mood) => (
          <button
            key={mood}
            className={`mood-button ${selectedMood === mood ? 'active' : ''}`}
            onClick={() => handleMoodSelect(mood)}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodTracking;
