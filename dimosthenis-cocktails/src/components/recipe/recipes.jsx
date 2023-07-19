// Recipes.js

import React from 'react';
import Recipe from '../recipe/recipe';
import './recipes.css';

const Recipes = () => {
  // Sample recipe data
  const recipes = [
    {
      name: 'Mojito',
      method: 'Shake',
      ingredients: [
        '2 oz white rum',
        '1 oz lime juice',
        '2 teaspoons sugar',
        '6-8 fresh mint leaves',
        'Club soda',
      ],
      instructions:
        'In a glass, muddle mint leaves and sugar. Add lime juice and rum. Fill glass with ice and top with club soda. Stir gently and garnish with mint sprig.',
      image: 'mojito.jpg',
    },
    {
      name: 'Cosmopolitan',
      method: 'Shake',
      ingredients: [
        '1 1/2 oz vodka',
        '1 oz cranberry juice',
        '1/2 oz triple sec',
        '1/2 oz lime juice',
        'Lime twist for garnish',
      ],
      instructions:
        'Combine vodka, cranberry juice, triple sec, and lime juice in a shaker with ice. Shake well and strain into a chilled cocktail glass. Garnish with a lime twist.',
      image: 'cosmopolitan.jpg',
    },
    // Add more recipe objects as needed
  ];

  return (
    <div className='recipes'>
      <h2 className='recipes-headline'>Our Recipes</h2>
      <div className='recipes-grid'>
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            name={recipe.name}
            method={recipe.method}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            image={recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
