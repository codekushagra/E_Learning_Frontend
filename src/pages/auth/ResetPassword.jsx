import React, { useState } from 'react';
import './auth.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { server } from '../../main';
import axios from 'axios';
import toast from 'react-hot-toast';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error('Passwords do not match');
    }

    if (password.length < 6) {
      return toast.error('Password must be at least 6 characters');
    }

    setBtnLoading(true);

    try {
      const { data } = await axios.post(`${server}/api/user/reset-password/${token}`, { password });
      toast.success(data.message);
      setBtnLoading(false);
      navigate('/login');
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h2>Reset Password</h2>
          <p className="auth-subtitle">Enter your new password</p>
          
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter new password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm new password"
              />
            </div>

            <button type="submit" disabled={btnLoading} className="common-btn">
              {btnLoading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Remember your password? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
