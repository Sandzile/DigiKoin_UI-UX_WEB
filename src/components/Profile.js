import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null); // Dynamic user data
  const [message, setMessage] = useState(''); // In-page feedback

  useEffect(() => {
    // Simulate fetching user data
    setTimeout(() => {
      setUserInfo({ name: 'Sandzile', verified: 'Verified' });
    }, 1000);

    // Animation for sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('active');
      }, index * 200);
    });
  }, []);

  const changePassword = () => {
    if (window.confirm('Are you sure you want to change your password?')) {
      setMessage('Password change request submitted! Check your email for further instructions.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const enable2FA = () => {
    if (window.confirm('Enable Two-Factor Authentication?')) {
      setTimeout(() => {
        setMessage('2FA enabled successfully!');
        setTimeout(() => setMessage(''), 3000);
      }, 1000);
    }
  };

  const setupBiometricLogin = () => {
    if (window.confirm('Set up biometric login?')) {
      setTimeout(() => {
        setMessage('Biometric login setup completed!');
        setTimeout(() => setMessage(''), 3000);
      }, 1000);
    }
  };

  const manageNotifications = () => {
    if (window.confirm('Manage your notification settings?')) {
      setMessage('Notification settings updated!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      localStorage.removeItem('userType');
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('kycVerified'); // Added for consistency
      setIsLoggedIn(false);
      setMessage('You have been logged out successfully!');
      setTimeout(() => {
        navigate('/');
        setMessage('');
      }, 2000);
    }
  };

  return (
    <div className="container">
      {/* Message Display */}
      {message && <p className="message" id="profile-message">{message}</p>}

      {/* User Info Section */}
      <div className="section" role="region" aria-labelledby="user-info-heading">
        <h2 id="user-info-heading">User Info</h2>
        <p><strong>Name:</strong> {userInfo ? userInfo.name : 'Loading...'}</p>
        <p><strong>ID Verification Status:</strong> {userInfo ? userInfo.verified : 'Loading...'}</p>
      </div>

      {/* Security Settings Section */}
      <div className="section" role="region" aria-labelledby="security-heading">
        <h2 id="security-heading">Security Settings</h2>
        <p><a href="#" onClick={(e) => { e.preventDefault(); changePassword(); }}>Change Password</a></p>
        <p><a href="#" onClick={(e) => { e.preventDefault(); enable2FA(); }}>Enable 2FA</a></p>
        <p><a href="#" onClick={(e) => { e.preventDefault(); setupBiometricLogin(); }}>Setup Biometric Login</a></p>
      </div>

      {/* Notification Center Section */}
      <div className="section" role="region" aria-labelledby="notification-heading">
        <h2 id="notification-heading">Notification Center</h2>
        <p><strong>Price Alerts:</strong> Enabled</p>
        <p><strong>Transaction Updates:</strong> Enabled</p>
        <p><a href="#" onClick={(e) => { e.preventDefault(); manageNotifications(); }}>Manage Notification</a></p>
      </div>

      {/* Logout Section */}
      <div className="section" role="region" aria-labelledby="account-heading">
        <h2 id="account-heading">Account</h2>
        <button 
          onClick={handleLogout} 
          className="logout-button" 
          aria-label="Log Out of Account"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Profile;