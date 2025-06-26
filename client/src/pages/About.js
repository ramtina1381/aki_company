import React from 'react';
import './Pages.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      {/* <section className="about-hero-centered"> */}
        <div className="centered-heading-container">
          <h1>About AKI Battery Recycling</h1>
        </div>
      {/* </section> */}
      
    

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-container">
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-content">
            <p className="mission-text">
              Aki Battery Recycling is a joint venture between the Three Fires Group and Electra Battery Materials, dedicated to advancing battery scrap and waste recycling in North America.
            </p>
            <p className="mission-text">
              Located in Southwestern Ontario, on the treaty territory of the Confederacy of the Three Fires, we are leveraging our partners' expertise to create sustainable solutions that recover valuable materials from end-of-life batteries and scrap.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-steps">
            <div className="process-step step-1">
              <div className="step-number">1</div>
              <h3>Collection & Shredding</h3>
              <p>Aki will shred batteries and scrap at our pre-treatment facility, producing a mix of materials including black mass rich in lithium, nickel, cobalt and other critical minerals.</p>
            </div>
            <div className="process-step step-2">
              <div className="step-number">2</div>
              <h3>Material Recovery</h3>
              <p>This black mass is then processed to recover valuable materials for the EV battery supply chain.</p>
            </div>
            <div className="process-step step-3">
              <div className="step-number">3</div>
              <h3>Circular Economy</h3>
              <p>We're committed to driving the circular economy and fostering a cleaner, greener future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌎</div>
              <h3>Environmental Stewardship</h3>
              <p>Reducing mining impacts through responsible recycling</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Indigenous Partnership</h3>
              <p>Honoring our partnership with Three Fires Group</p>
            </div>
            <div className="value-card">
              <div className="value-icon">♻️</div>
              <h3>Circular Solutions</h3>
              <p>Closing the loop on battery materials</p>
            </div>
          </div>
        </div>
      </section>
            {/* Team Section */}
      <section className="team-section">
        <div className="section-container">
          <h2 className="section-title">Our Team</h2>
          <div className="team-category">
            <h3 className="team-subtitle">Management Team</h3>
            <div className="team-grid">
              <div className="team-member-card">
                <img src="assets/team/Reggie George.jpeg" alt="John Doe" className="team-photo" />
                <h4>Reggie George</h4>
                <p>President</p>
                <p>Executive Director, Special Projects & Partnerships, The Three Fires Group</p>
              </div>
              <div className="team-member-card">
                <img src="assets/team/Andre Marais.jpeg" alt="Lisa Moore" className="team-photo" />
                <h4>Andre Marais</h4>
                <p>Director</p>
                <p>Strategy and Corporate Development</p>
              </div>
            </div>
          </div>

          <div className="team-category">
            <h3 className="team-subtitle">Advisory Team</h3>
            <div className="team-grid">
              <div className="team-member-card">
                <img src="assets/team/George Puvvada.jpeg" alt="Robert Taylor" className="team-photo" />
                <h4>Dr. George Puvvada,P.Eng., PMP, PhD</h4>
                <p>Vice President, Metallurgy and Technology, Electra Battery Materials</p>
              </div>
              <div className="team-member-card">
                <img src="assets/team/Michael Insulan.jpeg" alt="Maya Chen" className="team-photo" />
                <h4>Michael Insulan, PhD</h4>
                <p>Vice President, Commercial, Electra Battery Materials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;