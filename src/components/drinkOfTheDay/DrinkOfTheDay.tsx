import './DrinkOfTheDay.css';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { DrinkOfTheDay as DrinkOfTheDayType } from '../../types';
import { getDrinkOfTheDay } from '../../utils/persistency';

export const DrinkOfTheDay: React.FC = () => {
  // // Get the current date in YYYY-MM-DD format
  const currentDate = new Date().toISOString().split('T')[0];

  // Check if a drink is stored for the current date in local storage
  const storedDrink = getDrinkOfTheDay(currentDate);

  // Use the stored drink if available or an empty string if not
  const [drink, setDrink] = useState<DrinkOfTheDayType | null>(storedDrink ? storedDrink : null);

  const { data, isLoading, isSuccess } = useQuery<DrinkOfTheDayType | null>(
    ['drinkOfTheDay'],
    async () => {
      // If there's a stored ID, no need to fetch again
      if (drink) {
        return null;
      }

      // Fetch a new random drink from the API
      return axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then((response) => {
          const randomDrink = response.data.drinks[0];

          const drink: DrinkOfTheDayType = {
            drinkId: randomDrink.idDrink,
            strDrink: randomDrink.strDrink,
            strDrinkThumb: randomDrink.strDrinkThumb,
            strCategory: randomDrink.strCategory,
            strGlass: randomDrink.strGlass,
            strAlcoholic: randomDrink.strAlcoholic,
          };

          // Store the new random drink ID in local storage with the current date
          localStorage.setItem(currentDate, JSON.stringify(drink));

          setDrink(drink);
          return drink;
        })
        .catch((error) => {
          console.error('Error fetching drink:', error);
          return null;
        });
    },
    {
      // Only refetch if the ID is empty (not stored in local storage)
      enabled: !drink,
    },
  );

  if (!drink) {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (!isSuccess) {
      return <p>Something went wrong fetching the drink of the day</p>;
    }

    if (!data) {
      return <p>Something went wrong fetching the drink of the day</p>;
    }

    return <p>There is something wrong</p>;
  }

  return (
    <div className='drink-of-the-day-card'>
      <Link to={`/drink/${drink.drinkId}`} className='link-wrapper'>
        <h2>Drink of the day!</h2>
        <div className='left'>
          <h3>{drink.strDrink}</h3>
          <p id='drink-of-the-day-category'>{drink.strCategory}</p>
          <p id='drink-of-the-day-glass'>{drink.strGlass}</p>
          <p id='drink-of-the-day-alcoholic'>{drink.strAlcoholic}</p>
        </div>
        <div className='right'>
          <img src={drink.strDrinkThumb + '/preview'} alt={drink.strDrink} />
        </div>
      </Link>
    </div>
  );
};
