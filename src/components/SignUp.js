
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('investor');
  const [message, setMessage] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage({ text: "Passwords don't match!", type: 'error' });
      return;
    }
    
    setMessage({ text: 'Sign up successful! Proceeding to KYC...', type: 'success' });
    localStorage.setItem('userType', userType);
    localStorage.setItem('pendingEmail', email);
    localStorage.setItem('pendingPassword', password);
    console.log('Sign up attempted with:', { email, password, userType });
    setTimeout(() => {
      navigate('/kyc');
      setMessage({ text: '', type: '' });
    }, 2000);
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      {message.text && (
        <div className={`message ${message.type}`}>{message.text}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User Type:</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
            aria-label="Select user type"
          >
            <option value="investor">Investor</option>
            <option value="admin">Admin</option>
            <option value="minor">Minor</option>
          </select>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <p>
        By signing up, you agree to our <Link to="/terms">Terms and Conditions</Link>.
      </p>
    </div>
  );
}

export default SignUp;