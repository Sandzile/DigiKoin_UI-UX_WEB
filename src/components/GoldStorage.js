import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GoldStorage() {
  const navigate = useNavigate();
  const [metrics, setMetrics] = useState(null); // Added for dynamic data

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setMetrics({
        oreProcessed: '500 tons',
        goldExtracted: '2.5 kg',
        goldPurity: '99.9%',
        processingEfficiency: '85%',
        temperature: '22°C',
        dustLevels: '10 µg/m³',
        waterUsage: '1000 L/h',
        waterPH: '7.2',
        machineUptime: '98%',
        motorRPM: '1500',
        powerConsumption: '300 kW',
        maintenanceAlert: 'None',
        goldTransport: 'In Transit (Dubai)',
        perimeterStatus: 'Secure',
        personnel: '25 On-Site',
        goldPrice: '$65/g',
        goldInventory: '150 kg',
        estimatedRevenue: '$9.75M',
        safetyAlerts: 'None',
        emissions: '50 kg CO2/day',
        complianceRate: '100%',
        miningOutput: '0.5 kg/day',
        energyConsumption: '500 kWh/day',
        carbonFootprint: '200 kg CO2',
        currencySupply: '25M Tokens',
        goldToCurrencyRatio: '1 kg = 10,000 Tokens',
        transactionVolume: '$1.8M/day',
        cameraFeeds: 'Active',
        notifications: '2 Active',
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

  const handleViewWallet = () => navigate('/wallet');

  return (
    <div className="container">
      <div className="dashboard-grid">
        {/* 1. Gold Production & Processing Data */}
        <section className="section" aria-labelledby="production-heading">
          <h2 id="production-heading">Gold Production & Processing</h2>
          <div className="metrics-grid">
            <div><strong>Ore Weight Processed:</strong> {metrics ? metrics.oreProcessed : 'Loading...'}</div>
            <div><strong>Gold Extracted:</strong> {metrics ? metrics.goldExtracted : 'Loading...'}</div>
            <div><strong>Gold Purity Levels:</strong> {metrics ? metrics.goldPurity : 'Loading...'}</div>
            <div><strong>Processing Efficiency:</strong> {metrics ? metrics.processingEfficiency : 'Loading...'}</div>
          </div>
          <div className="visual-placeholder">Processing Throughput Chart</div>
        </section>

        {/* 2. Environmental & Site Conditions */}
        <section className="section" aria-labelledby="environmental-heading">
          <h2 id="environmental-heading">Environmental Conditions</h2>
          <div className="metrics-grid">
            <div><strong>Temperature:</strong> {metrics ? metrics.temperature : 'Loading...'}</div>
            <div><strong>Dust Levels:</strong> {metrics ? metrics.dustLevels : 'Loading...'}</div>
            <div><strong>Water Usage:</strong> {metrics ? metrics.waterUsage : 'Loading...'}</div>
            <div><strong>Water pH:</strong> {metrics ? metrics.waterPH : 'Loading...'}</div>
          </div>
          <div className="visual-placeholder">Environmental Trends Graph</div>
        </section>

        {/* 3. Equipment & Machinery Monitoring */}
        <section className="section" aria-labelledby="equipment-heading">
          <h2 id="equipment-heading">Equipment Monitoring</h2>
          <div className="metrics-grid">
            <div><strong>Machine Uptime:</strong> {metrics ? metrics.machineUptime : 'Loading...'}</div>
            <div><strong>Motor RPM:</strong> {metrics ? metrics.motorRPM : 'Loading...'}</div>
            <div><strong>Power Consumption:</strong> {metrics ? metrics.powerConsumption : 'Loading...'}</div>
            <div><strong>Maintenance Alert:</strong> {metrics ? metrics.maintenanceAlert : 'Loading...'}</div>
          </div>
          <div className="visual-placeholder">Equipment Status Dashboard</div>
        </section>

        {/* 4. Security & Logistics Tracking */}
        <section className="section" aria-labelledby="security-heading">
          <h2 id="security-heading">Security & Logistics</h2>
          <div className="metrics-grid">
            <div><strong>Gold Transport:</strong> {metrics ? metrics.goldTransport : 'Loading...'}</div>
            <div><strong>Perimeter Status:</strong> {metrics ? metrics.perimeterStatus : 'Loading...'}</div>
            <div><strong>Personnel:</strong> {metrics ? metrics.personnel : 'Loading...'}</div>
          </div>
          <div className="visual-placeholder">Transport Tracking Map</div>
        </section>

        {/* 5. Financial & Market Insight */}
        <section className="section" aria-labelledby="financial-heading">
          <h2 id="financial-heading">Financial Insight</h2>
          <div className="metrics-grid">
            <div><strong>Live Gold Price:</strong> {metrics ? metrics.goldPrice : 'Loading...'}</div>
            <div><strong>Gold Inventory:</strong> {metrics ? metrics.goldInventory : 'Loading...'}</div>
            <div><strong>Estimated Revenue:</strong> {metrics ? metrics.estimatedRevenue : 'Loading...'}</div>
          </div>
          <div className="visual-placeholder">Market Price Trend</div>
        </section>

        {/* 6. Compliance & Safety Metrics */}
        <section className="section" aria-labelledby="compliance-heading">
          <h2 id="compliance-heading">Compliance & Safety</h2>
          <div className="metrics-grid">
            <div><strong>Safety Alerts:</strong> {metrics ? metrics.safetyAlerts : 'Loading...'}</div>
            <div><strong>Emissions:</strong> {metrics ? metrics.emissions : 'Loading...'}</div>
            <div><strong>Compliance Rate:</strong> {metrics ? metrics.complianceRate : 'Loading...'}</div>
          </div>
          <div className="visual-placeholder">Safety Dashboard</div>
        </section>

        {/* 7. Mining Operations Data */}
        <section className="section" aria-labelledby="mining-heading">
          <h2 id="mining-heading">Mining Operations</h2>
          <div className="metrics-grid">
            <div><strong>Mining Output:</strong> {metrics ? metrics.miningOutput : 'Loading...'}</div>
            <div><strong>Energy Consumption:</strong> {metrics ? metrics.energyConsumption : 'Loading...'}</div>
            <div><strong>Carbon Footprint:</strong> {metrics ? metrics.carbonFootprint : 'Loading...'}</div>
          </div>
          <div className="visual-placeholder">Output Trends Graph</div>
        </section>

        {/* 8. Blockchain and Currency Data */}
        <section className="section" aria-labelledby="blockchain-heading">
          <h2 id="blockchain-heading">Blockchain Data</h2>
          <div className="metrics-grid">
            <div><strong>Currency Supply:</strong> {metrics ? metrics.currencySupply : 'Loading...'}</div>
            <div><strong>Gold-to-Currency Ratio:</strong> {metrics ? metrics.goldToCurrencyRatio : 'Loading...'}</div>
            <div><strong>Transaction Volume:</strong> {metrics ? metrics.transactionVolume : 'Loading...'}</div>
          </div>
          <div className="visual-placeholder">Transaction Volume Chart</div>
        </section>

        {/* 9. User-Facing Features */}
        <section className="section" aria-labelledby="user-features-heading">
          <h2 id="user-features-heading">User Features</h2>
          <div className="metrics-grid">
            <div><strong>Camera Feeds:</strong> {metrics ? metrics.cameraFeeds : 'Loading...'}</div>
            <div><strong>Notifications:</strong> {metrics ? metrics.notifications : 'Loading...'}</div>
          </div>
          <div className="visual-placeholder">Historical Data Trends</div>
          <button onClick={handleViewWallet} aria-label="View Wallet Balances">View Wallet</button>
        </section>
      </div>
    </div>
  );
}

export default GoldStorage;