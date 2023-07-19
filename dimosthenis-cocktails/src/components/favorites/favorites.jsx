// Favorites.js

import React from 'react';
import './favorites.css';

const Favorites = () => {
  return (
    <div className='favorites'>
      <h3>Favorites</h3>
      <ul>
        <li>Favorite Cocktail 1</li>
        <li>Favorite Cocktail 2</li>
        <li>Favorite Cocktail 3</li>
        {/* Add more favorite cocktails as needed */}
      </ul>
    </div>
  );
};

export default Favorites;
