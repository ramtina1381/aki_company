import React from "react";
import "./Pages.css";

export default function Partnership() {
  const baseUrl = process.env.REACT_APP_API_BASE_URL

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
        alert("Thank you! We'll be in touch regarding your partnership request.");
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
        <p>We're always open to collaborating with organizations that share our commitment to sustainability.</p>
        
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
            <label>Organization Name*</label>
            <input type="text" name="organization" required />
          </div>

          <div className="form-group">
            <label>Industry</label>
            <select name="industry">
              <option>Manufacturer</option>
              <option>Retailer</option>
              <option>Municipality</option>
              <option>School</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Website</label>
            <input type="url" name="website" />
          </div>

          <div className="form-group">
            <label>Business Address</label>
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
            <label>Estimated Monthly Battery Waste</label>
            <select name="volume">
              <option>&lt;10kg</option>
              <option>10-50kg</option>
              <option>50-100kg</option>
              <option>100kg+</option>
            </select>
          </div>

          <div className="form-group">
            <label>Your Sustainability Goals</label>
            <textarea name="goals" rows="4" />
          </div>

          <div className="form-group">
            <label>Additional Message</label>
            <textarea name="message" rows="4" />
          </div>

          <button type="submit">Submit Partnership Request</button>
        </form>
      </div>
    </section>
  );
}
