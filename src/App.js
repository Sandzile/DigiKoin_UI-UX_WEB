import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import KYC from './components/KYC';
import AdminDashboard from './components/AdminDashboard';
import InvestorDashboard from './components/InvestorDashboard';
import MinorDashboard from './components/MinorDashboard';
import BuySell from './components/BuySell';
import Wallet from './components/Wallet';
import GoldStorage from './components/GoldStorage';
import Profile from './components/Profile';
import FAQ from './components/FAQ';
import Terms from './components/Terms';
import './index.css';

function HeaderWrapper({ darkMode, toggleMode }) {
  const location = useLocation();
  const showHeader = location.pathname === '/' || location.pathname === '/login' || localStorage.getItem('isLoggedIn') === 'true';
  return showHeader ? <Header darkMode={darkMode} toggleMode={toggleMode} /> : null;
}

function Logout({ setIsLoggedIn }) {
  const location = useLocation();

  useEffect(() => {
    // Clear user session data
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('kycVerified');
    localStorage.removeItem('userType');
    setIsLoggedIn(false);
    // Redirect to login page
    window.location.href = '/login'; // Using window.location.href to ensure a full page reload
  }, [setIsLoggedIn]);

  return null;
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || false;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    console.log('isLoggedIn:', isLoggedIn);
    console.log('kycVerified:', localStorage.getItem('kycVerified'));
    console.log('userType:', localStorage.getItem('userType'));
  });

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  const toggleMode = () => setDarkMode(prev => !prev);

  const ProtectedRoute = ({ children }) => {
    const isKycVerified = localStorage.getItem('kycVerified') === 'true';
    if (!isLoggedIn || !isKycVerified) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  const PublicRoute = ({ children, restricted }) => {
    const isKycVerified = localStorage.getItem('kycVerified') === 'true';
    if (restricted && isLoggedIn && isKycVerified) {
      const userType = localStorage.getItem('userType');
      switch (userType) {
        case 'admin':
          return <Navigate to="/admin-dashboard" replace />;
        case 'investor':
          return <Navigate to="/investor-dashboard" replace />;
        case 'minor':
          return <Navigate to="/minor-dashboard" replace />;
        default:
          return <Navigate to="/login" replace />;
      }
    }
    return children;
  };

  const HomeRoute = () => {
    const isKycVerified = localStorage.getItem('kycVerified') === 'true';
    if (isLoggedIn && isKycVerified) {
      const userType = localStorage.getItem('userType');
      switch (userType) {
        case 'admin':
          return <Navigate to="/admin-dashboard" replace />;
        case 'investor':
          return <Navigate to="/investor-dashboard" replace />;
        case 'minor':
          return <Navigate to="/minor-dashboard" replace />;
        default:
          return <Navigate to="/login" replace />;
      }
    }
    return <Welcome />;
  };

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <HeaderWrapper darkMode={darkMode} toggleMode={toggleMode} />
        {true && <Nav />}
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route 
            path="/login" 
            element={<PublicRoute restricted><Login setIsLoggedIn={setIsLoggedIn} /></PublicRoute>} 
          />
          <Route 
            path="/sign-up" 
            element={<PublicRoute restricted><SignUp /></PublicRoute>}
          />
          <Route 
            path="/reset-password" 
            element={<PublicRoute restricted><ResetPassword /></PublicRoute>} 
          />
          <Route 
            path="/kyc" 
            element={<KYC setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route 
            path="/admin-dashboard" 
            element={<ProtectedRoute><div className="admin-dashboard-container"><AdminDashboard /></div></ProtectedRoute>} 
          />
          <Route 
            path="/investor-dashboard" 
            element={<ProtectedRoute><div className="investor-dashboard-container"><InvestorDashboard /></div></ProtectedRoute>} 
          />
          <Route 
            path="/minor-dashboard" 
            element={<ProtectedRoute><div className="minor-dashboard-container"><MinorDashboard /></div></ProtectedRoute>} 
          />
          <Route 
            path="/buy-sell" 
            element={<ProtectedRoute><div className="buy-sell-container"><BuySell /></div></ProtectedRoute>} 
          />
          <Route 
            path="/wallet" 
            element={<ProtectedRoute><div className="wallet-container"><Wallet /></div></ProtectedRoute>} 
          />
          <Route 
            path="/gold-storage" 
            element={<ProtectedRoute><div className="gold-storage-container"><GoldStorage /></div></ProtectedRoute>} 
          />
          <Route 
            path="/profile" 
            element={<ProtectedRoute><div className="profile-container"><Profile setIsLoggedIn={setIsLoggedIn} /></div></ProtectedRoute>} 
          />
          <Route 
            path="/faq" 
            element={<ProtectedRoute><div className="faq-container"><FAQ /></div></ProtectedRoute>} 
          />
          <Route 
            path="/terms" 
            element={<ProtectedRoute><div className="terms-container"><Terms /></div></ProtectedRoute>} 
          />
          <Route 
            path="/logout" 
            element={<Logout setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="*" element={<Navigate to={isLoggedIn && localStorage.getItem('kycVerified') === 'true' ? "/login" : "/"} replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
