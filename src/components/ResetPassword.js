
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const resetPassword = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      alert('Please enter your email.');
      return;
    }
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    alert('Password reset link has been sent to your email.');
    navigate('/login');
  };

  return (
    <div className="container active">
      <h1 className="heading">Reset Password</h1>
      <label htmlFor="reset-email">Email:</label>
      <input
        type="email"
        id="reset-email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button onClick={resetPassword}>Submit</button>
      <div className="nav-buttons">
        <button onClick={() => navigate('/login')}>Back to Login</button>
      </div>
    </div>
  );
}

export default ResetPassword;