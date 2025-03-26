import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import googleLogo from '../images/google-logo.png';
import appleLogo from '../images/apple-logo.png';
import facebookLogo from '../images/facebook-logo.png';
import metamaskLogo from '../images/metamask-logo.png';

function Login({ setIsLoggedIn }) {  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('investor');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const authenticate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password || !userType) {
      setError('Please fill in all fields.');
      return;
    }
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    
    // Simulate authentication
    localStorage.setItem('userType', userType);
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    
    localStorage.setItem('userType', userType);
  localStorage.setItem('isLoggedIn', 'true');
  if (userType === 'admin') {
    localStorage.setItem('kycVerified', 'true');
    navigate('/admin-dashboard');
    setIsLoggedIn(true); // After navigate
  } else {
    const isKycVerified = localStorage.getItem('kycVerified') === 'true';
    if (!isKycVerified) {
      navigate('/kyc');
      setIsLoggedIn(false); // Reset if KYC needed
    } else {
      switch (userType) {
        case 'investor':
          navigate('/investor-dashboard');
          setIsLoggedIn(true);
          break;
        case 'minor':
          navigate('/minor-dashboard');
          setIsLoggedIn(true);
          break;
        default:
          setError('Invalid user type');
      }
    }
  }
};

  const handleAltLogin = (provider) => (e) => {
    e.preventDefault();
    alert(`Logging in with ${provider}... (Coming soon!)`);
    localStorage.setItem('userType', userType);
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    
    setTimeout(() => {
      
      if (userType === 'admin') {
        localStorage.setItem('kycVerified', 'true');
        navigate('/admin-dashboard');
      } else {
        const isKycVerified = localStorage.getItem('kycVerified') === 'true';
        if (!isKycVerified) {
          navigate('/kyc');
        } else {
          switch (userType) {
            case 'investor':
              navigate('/investor-dashboard');
              break;
            case 'minor':
              navigate('/minor-dashboard');
              break;
            default:
              setError('Invalid user type');
          }
        }
      }
    }, 500);
  };

  return (
    <div className="container login-container active">
      <h2>Login</h2>
      {error && <p className="error" role="alert">{error}</p>}
      <form onSubmit={(e) => { e.preventDefault(); authenticate(); }}>
        <div className="form-group">
          <label htmlFor="userType">User Type:</label>
          <select
            id="userType"
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-describedby={error ? 'email-error' : undefined}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-describedby={error ? 'password-error' : undefined}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Forgot your password? <Link to="/reset-password">Reset it here</Link>
      </p>
      <p>
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </p>
      <p>
        By logging in, you agree to our <Link to="/terms">Terms and Conditions</Link>.
      </p>
      <p>Or login with:</p>
      <div className="alt-login-options" role="group" aria-label="Alternative login options">
        <a href="#" className="alt-login" onClick={handleAltLogin('Google')} aria-label="Login with Google">
          <img src={googleLogo} alt="Google" />
        </a>
        <a href="#" className="alt-login" onClick={handleAltLogin('Apple')} aria-label="Login with Apple">
          <img src={appleLogo} alt="Apple" />
        </a>
        <a href="#" className="alt-login" onClick={handleAltLogin('Facebook')} aria-label="Login with Facebook">
          <img src={facebookLogo} alt="Facebook" />
        </a>
        <a href="#" className="alt-login" onClick={handleAltLogin('MetaMask')} aria-label="Login with MetaMask">
          <img src={metamaskLogo} alt="MetaMask" />
        </a>
      </div>
      <div className="nav-buttons">
        <button onClick={() => navigate('/')}>Back</button>
      </div>
    </div>
  );
}

export default Login;