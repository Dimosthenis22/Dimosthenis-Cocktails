// Footer.js

import React from 'react';
import Contact from '../contact/contact';
import LoginSignup from '../login-signup/loginSignup';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer-content'>
        <Contact />
        <LoginSignup />
      </div>
      <div className='footer-bottom'>
        {/* Add your footer content here */}
        <p>
          &copy; {new Date().getFullYear()} Your Website Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
