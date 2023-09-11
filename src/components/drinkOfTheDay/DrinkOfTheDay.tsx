import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './DrinkOfTheDay.css';
interface Drink {
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
  strInstructions: string;
  ingredients: string[];
}

export const DrinkOfTheDay: React.FC = () => {
  const [drink, setDrink] = useState<Drink | null>(null);

  useEffect(() => {
    // Fetch a random drink from the API
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => {
        const randomDrink = response.data.drinks[0];
        const ingredients: string[] = [];

        // Extract ingredients
        for (let i = 1; i <= 15; i++) {
          const ingredient = randomDrink[`strIngredient${i}`];
          if (ingredient) {
            ingredients.push(`${ingredient}`);
          } else {
            break;
          }
        }

        randomDrink.ingredients = ingredients;
        setDrink(randomDrink);
      })
      .catch((error) => {
        console.error('Error fetching drink:', error);
      });
  }, []);

  return (
    <div className='drink-card'>
      {drink && (
        <Link to={`/categories/${drink.strCategory}`} className='link-unstyled'>
          <div className='left'>
            <h1>Drink of the day!</h1>
            <h2>{drink.strDrink}</h2>
            <img src={drink.strDrinkThumb + '/preview'} alt={drink.strDrink} />
          </div>
          <div className='right'>
            <p>Category: {drink.strCategory}</p>
            <p>Ingredients:</p>
            <ul>
              {drink.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>Instructions: {drink.strInstructions}</p>
          </div>
        </Link>
      )}
    </div>
  );
};
