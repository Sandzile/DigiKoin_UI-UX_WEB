
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

  const updateBalance = () => {
    console.log('Updating balance for wallet:', wallet);
    if (wallet && walletBalances[wallet]) {
      setBalanceDisplay(`Balance: ${walletBalances[wallet]}`);
      console.log('New balance display:', `Balance: ${walletBalances[wallet]}`);
    } else {
      setBalanceDisplay('Please select a wallet to view balance.');
      console.log('Fallback message displayed');
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
  };

  const showWithdrawForm = () => {
    setDepositFormVisible(false);
    setWithdrawFormVisible(true);
    setTransferFormVisible(false);
    setWithdrawConfirmation('');
  };

  const showTransferForm = () => {
    setDepositFormVisible(false);
    setWithdrawFormVisible(false);
    setTransferFormVisible(true);
    setTransferConfirmation('');
  };

  const deposit = () => {
    if (!wallet || !depositAmount) {
      setDepositConfirmation('Please select a wallet and enter an amount.');
      return;
    }
    const amount = parseFloat(depositAmount);
    if (isNaN(amount) || amount <= 0) {
      setDepositConfirmation('Please enter a valid amount.');
      return;
    }
    const newBalances = { ...walletBalances };
    newBalances[wallet] = updateBalanceString(newBalances[wallet], amount);
    setWalletBalances(newBalances);
    setDepositConfirmation(`Deposited ${amount} to ${wallet} wallet. Transaction completed!`);
    setDepositAmount('');
    setTimeout(() => {
      setDepositConfirmation('');
      setDepositFormVisible(false);
    }, 3000);
    updateBalance();
  };

  const withdraw = () => {
    if (!wallet || !withdrawAmount) {
      setWithdrawConfirmation('Please select a wallet and enter an amount.');
      return;
    }
    const amount = parseFloat(withdrawAmount);
    if (isNaN(amount) || amount <= 0) {
      setWithdrawConfirmation('Please enter a valid amount.');
      return;
    }
    const currentBalance = parseBalance(walletBalances[wallet]);
    if (currentBalance < amount) {
      setWithdrawConfirmation('Insufficient balance in wallet.');
      return;
    }
    const newBalances = { ...walletBalances };
    newBalances[wallet] = updateBalanceString(newBalances[wallet], -amount);
    setWalletBalances(newBalances);
    setWithdrawConfirmation(`Withdrawn ${amount} from ${wallet} wallet. Transaction completed!`);
    setWithdrawAmount('');
    setTimeout(() => {
      setWithdrawConfirmation('');
      setWithdrawFormVisible(false);
    }, 3000);
    updateBalance();
  };

  const transfer = () => {
    if (!transferSource || !transferDest || !transferAmount) {
      setTransferConfirmation('Please fill in all fields.');
      return;
    }
    if (transferSource === transferDest) {
      setTransferConfirmation('Source and destination wallets cannot be the same.');
      return;
    }
    const amount = parseFloat(transferAmount);
    if (isNaN(amount) || amount <= 0) {
      setTransferConfirmation('Please enter a valid amount.');
      return;
    }
    const sourceBalance = parseBalance(walletBalances[transferSource]);
    if (sourceBalance < amount) {
      setTransferConfirmation('Insufficient balance in source wallet.');
      return;
    }
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
    updateBalance();
  };

  return (
    <div className="container">
      <div className="wallet-grid">
        <div className="current-balance">
          <img src="/images/DGK.png" alt="DigiKoin Emblem" className="balance-emblem" />
          <h2>Current Balance</h2>
          <div id="current-balance-display">{balanceDisplay}</div>
        </div>

        {/* Wallet Section */}
        <div className="wallet-section">
          <h2>Wallet</h2>
          <label htmlFor="wallet">Choose Wallet:</label>
          <select
            id="wallet"
            value={wallet}
            onChange={(e) => {
              setWallet(e.target.value);
              updateBalance();
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
            <button onClick={showDepositForm}>Deposit</button>
            <button onClick={showWithdrawForm}>Withdraw</button>
            <button onClick={showTransferForm}>Transfer</button>
          </div>

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
            />
            <button onClick={transfer}>Confirm Transfer</button>
            <div id="transfer-confirmation">{transferConfirmation}</div>
          </div>
        </div>
      </div>

      {/* Transaction History Section (Full Width Below) */}
      <div className="transaction-history">
        <h2>Transaction History</h2>
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