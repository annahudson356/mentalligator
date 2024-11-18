import React from 'react';
import './About.css';
const About = () => {
  return (
    <div>
      <section className="about-section">
        <div className="about-content">
          <h1>About Mentalligator</h1>
          <p>Mentalligator is an application designed for UF students to focus on their mental wellbeing and overall wellness.</p>
          <p>Mentalligator allows users to log their mental and physical activities and see insights on how to improve in the future.</p>
          <p>Additionally, Mentalligator provides suggestions for students in the Gainesville area based on past experiences to help promote healthy living.</p>
        </div>
      </section>
         
      <section className="team-section">
        <h1 className="team-header">About the Development Team</h1>
        <div className="team-grid">
          <div className="team-member">
            <div className="team-card">
              <h3>Anna Hudson</h3>
              <p>Scrum Master, Frontend Developer</p>
              <p>
                Anna is a second year computer science major at the University of Florida.
              </p>
            </div>
          </div>
          <div className="team-member">
            <div className="team-card">
              <h3>Jayden Sputilik</h3>
              <p>Product Manager, Backend Developer</p>
              <p>
                Jayden is a third year computer science major at the University of Florida.
              </p>
            </div>
          </div>
          <div className="team-member">
            <div className="team-card">
              <h3>Logan Dukes</h3>
              <p>Frontend Developer</p>
              <p>
                Logan is a third year computer engineering major at the University of Florida.
              </p>
            </div>
          </div>
          <div className="team-member">
            <div className="team-card">
              <h3>Milana Tratsevska</h3>
              <p>Backend Developer</p>
              <p>
               Milana is a second year computer science student at the University of Florida.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
