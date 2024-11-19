// ActivityLogging.js
import React, { useState } from 'react';
import '../styles/ActivityLogging.css';

const ActivityLogging = () => {
  const [activities, setActivities] = useState([
    'Exercise',
    'Work',
    'Socializing',
    'Relaxing',
    'Reading',
  ]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [newActivity, setNewActivity] = useState('');

  const toggleActivity = (activity) => {
    if (selectedActivities.includes(activity)) {
      setSelectedActivities(selectedActivities.filter((a) => a !== activity));
    } else {
      setSelectedActivities([...selectedActivities, activity]);
    }
  };

  const addActivity = () => {
    if (newActivity && !activities.includes(newActivity)) {
      setActivities([...activities, newActivity]);
      setNewActivity('');
    }
  };

  return (
    <div className="activity-logging">
      <h2>Log Your Activities</h2>
      <div className="activity-options">
        {activities.map((activity) => (
          <button
            key={activity}
            className={`activity-button ${
              selectedActivities.includes(activity) ? 'active' : ''
            }`}
            onClick={() => toggleActivity(activity)}
          >
            {activity}
          </button>
        ))}
      </div>
      <div className="add-activity">
        <input
          type="text"
          value={newActivity}
          placeholder="Add a new activity"
          onChange={(e) => setNewActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
      </div>
      {selectedActivities.length > 0 && (
        <p>You logged: {selectedActivities.join(', ')}</p>
      )}
    </div>
  );
};

export default ActivityLogging;
