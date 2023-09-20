import './DrinkOfTheDay.css';

import { useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { DrinkOfTheDay as DrinkOfTheDayType } from '../../types';
import { getDrinkOfTheDay } from '../../utils/persistency';
import { fetchDrinkOfTheDay } from '../../utils/queries';
import { Spinner } from '../loading/Loading';

export const DrinkOfTheDay: FC = () => {
  // // Get the current date in YYYY-MM-DD format
  const currentDate = new Date().toISOString().split('T')[0];

  // Use the stored drink if available or an empty string if not
  const [drink, setDrink] = useState<DrinkOfTheDayType | null>(getDrinkOfTheDay(currentDate) || null);

  const { data, isLoading, isSuccess } = useQuery<DrinkOfTheDayType | null>(
    ['drinkOfTheDay'],
    async () => {
      // If there's a stored ID, no need to fetch again
      if (drink) {
        return null;
      }

      // Fetch a new random drink from the API
      return await fetchDrinkOfTheDay(currentDate).then((response) => {
        setDrink(response);
        return response;
      });
    },
    {
      // Only refetch if the ID is empty (not stored in local storage)
      enabled: !drink,
    },
  );

  if (!drink) {
    if (isLoading) {
      return (
        <div className='drink-of-the-day-card'>
          <Spinner />
        </div>
      );
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
      <div className='drink-of-the-day-card-container'>
        <Link to={`/drink/${drink.drinkId}`} className='link-wrapper'>
          <h2>Drink of the day!</h2>
          <div className='left'>
            <h3>{drink.strDrink}</h3>
            <div className='info-container'>
              <p id='drink-of-the-day-category'>{drink.strCategory}</p>
              <p id='drink-of-the-day-glass'>{drink.strGlass}</p>
              <p id='drink-of-the-day-alcoholic'>{drink.strAlcoholic}</p>
            </div>
          </div>
          <div className='right'>
            <img src={drink.strDrinkThumb + '/preview'} alt={drink.strDrink} />
          </div>
        </Link>
      </div>
    </div>
  );
};
