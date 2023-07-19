// LoginSignup.js

import React from 'react';
import './loginSignup.css';

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <h3>Login/Signup</h3>
      <form>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default LoginSignup;
