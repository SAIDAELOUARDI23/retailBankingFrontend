import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8083/user/profile', { withCredentials: true })
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <p><strong>Username:</strong> {userData.username}</p>
            <p><strong>First Name:</strong> {userData.firstName}</p>
            <p><strong>Last Name:</strong> {userData.lastName}</p>
            <p><strong>Aadhaar ID:</strong> {userData.aadhaarId}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Phone:</strong> {userData.phone}</p>
            <p><strong>Current Account Number:</strong> {userData.currentAccount.accountNumber}</p>
            <p><strong>Current Account Balance:</strong> $ {userData.currentAccount.accountBalance.toFixed(2)}</p>
            <p><strong>Savings Account Number:</strong> {userData.savingsAccount.accountNumber}</p>
            <p><strong>Savings Account Balance:</strong> $ {userData.savingsAccount.accountBalance.toFixed(2)}</p>
        </div>
    );
};

export default UserProfile;
