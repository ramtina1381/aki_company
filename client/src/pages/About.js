import React from 'react';
import './Pages.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-container">
          <div className="centered-heading-container">
            <h1>About Us</h1>
        </div>
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-content">
            <p className="mission-text">
                Aki Battery Recycling is a joint venture between the Three Fires Group and Electra Battery Materials Corporation, created to establish Ontario’s <strong>first First Nations-led lithium-ion battery recycling company</strong>. Through this partnership, Aki is advancing Indigenous leadership in the clean energy transition while strengthening Canada’s critical minerals supply chain.            
            </p>
            <p className="mission-text">
                At the heart of Aki’s operations is a state-of-the-art pre-processing facility designed to handle end-of-life lithium-ion batteries and manufacturing scrap. Batteries are carefully dismantled into component parts—recovering high-grade copper, aluminum, and steel. The remaining materials are shredded to recover copper and aluminum, and to produce <strong>black mass</strong>, a valuable intermediate product rich in critical minerals such as lithium, nickel, cobalt, manganese, and graphite.
            </p>
            <p className='mission-text'>
              This black mass will be further refined at Electra’s hydrometallurgical facility in Northeastern Ontario, enabling the recovery of these critical minerals for reuse in new batteries. Together, Aki and Electra are building a <strong>localized, circular supply chain</strong> for battery materials—one that prioritizes sustainability, economic inclusion, and energy security.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-container">
          <h2 className="section-title">Our Process</h2>
          <h3 className="process-subtitle">Closing the Loop on Battery Materials</h3>
          <p className="process-intro">
            Aki Battery Recycling transforms battery waste into critical mineral resources through a three-stage process designed for sustainability, efficiency, and circularity.
          </p>
          <div className="process-steps">
            <div className="process-step step-1">
              <div className="step-number">1</div>
              <h3>Battery Collection & Dismantling</h3>
              <p> We source battery manufacturing scrap from producers and end-of-life batteries from consumers across Ontario. Dismantling is performed safely to recover valuable metals including copper wiring, aluminum, and steel.</p>
            </div>
            <div className="process-step step-2">
              <div className="step-number">2</div>
              <h3>Shredding & Black Mass Production</h3>
              <p>At our Southern Ontario facility, materials undergo mechanical processing to recover copper and aluminum materials, while producing black mass.</p>
            </div>
            <div className="process-step step-3">
              <div className="step-number">3</div>
              <h3>Critical Mineral Recovery </h3>
              <p>This black mass is then refined at our Partner’s hydrometallurgical facility to recover lithium, nickel, cobalt, manganese and other key critical minerals for reuse in battery manufacturing.</p>
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
              <p>Minimizing mining impacts through responsible battery recycling.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Indigenous Partnership</h3>
              <p>Empowering economic participation through majority First Nations ownership.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">♻️</div>
              <h3>Circular Solutions</h3>
              <p>Supporting a closed-loop battery supply chain for Canada.</p>
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
              </div>
              <div className="team-member-card">
                <img src="assets/team/Andre Marais.jpeg" alt="Lisa Moore" className="team-photo" />
                <h4>Andre Marais</h4>
                <p>Director, Strategy and Corporate Development</p>
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