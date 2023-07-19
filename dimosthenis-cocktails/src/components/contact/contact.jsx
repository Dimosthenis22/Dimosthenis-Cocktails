// Contact.js

import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <h3>Contact Us</h3>
      <form>
        <input type='text' placeholder='Your Name' />
        <input type='email' placeholder='Your Email' />
        <textarea placeholder='Your Message'></textarea>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default Contact;
