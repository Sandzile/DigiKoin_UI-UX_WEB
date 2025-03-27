import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function BuySell() {
  const [activeTab, setActiveTab] = useState('buy');
  const [buyAmount, setBuyAmount] = useState('');
  const [buyMethod, setBuyMethod] = useState('');
  const [sellAmount, setSellAmount] = useState('');
  const [sellMethod, setSellMethod] = useState('');
  const [buyConfirmation, setBuyConfirmation] = useState('');
  const [sellConfirmation, setSellConfirmation] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Set initial tab based on URL hash
    const hash = location.hash.replace('#', '');
    if (hash === 'sell') {
      setActiveTab('sell');
    } else {
      setActiveTab('buy');
    }
  }, [location]);

  const showTab = (tabId) => {
    setActiveTab(tabId);
    window.location.hash = tabId;
    setBuyConfirmation('');
    setSellConfirmation('');
    setError('');
  };

  const buyGold = () => {
    if (!buyAmount || !buyMethod) {
      setError('Please fill in all fields.');
      return;
    }
    if (isNaN(buyAmount) || buyAmount <= 0) {
      setError('Please enter a valid amount.');
      return;
    }
    setError('');
    setBuyConfirmation(`Purchased ${buyAmount} using ${buyMethod}. Transaction pending...`);
    setTimeout(() => {
      setBuyConfirmation(`Purchased ${buyAmount} using ${buyMethod}. Completed!`);
    }, 1000); 
  };

  const sellGold = () => {
    if (!sellAmount || !sellMethod) {
      setError('Please fill in all fields.');
      return;
    }
    if (isNaN(sellAmount) || sellAmount <= 0) {
      setError('Please enter a valid amount.');
      return;
    }
    setError('');
    setSellConfirmation(`Sold ${sellAmount} to ${sellMethod}. Transaction pending...`);
    setTimeout(() => {
      setSellConfirmation(`Sold ${sellAmount} to ${sellMethod}. Completed!`);
    }, 1000);
  };

  return (
    <div className="container">
      <div className="tab-buttons">
        <button 
          onClick={() => showTab('buy')} 
          aria-controls="buy" 
          aria-selected={activeTab === 'buy'}
        >
          Buy
        </button>
        <button 
          onClick={() => showTab('sell')} 
          aria-controls="sell" 
          aria-selected={activeTab === 'sell'}
        >
          Sell
        </button>
      </div>

      {/* Buy Gold Tab */}
      <div 
        id="buy" 
        className={`tab ${activeTab === 'buy' ? 'active' : ''}`} 
        role="tabpanel" 
        aria-labelledby="buy-tab"
      >
        <h2>Buy Token</h2>
        {error && <p className="error" id="buy-error">{error}</p>}
        <label htmlFor="buy-amount">Enter Amount (grams or USD):</label>
        <input
          type="text"
          id="buy-amount"
          placeholder="Amount"
          value={buyAmount}
          onChange={(e) => setBuyAmount(e.target.value)}
          required
          aria-describedby={error ? 'buy-error' : undefined}
        />
        <label htmlFor="buy-method">Choose Payment Method:</label>
        <select
          id="buy-method"
          value={buyMethod}
          onChange={(e) => setBuyMethod(e.target.value)}
          required
        >
          <option value="" disabled>Select a method</option>
          <option value="crypto">Crypto</option>
          <option value="bank-transfer">Bank Transfer</option>
          <option value="usdt">USDT</option>
        </select>
        <button onClick={buyGold}>Confirm Purchase</button>
        <div className="confirmation" id="buy-confirmation">{buyConfirmation}</div>
      </div>

      {/* Sell Gold Tab */}
      <div 
        id="sell" 
        className={`tab ${activeTab === 'sell' ? 'active' : ''}`} 
        role="tabpanel" 
        aria-labelledby="sell-tab"
      >
        <h2>Sell Token</h2>
        {error && <p className="error" id="sell-error">{error}</p>}
        <label htmlFor="sell-amount">Select Amount (grams/tokens):</label>
        <input
          type="text"
          id="sell-amount"
          placeholder="Amount"
          value={sellAmount}
          onChange={(e) => setSellAmount(e.target.value)}
          required
          aria-describedby={error ? 'sell-error' : undefined}
        />
        <label htmlFor="sell-method">Choose Payout Method:</label>
        <select
          id="sell-method"
          value={sellMethod}
          onChange={(e) => setSellMethod(e.target.value)}
          required
        >
          <option value="" disabled>Select a method</option>
          <option value="bank">Bank</option>
          <option value="usdt">USDT</option>
          <option value="digikoin-wallet">DigiKoin Wallet</option>
        </select>
        <button onClick={sellGold}>Confirm Sale</button>
        <div className="confirmation" id="sell-confirmation">{sellConfirmation}</div>
      </div>
    </div>
  );
}

export default BuySell;