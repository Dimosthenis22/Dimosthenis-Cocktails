import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        {/* Place your logo here */}
        <Link to='/'>Logo</Link>
      </div>
      <ul className='nav-links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/recipes'>Recipes</Link>
        </li>
        <li>
          <Link to='/favorites'>Favorites</Link>
        </li>
        <li>
          <Link to='/login'>Login/Signup</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
