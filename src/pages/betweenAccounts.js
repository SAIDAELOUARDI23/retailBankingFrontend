import React, { useState } from 'react';
import axios from 'axios';

const TransferPage = () => {
    const [transferData, setTransferData] = useState({
        transferFrom: '',
        transferTo: '',
        amount: 0
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTransferData({ ...transferData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8083/transfer/betweenAccounts', transferData, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        })
        .then(response => {
            console.log('Success:', response.data);
            // Handle successful response
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Error:', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Error:', error.message);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error:', error.message);
            }
        });
    };

    return (
        <div>
            <h1>Transfer Between Accounts</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        1. Please select the account you would like to transfer From:
                        <select name="transferFrom" value={transferData.transferFrom} onChange={handleInputChange}>
                            <option value="">Select Account</option>
                            <option value="Current">Current</option>
                            <option value="Savings">Savings</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        2. Please select the account you would like to transfer To:
                        <select name="transferTo" value={transferData.transferTo} onChange={handleInputChange}>
                            <option value="">Select Account</option>
                            <option value="Current">Current</option>
                            <option value="Savings">Savings</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        3. Please specify the amount you would like to transfer:
                        <input
                            type="number"
                            name="amount"
                            value={transferData.amount}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <button type="submit">Transfer</button>
            </form>
        </div>
    );
};

export default TransferPage;
