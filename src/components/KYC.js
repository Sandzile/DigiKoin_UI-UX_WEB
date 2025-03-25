// src/components/KYC.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function KYC({ setIsLoggedIn }) {
  const [govID, setGovID] = useState(null);
  const [facialRec, setFacialRec] = useState(null);
  const [message, setMessage] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const verifyKYC = () => {
    if (!govID || !facialRec) {
      setMessage({ text: 'Please upload both files.', type: 'error'});
      return;
    }
    setMessage({ text: 'KYC Verification submitted successfully!', type: 'success' });
    localStorage.setItem('kycVerified', 'true');
    setTimeout(() => {
      navigate('/login');
      setMessage({ text: '', type: '' });
    }, 3000);
  };

  return (
    <div className="container active kyc-container">
      <h1 className="heading">KYC Verification</h1>
      {message.text && (
        <div className={`message ${message.type}`}>{message.text}</div>
      )} {/* Render message */}
      <div className="form-group">
        <label htmlFor="govID">Government ID:</label>
        <input
          type="file"
          id="govID"
          accept="image/*"
          onChange={(e) => setGovID(e.target.files[0])}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="facialRec">Facial Recognition Image:</label>
        <input
          type="file"
          id="facialRec"
          accept="image/*"
          onChange={(e) => setFacialRec(e.target.files[0])}
          required
        />
      </div>
      <button onClick={verifyKYC}>Verify</button>
    </div>
  );
}

export default KYC;