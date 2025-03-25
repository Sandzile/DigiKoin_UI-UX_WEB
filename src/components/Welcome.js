
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="container active">
      <h1 className="heading">Welcome to DigiKoin</h1>
      <p>Mining Africa's Gold. Empowering Digital Wealth</p>
      <button onClick={() => navigate('/login')}>Get Started</button>
    </div>
  );
}

export default Welcome;