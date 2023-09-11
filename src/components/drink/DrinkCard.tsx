import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';

interface Ingredient {
  ingredient: string;
  measure: string;
}

interface Drink {
  strDrink: string;
  ingredients: Array<Ingredient>;
  strGlass: string | null;
  strInstructions: string;
  strDrinkThumb: string;
  strVideo: string | null;
  strCategory: string;
  strAlcoholic: string;
}

export const DrinkCard: FC = () => {
  const [drink, setDrink] = useState<Drink | null>(null);

  useEffect(() => {
    console.log('Fetching drink...');
    // Fetch a random drink from the API
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then((response) => {
        const drinkData = response.data.drinks[0];
        const ingredients: Array<Ingredient> = [];

        // Extract ingredients
        for (let i = 1; i <= 15; i++) {
          const ingredient: string = drinkData[`strIngredient${i}`];
          const measure: string = drinkData[`strMeasure${i}`];
          if (ingredient) {
            ingredients.push({ ingredient, measure });
          } else {
            break;
          }
        }

        drinkData.ingredients = ingredients;
        setDrink(drinkData);
      })
      .catch((error) => {
        console.error('Error fetching drink:', error);
      });
  }, []);

  if (!drink) {
    return <div>Loading...</div>;
  }

  return (
    <div className='drinkContainer'>
      <h2>{drink.strDrink}</h2>
      <div className='imageContainer'>
        <img src={drink.strDrinkThumb} alt={drink.strDrink + 'image'} />
      </div>
      <p>{drink.strVideo}</p>
      <div className='misc'>
        <p>{drink.strCategory}</p>
        <p>{drink.strGlass}</p>
        <p>{drink.strAlcoholic}</p>
      </div>
      <div>
        <h3>Instructions</h3>
        <p>{drink.strInstructions}</p>
      </div>
      <ul className='ingredients'>
        {drink.ingredients.map((ingredient, index) => (
          <li key={index}>
            <div className='measure'>{ingredient.measure == null ? '' : ingredient.measure}</div>
            <div className='ingredient'>{ingredient.ingredient}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
