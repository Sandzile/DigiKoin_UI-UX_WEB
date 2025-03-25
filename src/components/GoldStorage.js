
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GoldStorage() {
  const navigate = useNavigate();

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('active');
      }, index * 200);
    });
  }, []);

  return (
    <div className="container">
      <div className="dashboard-grid">
        {/* 1. Gold Production & Processing Data */}
        <section className="section">
          <h2>Gold Production & Processing</h2>
          <div className="metrics-grid">
            <div><strong>Ore Weight Processed:</strong> 500 tons</div>
            <div><strong>Gold Extracted:</strong> 2.5 kg</div>
            <div><strong>Gold Purity Levels:</strong> 99.9%</div>
            <div><strong>Processing Efficiency:</strong> 85%</div>
          </div>
          <div className="visual-placeholder">Processing Throughput Chart</div>
        </section>

        {/* 2. Environmental & Site Conditions */}
        <section className="section">
          <h2>Environmental Conditions</h2>
          <div className="metrics-grid">
            <div><strong>Temperature:</strong> 22°C</div>
            <div><strong>Dust Levels:</strong> 10 µg/m³</div>
            <div><strong>Water Usage:</strong> 1000 L/h</div>
            <div><strong>Water pH:</strong> 7.2</div>
          </div>
          <div className="visual-placeholder">Environmental Trends Graph</div>
        </section>

        {/* 3. Equipment & Machinery Monitoring */}
        <section className="section">
          <h2>Equipment Monitoring</h2>
          <div className="metrics-grid">
            <div><strong>Machine Uptime:</strong> 98%</div>
            <div><strong>Motor RPM:</strong> 1500</div>
            <div><strong>Power Consumption:</strong> 300 kW</div>
            <div><strong>Maintenance Alert:</strong> None</div>
          </div>
          <div className="visual-placeholder">Equipment Status Dashboard</div>
        </section>

        {/* 4. Security & Logistics Tracking */}
        <section className="section">
          <h2>Security & Logistics</h2>
          <div className="metrics-grid">
            <div><strong>Gold Transport:</strong> In Transit (Dubai)</div>
            <div><strong>Perimeter Status:</strong> Secure</div>
            <div><strong>Personnel:</strong> 25 On-Site</div>
          </div>
          <div className="visual-placeholder">Transport Tracking Map</div>
        </section>

        {/* 5. Financial & Market Insight */}
        <section className="section">
          <h2>Financial Insight</h2>
          <div className="metrics-grid">
            <div><strong>Live Gold Price:</strong> $65/g</div>
            <div><strong>Gold Inventory:</strong> 150 kg</div>
            <div><strong>Estimated Revenue:</strong> $9.75M</div>
          </div>
          <div className="visual-placeholder">Market Price Trend</div>
        </section>

        {/* 6. Compliance & Safety Metrics */}
        <section className="section">
          <h2>Compliance & Safety</h2>
          <div className="metrics-grid">
            <div><strong>Safety Alerts:</strong> None</div>
            <div><strong>Emissions:</strong> 50 kg CO2/day</div>
            <div><strong>Compliance Rate:</strong> 100%</div>
          </div>
          <div className="visual-placeholder">Safety Dashboard</div>
        </section>

        {/* 7. Mining Operations Data */}
        <section className="section">
          <h2>Mining Operations</h2>
          <div className="metrics-grid">
            <div><strong>Mining Output:</strong> 0.5 kg/day</div>
            <div><strong>Energy Consumption:</strong> 500 kWh/day</div>
            <div><strong>Carbon Footprint:</strong> 200 kg CO2</div>
          </div>
          <div className="visual-placeholder">Output Trends Graph</div>
        </section>

        {/* 8. Blockchain and Currency Data */}
        <section className="section">
          <h2>Blockchain Data</h2>
          <div className="metrics-grid">
            <div><strong>Currency Supply:</strong> 25M Tokens</div>
            <div><strong>Gold-to-Currency Ratio:</strong> 1 kg = 10,000 Tokens</div>
            <div><strong>Transaction Volume:</strong> $1.8M/day</div>
          </div>
          <div className="visual-placeholder">Transaction Volume Chart</div>
        </section>

        {/* 9. User-Facing Features */}
        <section className="section">
          <h2>User Features</h2>
          <div className="metrics-grid">
            <div><strong>Camera Feeds:</strong> Active</div>
            <div><strong>Notifications:</strong> 2 Active</div>
          </div>
          <div className="visual-placeholder">Historical Data Trends</div>
        </section>
      </div>
    </div>
  );
}

export default GoldStorage;