
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    // Animate sections sequentially on page load
    const sections = document.querySelectorAll('.total-balance, .live-gold-chart, .quick-actions, .recent-transactions');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('active');
      }, index * 200); 
    });
  }, []);

  return (
    <div className="container">
      {/* Total Balance Section */}
      <div className="total-balance">
        <h2>Total Balance</h2>
        <div className="balance-details">
          <p><strong>Gold Holdings:</strong> 100 grams</p>
          <p><strong>Equivalent USD Value:</strong> $5000</p>
        </div>
      </div>

      {/* Live Gold Price Chart Section */}
      <div className="live-gold-chart">
        <h2>Live Gold Price Chart</h2>
        <p>Real-time gold price data goes here.</p>
      </div>

      {/* Quick Actions Section */}
      <div className="quick-actions">
        <button onClick={() => navigate('/buy-sell#buy')}>Buy Token</button>
        <button onClick={() => navigate('/buy-sell#sell')}>Sell Token</button>
        <button onClick={() => navigate('/wallet#transfer')}>Transfer Token</button>
        <button onClick={() => navigate('/wallet#withdraw')}>Withdraw Token</button>
      </div>

      {/* Recent Transactions Section */}
      <div className="recent-transactions">
        <h2>Recent Transactions</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-02-10</td>
              <td>Buy</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>2025-02-09</td>
              <td>Sell</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>2025-02-08</td>
              <td>Transfer</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;