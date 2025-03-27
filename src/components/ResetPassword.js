import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const resetPassword = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setMessage('Please enter your email.');
      return;
    }
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    setMessage('Password reset link has been sent to your email.');
    setTimeout(() => {
      navigate('/login');
      setMessage('');
    }, 2000);
  };

  return (
    <div className="container active">
      <h1 className="heading">Reset Password</h1>
      {message && <p id="reset-message" className="message">{message}</p>} {/* In-page feedback */}
      <label htmlFor="reset-email">Email:</label>
      <input
        type="email"
        id="reset-email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        aria-describedby={message ? 'reset-message' : undefined}
      />
      <button onClick={resetPassword}>Submit</button>
      <div className="nav-buttons">
        <button onClick={() => navigate('/login')}>Back to Login</button>
      </div>
    </div>
  );
}

export default ResetPassword;