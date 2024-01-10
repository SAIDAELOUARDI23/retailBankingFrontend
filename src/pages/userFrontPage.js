import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/userFront.css'; // Make sure to create and import your CSS file

const UserFront = () => {
  const [accountData, setAccountData] = useState({
    savingsAccount: { accountBalance: 0.00 },
    currentAccount: { accountBalance: 0.00 }
  });

  useEffect(() => {
    // Replace with your actual API endpoint
    axios.get('http://localhost:8083/userFront', { withCredentials: true })
      .then(response => {
        setAccountData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the account data:', error);
      });
  }, []);

  return (
    <div className="account-info">
      <div className="account-box">
        <h3>Savings Account</h3>
        <p>Account Number: {accountData.savingsAccount.accountNumber}</p>
        <p>Balance: $ {accountData.savingsAccount.accountBalance.toFixed(2)}</p>
      </div>
      <div className="account-box">
        <h3>Current Account</h3>
        <p>Account Number: {accountData.currentAccount.accountNumber}</p>
        <p>Balance: $ {accountData.currentAccount.accountBalance.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default UserFront;
