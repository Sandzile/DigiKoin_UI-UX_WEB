import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/buy-sell" activeClassName="active">
              Buy/Sell
            </NavLink>
          </li>
          <li>
            <NavLink to="/wallet" activeClassName="active">
              Wallet
            </NavLink>
          </li>
          <li>
            <NavLink to="/gold-storage" activeClassName="active">
              Gold Storage and Tracking
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName="active">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" activeClassName="active">
              FAQ
            </NavLink>
          </li>
        </ul>
        <div className="nav-actions">
          <NavLink to="/logout" activeClassName="active" className="logout-link">
            Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;