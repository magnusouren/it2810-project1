import './DrinkCard.css';

import { useQuery } from '@tanstack/react-query';
import axios, { isCancel } from 'axios';
import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Drink, Ingredient } from '../../types';
import { FavoriteButton } from '../favoriteButton/FavoriteButton';

export const DrinkCard: FC = () => {
  const { id } = useParams();

  // useQuery hook
  const { data, isLoading, isSuccess } = useQuery<Drink | null>(['drink', id], async () => {
    return axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        if (!id) {
          return null;
        }

        // Extract drink data
        const drinkData = response.data.drinks[0];
        const ingredients: Array<Ingredient> = [];
        const drink: Drink = {
          idDrink: drinkData.idDrink,
          strDrink: drinkData.strDrink,
          strGlass: drinkData.strGlass,
          ingredients: [],
          strInstructions: drinkData.strInstructions,
          strDrinkThumb: drinkData.strDrinkThumb,
          strCategory: drinkData.strCategory,
          strAlcoholic: drinkData.strAlcoholic,
        };

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

        drink.ingredients = ingredients;
        return drink;
      })
      .catch((error) => {
        if (isCancel(error)) {
          console.log('Request cancelled', error.message);
          return null;
        }
        if (error instanceof TypeError) {
          return null;
        } else {
          console.error('Error fetching drink:', error);
          return null;
        }
      });
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isSuccess) {
    return <div>Something went wrong</div>;
  }

  if (!data) {
    return <div>No drink was found...</div>;
  }
  return (
    <div className='drinkContainer'>
      <div className='returnButtonContainer'>
        <Link to='/search' className='returnButton'>
          <span className='material-symbols-outlined'>arrow_back_ios_new</span>
        </Link>
      </div>
      <div className='drinkHeader'>
        <h1>{data.strDrink}</h1>
      </div>
      <div className='favoriteButtonContainer'>
        <FavoriteButton id={id || ''} />
      </div>
      <div className='imageContainer'>
        <img src={data.strDrinkThumb} alt={data.strDrink + 'image'} />
      </div>
      <div className='info'>
        <p id='drinkCategory'>{data.strCategory}</p>
        <p id='drinkGlass'>{data.strGlass}</p>
        <p id='drinkAlcoholic'>{data.strAlcoholic}</p>
      </div>
      <div className='ingredients'>
        <h3 className='sectionHeader'>Ingredients</h3>
        <ul className='ingredientsList'>
          {data.ingredients.map((ingredient, index) => (
            <li key={index}>
              <div className='measure'>{ingredient.measure == null ? '' : ingredient.measure}</div>
              <div className='ingredient'>{ingredient.ingredient}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className='instructions'>
        <h3 className='sectionHeader'>Instructions</h3>
        <p>{data.strInstructions}</p>
      </div>
    </div>
  );
};
