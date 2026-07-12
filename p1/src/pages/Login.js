import React, { useState } from 'react';
import '../Style/Login.css';
import { Link } from 'react-router-dom';
const Login=()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const handleSubmit = (e) => {
     e.preventDefault();
  if (email==='' || password==='' || country==='') {
    alert("Please fill all fields");
    return;
  }
  alert("Login successful");
};
  return (
    <div className="login-box">
      <form className="login-form" onSubmit={handleSubmit} >
        <h2>Welcome Back</h2>
        <p>Please enter your details</p>
        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}        
          />
        </div>
        <div className="input-group">
          <label >Country</label>
          <select 
            id="country" 
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="" disabled>Select your country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="LB">Lebanon</option>
            <option value="FR">France</option>
          </select>
        </div>
        <button type="submit" className="login-button">Login</button>
        <div className="form-footer">
          <Link to="#">Forgot password?</Link>
          <span>
            New User? Create Your Account : <Link to="/Signup">Sign up</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
