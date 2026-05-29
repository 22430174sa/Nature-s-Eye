import React, { useState } from 'react';
import "../Style/signup.css";
const Signup=() =>{
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: ''
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
     alert("Account Registration Successful");
  };
  return (
    <div className="main-wrapper">
      <div className="signup-card">
        <h2 className="title">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              name="firstName"
              placeholder="First Name" 
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input 
              type="text" 
              name="lastName"
              placeholder="Last Name" 
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input 
              type="email" 
              name="email"
              placeholder="Email *" 
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
              <option value="" disabled>Select your country</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="LB">Lebanon</option>
              <option value="FR">France</option>
            </select>
          </div>
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
