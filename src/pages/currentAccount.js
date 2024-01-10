import React, { useState, useEffect } from 'react';
import Header from './Header';
import '../css/currentAccount.css'; // Make sure to create and import your CSS styles

function CurrentAccount() {

  const [accountData, setAccountData] = useState({
    currentTransactionList: [],
    currentAccount: { accountNumber: '', accountBalance: 0 },
  });

  useEffect(() => {
    fetch('http://localhost:8083/account/currentAccount')
      .then((response) => response.json())
      .then((data) => {
        console.log('Received data:', data);
        setAccountData(data);
      })
      .catch((error) => {
        console.error('Error fetching account data:', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="balance-block">
        <h2>Current Balance:</h2>
        <span className="balance">$ {accountData.currentAccount.accountBalance.toFixed(2)}</span>
      </div>
      <div className="transactions-section">
        <input type="text" placeholder="Search..." className="search-box" />
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Post Date</th>
              <th>Description</th>
              <th>Type</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Available Balance</th>
            </tr>
          </thead>
          <tbody>
            {accountData.currentTransactionList.map((transaction, index) => (
              <tr key={index}>
                {/* Populate table with actual transaction data */}
              </tr>
            ))}
          </tbody>
        </table>
        {accountData.currentTransactionList.length === 0 && (
          <div className="no-transactions">No data available in table</div>
        )}
      </div>
    </div>
  );
};

export default CurrentAccount;
