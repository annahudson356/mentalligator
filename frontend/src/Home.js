import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Home.css';


const Home = () => {
  const navigate = useNavigate();

  const getStartedClick = () => {
    navigate('/login'); 
  };
  return (
    <div>

    <section className="mission">
      <div className="mission-content">
        <h1 className="mission-title">Empowering Your Wellness Journey</h1>
        <p className="mission-description">
          Your health and wellness are our priority. Discover personalized plans and guidance to achieve a balanced, healthy lifestyle.
        </p>
        <button className="get-started" onClick={getStartedClick}>Get Started</button>
      </div>
    </section>

    <section className="info-section">
      <div className="info-card">
        <h2 className="info-title">What is Mentalligator?</h2>
        <p className="info-text">
        Our mission at Mentalligator is to empower college students at the University of Florida to prioritize and maintain their wellness. 
        We understand the unique challenges students face, from balancing academics and social life to managing stress and staying physically active. 
        Mentalligator provides you with all the tools you need to take control of your mental and physical health.
        </p>
      </div>
      <div className="info-card">
        <h2 className="info-title">What does Mentalligator offer?</h2>
        <p className="info-text">With Mentalligator, you can easily track your wellbeing in real-time, monitoring everything from daily mood to physical activity, sleep patterns, and more. Our app visualizes your health trends over time, offering insights into your personal wellness journey. By analyzing your habits, Mentalligator provides personalized recommendations and gentle nudges, suggesting adjustments and practices that can help you improve your overall health and reach your wellness goals.</p>
      </div>
    </section>

    <section className="join-section">
      <div className="join">
        <div className = "join-content">
          <h1 className = 'call'>Join a thriving, supportive community dedicated to student wellness. </h1>
          <p>Click the button below to login or register!</p>
          <button className="get-started" onClick={getStartedClick}>Join Mentalligator</button>
        </div>
      </div>
    </section>
   
  </div>
  );
};

export default Home;
