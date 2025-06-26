import React from 'react';
import './Pages.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        {/* Background Image (absolute positioned) */}
        <img
          src="assets/production.jpg"
          alt="Background"
          className="hero-background-image"
        />
        {/* Content */}
        <div className="hero-content">
          <h1>Closing the Loop on Battery Materials</h1>
          <p className="hero-subtitle">
            First Nations-owned lithium-ion battery recycling for Ontario's clean energy future
          </p>
        </div>
      </section>

      {/* Core Value Propositions */}
      <section className="value-section">
        <div className="value-card">
          <div className="value-icon" style={{ backgroundColor: 'rgba(51,161,143,0.1)' }}>♻️</div>
          <h3>Indigenous Leadership</h3>
          <p>Joint venture with Three Fires Group ensures First Nations participation in the energy transition.</p>
        </div>
        
        <div className="value-card">
          <div className="value-icon" style={{ backgroundColor: 'rgba(166,100,93,0.1)' }}>⚡</div>
          <h3>Proprietary Technology</h3>
          <p>Electra's hydrometallurgical process recovers critical minerals from black mass with industry-leading efficiency.</p>
        </div>
        
        <div className="value-card">
          <div className="value-icon" style={{ backgroundColor: 'rgba(73,109,137,0.1)' }}>📍</div>
          <h3>Localized Solution</h3>
          <p>Ontario-based processing reduces transport emissions and secures domestic supply chains.</p>
        </div>
      </section>

      {/* Verified Impact Metrics */}
      <section className="metrics-section">
        <h2>Our Verified Impact</h2>
        <div className="metrics-grid">
          <div className="metric-item">
            <div className="metric-number">100%</div>
            <p>First Nations-owned through Three Fires Group partnership</p>
          </div>
          <div className="metric-item" style={{ backgroundColor: '#496D89' }}>
            <div className="metric-number">95%+</div>
            <p>Critical mineral recovery rate via Electra's proprietary refining*</p>
          </div>
          <div className="metric-item" style={{ backgroundColor: '#A6645D' }}>
            <div className="metric-number">70%</div>
            <p>Reduction in carbon footprint vs. virgin mining (industry average)**</p>
          </div>
        </div>
        <p className="footnote">*Based on Electra Battery Materials pilot results<br/>**Source: Circular Energy Storage 2022 analysis</p>
      </section>

      {/* Process Flow */}
      <section className="process-section">
        <h2>How We Close the Loop</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Collection</h3>
            <p>Sourcing end-of-life batteries from Ontario manufacturers</p>
          </div>
          <div className="step-arrow"></div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Black Mass Production</h3>
            <p>Mechanical processing at our Southern Ontario facility</p>
          </div>
          <div className="step-arrow"></div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Hydrometallurgical Refining</h3>
            <p>Recovering lithium, nickel, cobalt, and other critical minerals</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;