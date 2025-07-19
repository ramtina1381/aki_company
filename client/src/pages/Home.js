import React from 'react';
import './Pages.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
    <section className="hero">
      {/* Content */}
      <div className="hero-content">
        <h1>Closing the Loop on Battery Materials</h1>
        <p className="hero-subtitle">
          First Nations-led lithium-ion battery recycling. Sustainable. Strategic. Indigenous-owned.
        </p>
      </div>
      <div className="hero-overlay"></div>
    </section>

    {/* Verified Impact Metrics */}
    <section className="metrics-section">
      <h2>Our Verified Impact</h2>
      <div className="metrics-grid">
        <div className="metric-item edge-highlight" style={{ "--edge-color": "#33A18F" }}>
          <div className="metric-label">Majority Indigenous-Owned</div>
          <p className="metric-description">Aki is majority owned by the Three Fires Group, ensuring that First Nations communities are central to Canada's clean energy transition.</p>
        </div>
        <div className="metric-item edge-highlight" style={{ "--edge-color": "#496D89" }}>
          <div className="metric-label">First of Its Kind</div>
          <p className="metric-description">Our project sets a national precedent for inclusive, circular critical mineral recovery.</p>
        </div>
        <div className="metric-item edge-highlight" style={{ "--edge-color": "#A6645D" }}>
          <div className="metric-label">Local Supply Chain</div>
          <p className="metric-description">By sourcing, processing, and refining within Ontario, Aki contributes to a secure and resilient battery materials supply chain.</p>
        </div>
      </div>
    </section>
      {/* Process Flow */}
{/* Process Flow */}
<section className="process-section-home">
  <h2>How We Close the Loop</h2>
  <div className="process-steps-home">
    <div className="step-home">
      <div className="step-number-home">1</div>
      <h3>Collection</h3>
      <p>Sourcing battery waste materials in Ontario</p>
    </div>
    
    <div className="step-connector-home">
      <svg className="step-icon-home" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </div>
    
    <div className="step-home">
      <div className="step-number-home">2</div>
      <h3>Pre-processing</h3>
      <p>Mechanical processing at our Southern Ontario facility</p>
    </div>
    
    <div className="step-connector-home">
      <svg className="step-icon-home" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </div>
    
    <div className="step-home">
      <div className="step-number-home">3</div>
      <h3>Processing</h3>
      <p>Hydrometallurgical refining is carried out at our partner’s facility in Northeastern Ontario</p>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;