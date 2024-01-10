import React, { useState, useEffect } from 'react';
import Header from './Header';
import '../css/savingsAccount.css'; // Make sure to create and import your CSS styles for SavingsAccount

function SavingsAccount() {

  const [savingsData, setSavingsData] = useState({
    savingsTransactionList: [],
    savingsAccount: { accountNumber: '', accountBalance: 0 },
  });

  useEffect(() => {
    // Replace with your actual endpoint
    fetch('http://localhost:8083/account/savingsAccount')
      .then((response) => response.json())
      .then((data) => {
        setSavingsData(data);
      })
      .catch((error) => {
        console.error('Error fetching savings account data:', error);
      });
  }, []);

  return (
    
    <div>
      <Header />
    <div className="savings-account">
      
      {/* Header and navigation omitted for brevity */}

      <div className="balance-section savings">
        <h2>Savings Balance:</h2>
        <p className="balance-amount">$ {savingsData.savingsAccount.accountBalance.toFixed(2)}</p>
      </div>
      
      <div className="transactions-table">
        <input type="text" placeholder="Search..." className="search-box" />
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Type</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Available Balance</th>
            </tr>
          </thead>
          <tbody>
            {savingsData.savingsTransactionList.map((transaction, index) => (
              <tr key={index}>
                <td>{/* Transaction date */}</td>
                <td>{/* Transaction description */}</td>
                <td>{/* Transaction type */}</td>
                <td>{/* Transaction status */}</td>
                <td>{transaction.amount}</td>
                <td>{/* Available balance after this transaction */}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default SavingsAccount;
