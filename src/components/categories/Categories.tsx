import './Categories.css';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC } from 'react';

import { CategoryType } from '../../types';
import { Category } from '../category/Category';
import { Spinner } from '../loading/Loading';

export const Categories: FC = () => {
  const { data, isLoading, isSuccess } = useQuery<CategoryType[]>(['categories'], () =>
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((res) => res.data.drinks.map((drink: { strCategory: string }) => drink.strCategory)),
  );

  if (isLoading) return <Spinner />;

  return (
    <>
      <h2>Categories:</h2>
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
