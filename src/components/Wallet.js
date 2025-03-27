import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Wallet() {
  const [wallet, setWallet] = useState('digikoin');
  const [depositFormVisible, setDepositFormVisible] = useState(false);
  const [withdrawFormVisible, setWithdrawFormVisible] = useState(false);
  const [transferFormVisible, setTransferFormVisible] = useState(false);
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [transferSource, setTransferSource] = useState('');
  const [transferDest, setTransferDest] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [depositConfirmation, setDepositConfirmation] = useState('');
  const [withdrawConfirmation, setWithdrawConfirmation] = useState('');
  const [transferConfirmation, setTransferConfirmation] = useState('');
  const [error, setError] = useState('');
  const [walletBalances, setWalletBalances] = useState({
    digikoin: '100 DGK',
    btc: '0.5 BTC',
    eth: '2 ETH',
    usdt: '500 USDT',
  });
  const [balanceDisplay, setBalanceDisplay] = useState('Balance: 100 DGK');
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll('.current-balance, .wallet-section, .transaction-history');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('active');
      }, index * 200);
    });

    const hash = location.hash.replace('#', '');
    if (hash === 'transfer') setTransferFormVisible(true);
    else if (hash === 'withdraw') setWithdrawFormVisible(true);
  }, [location]);

  useEffect(() => {
    updateBalance();
  }, [wallet, walletBalances]);

  const updateBalance = () => {
    if (wallet && walletBalances[wallet]) {
      setBalanceDisplay(`Balance: ${walletBalances[wallet]}`);
    } else {
      setBalanceDisplay('Please select a wallet to view balance.');
    }
  };

  const parseBalance = (balanceString) => {
    const match = balanceString.match(/([\d.]+)/);
    return match ? parseFloat(match[0]) : 0;
  };

  const updateBalanceString = (balanceString, delta) => {
    const value = parseBalance(balanceString);
    const unit = balanceString.replace(/[\d.]+/, '').trim();
    const newValue = value + delta;
    return newValue > 0 ? `${newValue} ${unit}` : `0 ${unit}`;
  };

  const showDepositForm = () => {
    setDepositFormVisible(true);
    setWithdrawFormVisible(false);
    setTransferFormVisible(false);
    setDepositConfirmation('');
    setError('');
  };

  const showWithdrawForm = () => {
    setDepositFormVisible(false);
    setWithdrawFormVisible(true);
    setTransferFormVisible(false);
    setWithdrawConfirmation('');
    setError('');
  };

  const showTransferForm = () => {
    setDepositFormVisible(false);
    setWithdrawFormVisible(false);
    setTransferFormVisible(true);
    setTransferConfirmation('');
    setError('');
  };

  const deposit = () => {
    if (!wallet || !depositAmount) {
      setError('Please select a wallet and enter an amount.');
      return;
    }
    const amount = parseFloat(depositAmount);
    if (isNaN(amount) || amount <= 0) {
      setError('Please enter a valid amount.');
      return;
    }
    setError('');
    const newBalances = { ...walletBalances };
    newBalances[wallet] = updateBalanceString(newBalances[wallet], amount);
    setWalletBalances(newBalances);
    setDepositConfirmation(`Deposited ${amount} to ${wallet} wallet. Transaction completed!`);
    setDepositAmount('');
    setTimeout(() => {
      setDepositConfirmation('');
      setDepositFormVisible(false);
    }, 3000);
  };

  const withdraw = () => {
    if (!wallet || !withdrawAmount) {
      setError('Please select a wallet and enter an amount.');
      return;
    }
    const amount = parseFloat(withdrawAmount);
    if (isNaN(amount) || amount <= 0) {
      setError('Please enter a valid amount.');
      return;
    }
    const currentBalance = parseBalance(walletBalances[wallet]);
    if (currentBalance < amount) {
      setError('Insufficient balance in wallet.');
      return;
    }
    setError('');
    const newBalances = { ...walletBalances };
    newBalances[wallet] = updateBalanceString(newBalances[wallet], -amount);
    setWalletBalances(newBalances);
    setWithdrawConfirmation(`Withdrawn ${amount} from ${wallet} wallet. Transaction completed!`);
    setWithdrawAmount('');
    setTimeout(() => {
      setWithdrawConfirmation('');
      setWithdrawFormVisible(false);
    }, 3000);
  };

  const transfer = () => {
    if (!transferSource || !transferDest || !transferAmount) {
      setError('Please fill in all fields.');
      return;
    }
    if (transferSource === transferDest) {
      setError('Source and destination wallets cannot be the same.');
      return;
    }
    const amount = parseFloat(transferAmount);
    if (isNaN(amount) || amount <= 0) {
      setError('Please enter a valid amount.');
      return;
    }
    const sourceBalance = parseBalance(walletBalances[transferSource]);
    if (sourceBalance < amount) {
      setError('Insufficient balance in source wallet.');
      return;
    }
    setError('');
    const newBalances = { ...walletBalances };
    newBalances[transferSource] = updateBalanceString(newBalances[transferSource], -amount);
    newBalances[transferDest] = updateBalanceString(newBalances[transferDest], amount);
    setWalletBalances(newBalances);
    setTransferConfirmation(`Transferred ${amount} from ${transferSource} to ${transferDest}. Transaction completed!`);
    setTransferSource('');
    setTransferDest('');
    setTransferAmount('');
    setTimeout(() => {
      setTransferConfirmation('');
      setTransferFormVisible(false);
    }, 3000);
  };

  return (
    <div className="container">
      <div className="wallet-grid">
        <div className="current-balance" role="region" aria-labelledby="balance-heading">
          <img src="/images/DGK.png" alt="DigiKoin Emblem" className="balance-emblem" />
          <h2 id="balance-heading">Current Balance</h2>
          <div id="current-balance-display">{balanceDisplay}</div>
        </div>

        {/* Wallet Section */}
        <div className="wallet-section" role="region" aria-labelledby="wallet-heading">
          <h2 id="wallet-heading">Wallet</h2>
          <label htmlFor="wallet">Choose Wallet:</label>
          <select
            id="wallet"
            value={wallet}
            onChange={(e) => {
              setWallet(e.target.value);
            }}
            required
          >
            <option value="" disabled>Select a wallet</option>
            <option value="digikoin">DigiKoin</option>
            <option value="btc">BTC</option>
            <option value="eth">ETH</option>
            <option value="usdt">USDT</option>
          </select>

          <div className="wallet-actions">
            <button onClick={showDepositForm} aria-label="Deposit to Wallet">Deposit</button>
            <button onClick={showWithdrawForm} aria-label="Withdraw from Wallet">Withdraw</button>
            <button onClick={showTransferForm} aria-label="Transfer between Wallets">Transfer</button>
          </div>

          {/* Error Display */}
          {error && <p className="error" id="wallet-error">{error}</p>}

          {/* Deposit Form */}
          <div id="deposit-form" style={{ display: depositFormVisible ? 'block' : 'none', marginTop: '20px' }}>
            <label htmlFor="deposit-amount">Deposit Amount:</label>
            <input
              type="text"
              id="deposit-amount"
              placeholder="Enter amount"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              required
              aria-describedby={error ? 'wallet-error' : undefined}
            />
            <button onClick={deposit}>Confirm Deposit</button>
            <div id="deposit-confirmation">{depositConfirmation}</div>
          </div>

          {/* Withdraw Form */}
          <div id="withdraw-form" style={{ display: withdrawFormVisible ? 'block' : 'none', marginTop: '20px' }}>
            <label htmlFor="withdraw-amount">Withdraw Amount:</label>
            <input
              type="text"
              id="withdraw-amount"
              placeholder="Enter amount"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              required
              aria-describedby={error ? 'wallet-error' : undefined}
            />
            <button onClick={withdraw}>Confirm Withdrawal</button>
            <div id="withdraw-confirmation">{withdrawConfirmation}</div>
          </div>

          {/* Transfer Form */}
          <div id="transfer-form" style={{ display: transferFormVisible ? 'block' : 'none', marginTop: '20px' }}>
            <label htmlFor="source-wallet">From:</label>
            <select
              id="source-wallet"
              value={transferSource}
              onChange={(e) => setTransferSource(e.target.value)}
              required
            >
              <option value="" disabled>Select source wallet</option>
              <option value="digikoin">DigiKoin</option>
              <option value="btc">BTC</option>
              <option value="eth">ETH</option>
              <option value="usdt">USDT</option>
            </select>
            <label htmlFor="dest-wallet">To:</label>
            <select
              id="dest-wallet"
              value={transferDest}
              onChange={(e) => setTransferDest(e.target.value)}
              required
            >
              <option value="" disabled>Select destination wallet</option>
              <option value="digikoin">DigiKoin</option>
              <option value="btc">BTC</option>
              <option value="eth">ETH</option>
              <option value="usdt">USDT</option>
            </select>
            <label htmlFor="transfer-amount">Amount:</label>
            <input
              type="text"
              id="transfer-amount"
              placeholder="Enter amount"
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
              required
              aria-describedby={error ? 'wallet-error' : undefined}
            />
            <button onClick={transfer}>Confirm Transfer</button>
            <div id="transfer-confirmation">{transferConfirmation}</div>
          </div>
        </div>
      </div>

      {/* Transaction History Section */}
      <div className="transaction-history" role="region" aria-labelledby="history-heading">
        <h2 id="history-heading">Transaction History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-02-10</td>
              <td>Deposit</td>
              <td>1 BTC</td>
              <td><span className="status confirmed">Confirmed</span></td>
            </tr>
            <tr>
              <td>2025-02-09</td>
              <td>Withdraw</td>
              <td>0.5 ETH</td>
              <td><span className="status pending">Pending</span></td>
            </tr>
            <tr>
              <td>2025-02-08</td>
              <td>Deposit</td>
              <td>100 USDT</td>
              <td><span className="status failed">Failed</span></td>
            </tr>
            <tr>
              <td>2025-02-07</td>
              <td>Deposit</td>
              <td>2 BTC</td>
              <td><span className="status confirmed">Confirmed</span></td>
            </tr>
            <tr>
              <td>2025-02-06</td>
              <td>Transfer</td>
              <td>1 ETH</td>
              <td><span className="status pending">Pending</span></td>
            </tr>
            <tr>
              <td>2025-02-05</td>
              <td>Deposit</td>
              <td>200 USDT</td>
              <td><span className="status failed">Failed</span></td>
            </tr>
            <tr>
              <td>2025-02-04</td>
              <td>Transfer</td>
              <td>0.3 BTC</td>
              <td><span className="status confirmed">Confirmed</span></td>
            </tr>
            <tr>
              <td>2025-02-03</td>
              <td>Withdraw</td>
              <td>0.2 ETH</td>
              <td><span className="status pending">Pending</span></td>
            </tr>
            <tr>
              <td>2025-02-02</td>
              <td>Deposit</td>
              <td>50 USDT</td>
              <td><span className="status confirmed">Confirmed</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Wallet;