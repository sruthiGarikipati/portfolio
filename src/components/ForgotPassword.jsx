
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
import { db } from '../Firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { FaEnvelope } from "react-icons/fa";


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('A password reset link has been sent to your email.');
    } catch (err) {
      console.error('Error sending password reset email:', err);
      setError('An error occurred while sending the reset link.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper forgot-password">
      <form onSubmit={handleSubmit}>
        <h1>Forgot Password</h1>
        <div className="input-box">
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <FaEnvelope className="icon" />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        {message && <p className="message success">{message}</p>}
        {error && <p className="message error">{error}</p>}
        <button 
          type="button" 
          onClick={() => navigate('/login')} 
          disabled={loading}
        >
          Back to Login
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
