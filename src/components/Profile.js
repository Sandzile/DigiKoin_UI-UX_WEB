
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile({ setIsLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('active');
      }, index * 200); 
    });
  }, []);

  const changePassword = () => {
    const confirmation = window.confirm('Are you sure you want to change your password?');
    if (confirmation) {
      alert('Password change request submitted! Check your email for further instructions.');
    }
  };

  const enable2FA = () => {
    const confirmation = window.confirm('Enable Two-Factor Authentication?');
    if (confirmation) {
      setTimeout(() => {
        alert('2FA enabled successfully!');
      }, 1000);
    }
  };

  const setupBiometricLogin = () => {
    const confirmation = window.confirm('Set up biometric login?');
    if (confirmation) {
      setTimeout(() => {
        alert('Biometric login setup completed!');
      }, 1000);
    }
  };

  const manageNotifications = () => {
    const confirmation = window.confirm('Manage your notification settings?');
    if (confirmation) {
      alert('Notification settings updated!');
    }
  };

  const handleLogout = () => {
    const confirmation = window.confirm('Are you sure you want to log out?');
    if (confirmation) {
      localStorage.removeItem('userType');
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
      alert('You have been logged out successfully!');
      navigate('/');
    }
  };

  return (
    <div className="container">
      {/* User Info Section */}
      <div className="section">
        <h2>User Info</h2>
        <p><strong>Name:</strong> Sandzile</p>
        <p><strong>ID Verification Status:</strong> Verified</p>
      </div>

       {/* Security Settings Section */}
       <div className="section">
        <h2>Security Settings</h2>
        <p><a href="#" onClick={(e) => { e.preventDefault(); changePassword(); }}>Change Password</a></p>
        <p><a href="#" onClick={(e) => { e.preventDefault(); enable2FA(); }}>Enable 2FA</a></p>
        <p><a href="#" onClick={(e) => { e.preventDefault(); setupBiometricLogin(); }}>Setup Biometric Login</a></p>
      </div>

      {/* Notification Center Section */}
      <div className="section">
        <h2>Notification Center</h2>
        <p><strong>Price Alerts:</strong> Enabled</p>
        <p><strong>Transaction Updates:</strong> Enabled</p>
        <p><a href="#" onClick={(e) => { e.preventDefault(); manageNotifications(); }}>Manage Notification</a></p>
      </div>

      {/* Logout Section */}
      <div className="section">
        <h2>Account</h2>
        <button onClick={handleLogout} className="logout-button">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Profile;