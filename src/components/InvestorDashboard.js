
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function InvestorDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('active');
      }, index * 200);
    });
  }, []);

  const handleInvestNow = () => navigate('/buy-sell');
  const handleViewWhitepaper = () => window.open('/path-to-whitepaper.pdf', '_blank');

  return (
    <div className="container">
      {/* 1. Hero Section (Full Width) */}
      <section className="section hero-section">
        <h1>Invest in Gold-Backed Digital Assets with Confidence</h1>
        <p>Real Gold. Real Value. Real Security.</p>
        <div className="key-highlights">
          <div><strong>Current Token Price:</strong> $5.25</div>
          <div><strong>Total Gold Reserves:</strong> 150 kg</div>
          <div><strong>Token Circulation:</strong> 25 Million</div>
        </div>
        <div className="cta-buttons">
          <button onClick={handleInvestNow}>Invest Now</button>
          <button onClick={handleViewWhitepaper}>View Whitepaper</button>
        </div>
      </section>

      <div className="dashboard-grid">
        {/* 2. Gold Reserve Metrics */}
        <section className="section">
          <h2>Gold Reserve Metrics</h2>
          <div className="metrics-grid">
            <div><strong>Total Gold Reserves:</strong> 150 kg</div>
            <div><strong>Current Market Value:</strong> $9.75M USD</div>
            <div><strong>Vault Locations:</strong> Dubai, South Africa</div>
            <div><strong>Audit:</strong> Verified by PwC</div>
          </div>
          <div className="visual-placeholder">Interactive Gold Reserve Map</div>
          <div className="chart-placeholder">Gold Reserve Growth Chart</div>
        </section>

        {/* 3. Token Performance Metrics */}
        <section className="section">
          <h2>Token Performance Metrics</h2>
          <div className="metrics-grid">
            <div><strong>Current Token Price:</strong> $5.25</div>
            <div><strong>Market Cap:</strong> $131.25M</div>
            <div><strong>Total Tokens in Circulation:</strong> 25M</div>
            <div><strong>Trading Volume (24h):</strong> $2.3M</div>
            <div><strong>Token Supply Cap:</strong> 50M</div>
            <div><strong>Burned Tokens:</strong> 1.5M</div>
          </div>
          <div className="chart-placeholder">Token Price Over Time</div>
        </section>

        {/* 4. Financial & ROI Metrics */}
        <section className="section">
          <h2>Financial & ROI Metrics</h2>
          <div className="metrics-grid">
            <div><strong>Total Funds Raised:</strong> $75M</div>
            <div><strong>ROI History:</strong> +15% (Past Year)</div>
            <div><strong>Projected ROI:</strong> Low: 5%, Med: 10%, High: 20%</div>
            <div><strong>Dividend/Yield:</strong> 2% Annually</div>
            <div><strong>Revenue Streams:</strong> Mining, Trading Fees</div>
          </div>
          <div className="visual-placeholder">ROI Calculator Tool</div>
        </section>

        {/* 5. Security & Compliance Metrics */}
        <section className="section">
          <h2>Security & Compliance Metrics</h2>
          <div className="metrics-grid">
            <div><strong>Gold-to-Token Ratio:</strong> 1 kg = 10,000 Tokens</div>
            <div><strong>Smart Contract Audit:</strong> CertiK Verified</div>
            <div><strong>KYC/AML Compliance:</strong> 98%</div>
            <div><strong>Blockchain Explorer:</strong> <a href="#">View Transactions</a></div>
            <div><strong>Insurance Coverage:</strong> $50M</div>
          </div>
          <div className="visual-placeholder">Compliance Dashboard</div>
        </section>

        {/* 6. IoT-Driven Operational Metrics */}
        <section className="section">
          <h2>IoT-Driven Operational Metrics</h2>
          <div className="metrics-grid">
            <div><strong>Ore Grade:</strong> 3.5 g/t</div>
            <div><strong>Recovery Rate:</strong> 92%</div>
            <div><strong>Shipment Tracking:</strong> In Transit (Dubai)</div>
            <div><strong>Vault Temp:</strong> 22°C</div>
            <div><strong>Energy Usage:</strong> 500 kWh/day</div>
          </div>
          <div className="visual-placeholder">Live Dashboard with Data Feeds</div>
        </section>

        {/* 7. User Adoption & Growth Metrics */}
        <section className="section">
          <h2>User Adoption & Growth Metrics</h2>
          <div className="metrics-grid">
            <div><strong>Total Active Investors:</strong> 12,500</div>
            <div><strong>Wallets Created:</strong> 15,000</div>
            <div><strong>Transaction Volume (Daily):</strong> $1.8M</div>
            <div><strong>Geographic Distribution:</strong> UAE 40%, US 30%, EU 20%</div>
          </div>
          <div className="visual-placeholder">Investor Distribution Map</div>
        </section>
      </div>
    </div>
  );
}

export default InvestorDashboard;