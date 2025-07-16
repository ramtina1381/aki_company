import React from "react";
import "./Pages.css";

export default function Partnership() {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const showModal = () => {
    const modal = document.getElementById("thankYouModal");
    if (modal) modal.style.display = "flex";
  };

  const closeModal = () => {
    const modal = document.getElementById("thankYouModal");
    if (modal) modal.style.display = "none";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      organization: e.target.organization.value,
      industry: e.target.industry.value,
      website: e.target.website.value,
      address: e.target.address.value,
      partnershipType: e.target.partnershipType.value,
      volume: e.target.volume.value,
      goals: e.target.goals.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch(`${baseUrl}/api/partnership`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showModal();
        e.target.reset();
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="partnership-section">
      <div className="form-container">
        <h1>Partner with AKI Battery Recycling</h1>
        <p>
          We're always open to collaborating with organizations that share our
          commitment to sustainability.
        </p>

        <form onSubmit={handleSubmit} className="partnership-form">
          <div className="form-group">
            <label>Full Name*</label>
            <input type="text" name="fullName" required />
          </div>

          <div className="form-group">
            <label>Email*</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="text" name="phone" />
          </div>

          <div className="form-group">
            <label>Organization Name</label>
            <input type="text" name="organization" />
          </div>

          <div className="form-group">
            <label>Industry</label>
            <select name="industry">
              <option>Battery Manufacturer</option>
              <option>Automotive OEM</option>
              <option>Vehicle Dismantler / Recycler</option>
              <option>Automotive Dealer / Service Centre</option>
              <option>Retailer / Electronics Store</option>
              <option>Municipality / Public Works</option>
              <option>School / Academic Institution</option>
              <option>Logistics or Waste Transport Provider</option>
              <option>Recycling Company / Processor</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input type="text" name="address" />
          </div>

          <div className="form-group">
            <label>Partnership Type</label>
            <select name="partnershipType">
              <option>Recycling Collaboration</option>
              <option>Battery Collection Site</option>
              <option>E-Waste Drop-Off</option>
              <option>Educational Outreach</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="4" />
          </div>

          <button type="submit">Submit Request</button>
        </form>
      </div>

      {/* Custom Modal */}
      <div
        className="modal-overlay"
        id="thankYouModal"
        style={{ display: "none" }}
        onClick={(e) => {
          if (e.target.id === "thankYouModal") closeModal();
        }}
      >
        <div className="modal-box">
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>
          <h2>Thank You!</h2>
          <div className="modal-content">
            <p>
              We appreciate your interest in partnering with AKI Battery
              Recycling. We'll reach out to you shortly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
