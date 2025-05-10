import React, { useState } from 'react';
import axios from 'axios';
import './CustomerForm.css'; 
const CustomerForm = () => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:7079/api/customers', { name, contact });
            setResponseMessage(response.data || 'Customer registered successfully!');
        } catch (error) {
            setResponseMessage('Error registering customer. Please try again.');
        }
    };

    return (
        <div className="customer-form-container">
            <h2>Register Customer</h2>
            <form onSubmit={handleSubmit} className="customer-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Contact:</label>
                    <input
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Register</button>
            </form>
            {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>
    );
};

export default CustomerForm;
