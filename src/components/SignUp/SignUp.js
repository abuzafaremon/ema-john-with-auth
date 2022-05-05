import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = event => {
    setEmail(event.target.value)
  }
  const handlePasswordBlur = event => {
    setPassword(event.target.value)
  }
  const handleConfirmPasswordBlur = event => {
    setConfirmPassword(event.target.value)
  }

  const handleCreateUser = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your password did'n match");
      return;
    }
    if (password.length < 6) {
      setError('Password must be 6 character or longer');
      return;
    }
    createUserWithEmailAndPassword(email, password);
  }

  if (user) {
    navigate('/shop');
  }
  if (loading) {
    return <p style={{ 'text-align': 'center', 'font-size': '20px' }}>Loading...</p>
  }

  return (
    <div className='form-container'>
      <div>
        <h2 className='form-title'>Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="confirm-password" required />
          </div>
          <p style={{ color: 'red' }}>{error}</p>
          <input className='form-submit' type="submit" value="Sign Up" />
        </form>
        <p>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
        <div className='divider-container'>
          <div className='divider'></div>
          <h5>Or</h5>
          <div className='divider'></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;