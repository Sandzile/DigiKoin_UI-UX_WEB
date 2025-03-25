
import React from 'react';
import './Header.css';
import logo from '../images/Gorilla.png';

function Header({ darkMode, toggleMode }) {
  return (
    <div className="header">
      <img src={logo} alt="DigiKoin Logo" className="logo" />
      <h1>DigiKoin</h1>
      <label className="toggle-switch" aria-label="Toggle Dark Mode">
        <input type="checkbox" checked={darkMode} onChange={toggleMode} />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default Header;