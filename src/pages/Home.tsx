/* eslint-disable @typescript-eslint/no-unused-vars */
import './Home.css';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC } from 'react';

import { Category } from '../components/category/Category';
import { CategoryType } from '../types';

export const Home: FC = () => {
  console.log('Home');

  // tanstack query to get all categories
  const { data, isLoading, isSuccess } = useQuery<CategoryType[]>(['categories'], () =>
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((res) => res.data.drinks.map((drink: { strCategory: string }) => drink.strCategory)),
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className='wallpaper'>
        <h2>Categories:</h2>
      </div>
      {data && isSuccess && (
        <div className='categories'>
          {data.sort().map((category: CategoryType) => (
            <Category key={category} category={category} />
          ))}
        </div>
      )}
    </>
  );
};
