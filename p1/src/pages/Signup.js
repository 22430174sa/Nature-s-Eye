import React, { useState } from 'react';
import "../Style/signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
    role: 'photographer', 
    clubName: '',        
    registrationNo: ''   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.role === 'organizer') {
      alert(
        `Authorized Registration Form Submitted!\n\n` +
        `Role: Club Organizer\n` +
        `Club Name: ${formData.clubName}\n` +
        `License ID: ${formData.registrationNo}\n\n` +
        `Account created. Verification status will be managed post-login.`
      );
    } else {
      alert(`Account Created Successfully!\n\nRole: Photographer`);
    }
    
    console.log("Locally saved data context:", formData);
  };

  return (
    <div className="main-wrapper">
      <div className="signup-card">
        <h2 className="title">Create Account</h2>
        
       
        <div className="role-selector-container">
          <p className="role-label">Select your account type:</p>
          <div className="role-buttons">
            <button 
              type="button"
              className={`role-btn ${formData.role === 'photographer' ? 'active' : ''}`}
              onClick={() => setFormData(prev => ({ ...prev, role: 'photographer' }))}
            >
              📸 Photographer
            </button>
            <button 
              type="button"
              className={`role-btn ${formData.role === 'organizer' ? 'active' : ''}`}
              onClick={() => setFormData(prev => ({ ...prev, role: 'organizer' }))}
            >
              🗺️ Club Organizer
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
         
          <div className="input-group">
            <input 
              type="text" 
              name="firstName"
              placeholder="First Name *" 
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input 
              type="text" 
              name="lastName"
              placeholder="Last Name *" 
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input 
              type="email" 
              name="email"
              placeholder="Email Address *" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              name="password"
              placeholder="Password *" 
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group country-section">
            <select 
              id="country" 
              name="country" 
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select your country *</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="LB">Lebanon</option>
              <option value="FR">France</option>
            </select>
          </div>

         
          {formData.role === 'organizer' && (
            <div className="verification-fields-wrapper animate-fade-in">
              <hr className="divider" />
              <h3 className="verification-title">🛡️ Club Authorization & Verification</h3>
              <p className="verification-subtitle">Provide registration credentials to ensure this is an authorized club.</p>
              
              <div className="input-group">
                <input 
                  type="text" 
                  name="clubName"
                  placeholder="Official Club / Organization Name *" 
                  value={formData.clubName}
                  onChange={handleChange}
                  required={formData.role === 'organizer'}
                />
              </div>

              <div className="input-group">
                <input 
                  type="text" 
                  name="registrationNo"
                  placeholder="Official Club Registration Number *" 
                  value={formData.registrationNo}
                  onChange={handleChange}
                  required={formData.role === 'organizer'}
                />
              </div>
            </div>
          )}

          <button type="submit" className="signup-btn">Sign Up</button>
          
          <div className="form-footer">
            <span>
              Already have an account? <a href="/login">Login here</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
