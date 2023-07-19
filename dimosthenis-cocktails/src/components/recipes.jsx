/* Recipe.js */

import React from 'react';

const Recipes = ({ name, method, ingredients, instructions, image }) => {
  return (
    <div className='recipe'>
      <img src={image} alt={name} className='recipe-image' />
      <h3 className='recipe-name'>{name}</h3>
      <div className='recipe-details'>
        <div className='recipe-ingredients'>
          <h4>Ingredients:</h4>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className='recipe-instructions'>
          <h4>Instructions:</h4>
          <p>{instructions}</p>
        </div>
      </div>
      <div className='recipe-method'>
        <h4>Method:</h4>
        <p>{method}</p>
      </div>
    </div>
  );
};

export default Recipes;
