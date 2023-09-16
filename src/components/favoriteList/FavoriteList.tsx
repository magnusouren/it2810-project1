import './FavoriteList.css';

import { useQueries } from '@tanstack/react-query';
import { FC } from 'react';

import { Drink } from '../../types';
import { fetchDrinkById } from '../../utils/queries';
import { FavoriteCard } from './favoriteCard/FavoriteCard';

interface FavoriteListProps {
  favorites: string[];
}

export const FavoriteList: FC<FavoriteListProps> = ({ favorites }) => {
  const userQueries = useQueries<Drink[]>({
    queries:
      favorites?.map((favorite) => {
        return {
          queryKey: ['drinkI', favorite], // TODO - felles query for alle drinkQueries i utils
          queryFn: () => fetchDrinkById(favorite).then((res) => res),
        };
      }) || [],
  });

  const data: Drink[] = userQueries.map((query) => query.data as Drink);

  const isLoading: boolean = userQueries.some((query) => query.isLoading);
  const isError: boolean = userQueries.some((query) => query.isError);
  const isSuccess: boolean = userQueries.some((query) => query.isSuccess);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong...</div>;
  if (data.length == 0) return <div>No favorites found...</div>;

  return (
    <>
      <h2 id={'favorites-heading'}>Your favorites:</h2>
      <div className='favorites'>
        <ul>{isSuccess && favorites && data.map((drink, index) => <FavoriteCard drink={drink} key={index} />)}</ul>
      </div>
    </>
  );
};
