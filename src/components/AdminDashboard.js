import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();
  const [metrics, setMetrics] = useState(null); // Added for dynamic data

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setMetrics({
        tokenPrice: '$5.25',
        goldReserves: '175 kg',
        activeInvestors: '13,000',
        marketValue: '$10.5M USD / 38.6M AED',
        vaultDetails: 'Dubai (DMCC Vault, ISO 9001), South Africa (Rand Refinery, 24/7 Security)',
        auditReports: 'Verified by Deloitte (Q1 2025)',
        reserveGrowth: '+2.5% Monthly / +7.8% Quarterly',
        marketCap: '$131.25M',
        tokensInCirculation: '25M',
        tradingVolume: '$2.3M',
        tokenSupplyCap: '50M',
        burnedTokens: '1.5M',
        fundsRaised: '$75M',
        roiHistory: '+15% (Past Year)',
        projectedRoi: 'Low: 5%, Med: 10%, High: 20%',
        dividendYield: '2% Annually',
        revenueStreams: 'Mining, Trading Fees',
        goldToTokenRatio: '1 kg = 10,000 Tokens',
        smartContractAudit: 'CertiK Verified',
        kycCompliance: '98%',
        blockchainExplorer: 'View Transactions',
        insuranceCoverage: '$50M',
        oreGrade: '3.8 g/t',
        recoveryRate: '93%',
        tonnesMined: '1,200 tonnes/month',
        vaultData: '5 kg moved to Dubai (03/22/25)',
        gpsTracking: 'Shipment #GX-472 in transit (ETA: 03/25/25)',
        energyWater: '520 kWh/day, 1,200 L/day',
        walletsCreated: '16,500',
        transactionVolumeValue: '1,200 tx/day ($2M/day), 35,000 tx/month ($60M/month)',
        geoDistribution: 'UAE 45%, US 25%, EU 20%, Other 10%',
        investorContact: 'krmathabe@voltedgetechsolutions.co.za, +27 81 216 0556',
        supportContact: 'customersupport@voltedgetechsolutions.co.za, +27 60 941 3956 (24/7)',
        escalation: 'Contact exco@voltedgetechsolutions.co.za',
      });
    }, 1000);

    // Animation for sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('active');
      }, index * 200);
    });
  }, []);

  const handleInvestNow = () => navigate('/buy-sell');
  const handleViewWhitepaper = () => window.open('/path-to-whitepaper.pdf', '_blank');
  const handleAuditReports = () => window.open('/path-to-audit-reports.pdf', '_blank');

  return (
    <div className="admin-dashboard-container">
      <div className="container">
        {/* 1. Hero Section */}
        <section className="section hero-section" aria-labelledby="hero-heading">
          <h1 id="hero-heading">Invest in Gold-Backed Digital Assets with Confidence</h1>
          <p>Real Gold. Real Value. Real Security.</p>
          <div className="key-highlights">
            <div className="metric-card">
              <img src="/images/current-token-price.png" alt="Token Price Icon" className="metric-icon" />
              <div className="metric-info">
                <span className="metric-label">Current Token Price</span>
                <span className="metric-value">{metrics ? metrics.tokenPrice : 'Loading...'}</span>
                <span className="metric-change">N/A</span>
              </div>
            </div>
            <div className="metric-card">
              <img src="/images/total-gold-reserves.png" alt="Total Gold Reserves" className="metric-icon" />
              <div className="metric-info">
                <span className="metric-label">Total Gold Reserves</span>
                <span className="metric-value">{metrics ? metrics.goldReserves : 'Loading...'}</span>
                <span className="metric-change">N/A</span>
              </div>
            </div>
            <div className="metric-card">
              <img src="/images/total-active-investors.png" alt="Total Active Investors" className="metric-icon" />
              <div className="metric-info">
                <span className="metric-label">Total Active Investors</span>
                <span className="metric-value">{metrics ? metrics.activeInvestors : 'Loading...'}</span>
                <span className="metric-change">N/A</span>
              </div>
            </div>
          </div>
          <div className="cta-buttons">
            <button onClick={handleInvestNow} aria-label="Invest Now in DigiKoin">Invest Now</button>
            <button onClick={handleViewWhitepaper} aria-label="View Whitepaper PDF">View Whitepaper</button>
          </div>
        </section>

        <div className="dashboard-grid">
          {/* 2. Gold Reserve Metrics */}
          <section className="section" aria-labelledby="gold-reserve-heading">
            <h2 id="gold-reserve-heading">Gold Reserve Metrics</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <img src="/images/total-gold-reserves.png" alt="Total Gold Reserves" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Total Gold Reserves</span>
                  <span className="metric-value">{metrics ? metrics.goldReserves + ' (0.175 tons)' : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/current-market-value.png" alt="Current Market Value" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Current Market Value</span>
                  <span className="metric-value">{metrics ? metrics.marketValue : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/vault-storage.png" alt="Vault Storage Details" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Vault Storage Details</span>
                  <span className="metric-value">{metrics ? metrics.vaultDetails : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/gold-reserve-audit-reports.png" alt="Gold Reserve Audit Reports" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Gold Reserve Audit Reports</span>
                  <span className="metric-value">{metrics ? metrics.auditReports : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/gold-reserve-growth-rate.png" alt="Gold Reserve Growth Rate" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Gold Reserve Growth Rate</span>
                  <span className="metric-value">{metrics ? metrics.reserveGrowth : 'Loading...'}</span>
                  <span className="metric-change positive">+2.5%</span>
                </div>
              </div>
            </div>
            <div className="visual-placeholder">Interactive Gold Reserve Map</div>
            <div className="chart-placeholder">Gold Reserve Growth Chart</div>
          </section>

          {/* 3. Token Performance Metrics */}
          <section className="section" aria-labelledby="token-performance-heading">
            <h2 id="token-performance-heading">Token Performance Metrics</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <img src="/images/current-token-price.png" alt="Token Price Icon" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Current Token Price</span>
                  <span className="metric-value">{metrics ? metrics.tokenPrice : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/market-cap.png" alt="Market Cap" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Market Cap</span>
                  <span className="metric-value">{metrics ? metrics.marketCap : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/tokens-in-circulation.png" alt="Total Tokens in Circulation" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Total Tokens in Circulation</span>
                  <span className="metric-value">{metrics ? metrics.tokensInCirculation : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/trading-volume.png" alt="Trading Volume" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Trading Volume (24h)</span>
                  <span className="metric-value">{metrics ? metrics.tradingVolume : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/token-supply-cap.png" alt="Token Supply Cap" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Token Supply Cap</span>
                  <span className="metric-value">{metrics ? metrics.tokenSupplyCap : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/burned-tokens.png" alt="Burned Tokens" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Burned Tokens</span>
                  <span className="metric-value">{metrics ? metrics.burnedTokens : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
            </div>
            <div className="chart-placeholder">Token Price Over Time</div>
          </section>

          {/* 4. Financial & ROI Metrics */}
          <section className="section" aria-labelledby="financial-roi-heading">
            <h2 id="financial-roi-heading">Financial & ROI Metrics</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <img src="/images/total-funds-raised.png" alt="Total Funds Raised" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Total Funds Raised</span>
                  <span className="metric-value">{metrics ? metrics.fundsRaised : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/roi-history.png" alt="ROI History" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">ROI History</span>
                  <span className="metric-value">{metrics ? metrics.roiHistory : 'Loading...'}</span>
                  <span className="metric-change positive">+15%</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/projected-roi.png" alt="Projected ROI" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Projected ROI</span>
                  <span className="metric-value">{metrics ? metrics.projectedRoi : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/dividend.png" alt="Dividend/Yield" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Dividend/Yield</span>
                  <span className="metric-value">{metrics ? metrics.dividendYield : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/revenue-streams.png" alt="Revenue Streams" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Revenue Streams</span>
                  <span className="metric-value">{metrics ? metrics.revenueStreams : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
            </div>
            <div className="visual-placeholder">ROI Calculator Tool</div>
          </section>

          {/* 5. Security & Compliance Metrics */}
          <section className="section" aria-labelledby="security-compliance-heading">
            <h2 id="security-compliance-heading">Security & Compliance Metrics</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <img src="/images/gold-to-token-ratio.png" alt="Gold-to-Token Ratio" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Gold-to-Token Ratio</span>
                  <span className="metric-value">{metrics ? metrics.goldToTokenRatio : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/smart-contract-audit.png" alt="Smart Contract Audit" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Smart Contract Audit</span>
                  <span className="metric-value">{metrics ? metrics.smartContractAudit : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/kyc-compliance.png" alt="KYC/AML Compliance" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">KYC/AML Compliance</span>
                  <span className="metric-value">{metrics ? metrics.kycCompliance : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/blockchain-explorer.png" alt="Blockchain Explorer" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Blockchain Explorer</span>
                  <span className="metric-value"><a href="#">{metrics ? metrics.blockchainExplorer : 'Loading...'}</a></span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/insurance-coverage.png" alt="Insurance Coverage" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Insurance Coverage</span>
                  <span className="metric-value">{metrics ? metrics.insuranceCoverage : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
            </div>
            <div className="visual-placeholder">Compliance Dashboard</div>
          </section>

          {/* 6. IoT-Driven Operational Metrics */}
          <section className="section" aria-labelledby="iot-operational-heading">
            <h2 id="iot-operational-heading">IoT-Driven Operational Metrics</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <img src="/images/ore-grade.png" alt="Ore Grade" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Ore Grade</span>
                  <span className="metric-value">{metrics ? metrics.oreGrade : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/recovery-rate.png" alt="Recovery Rate" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Recovery Rate</span>
                  <span className="metric-value">{metrics ? metrics.recoveryRate : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/tonnes-mined.png" alt="Tonnes Mined/Processed" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Tonnes Mined/Processed</span>
                  <span className="metric-value">{metrics ? metrics.tonnesMined : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/vault-data.png" alt="Real-Time Vault Data" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Real-Time Vault Data</span>
                  <span className="metric-value">{metrics ? metrics.vaultData : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/gps-tracking.png" alt="GPS Tracking" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">GPS Tracking</span>
                  <span className="metric-value">{metrics ? metrics.gpsTracking : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/energy-and-water.png" alt="Energy & Water Consumption" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Energy & Water Consumption</span>
                  <span className="metric-value">{metrics ? metrics.energyWater : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
            </div>
            <div className="visual-placeholder">Live Dashboard with Data Feeds</div>
          </section>

          {/* 7. User Adoption & Growth Metrics */}
          <section className="section" aria-labelledby="user-adoption-heading">
            <h2 id="user-adoption-heading">User Adoption & Growth Metrics</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <img src="/images/total-active-investors.png" alt="Total Active Investors" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Total Active Investors</span>
                  <span className="metric-value">{metrics ? metrics.activeInvestors : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/number-of-wallets-created.png" alt="Number of Wallets Created" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Number of Wallets Created</span>
                  <span className="metric-value">{metrics ? metrics.walletsCreated : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/transaction-volume.png" alt="Transaction Volume & Value" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Transaction Volume & Value</span>
                  <span className="metric-value">{metrics ? metrics.transactionVolumeValue : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/geographic-distribution.png" alt="Investor Geographic Distribution" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Investor Geographic Distribution</span>
                  <span className="metric-value">{metrics ? metrics.geoDistribution : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
            </div>
            <div className="visual-placeholder">Investor Distribution Map</div>
          </section>

          {/* 8. Key Contact Information */}
          <section className="section" aria-labelledby="contact-info-heading">
            <h2 id="contact-info-heading">Key Contact Information</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <img src="/images/investor-relations-contact.png" alt="Investor Relations Contact" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Investor Relations Contact</span>
                  <span className="metric-value">{metrics ? metrics.investorContact : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/audit-report-access.png" alt="Audit Reports Access" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Audit Reports Access</span>
                  <span className="metric-value">
                    <button onClick={handleAuditReports} aria-label="View Audit Reports PDF">View Reports</button>
                  </span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/customer-support.png" alt="Customer Support" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Customer Support</span>
                  <span className="metric-value">{metrics ? metrics.supportContact : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
              <div className="metric-card">
                <img src="/images/escalation-process.png" alt="Escalation Process" className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-label">Escalation Process</span>
                  <span className="metric-value">{metrics ? metrics.escalation : 'Loading...'}</span>
                  <span className="metric-change">N/A</span>
                </div>
              </div>
            </div>
            <div className="visual-placeholder">Support Ticket Dashboard</div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;