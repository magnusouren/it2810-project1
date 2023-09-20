import './FavoriteList.css';

import { useQueries } from '@tanstack/react-query';
import { FC } from 'react';

import { Drink } from '../../types';
import { fetchDrinkById } from '../../utils/queries';
import { FavoriteCard } from '../favoriteCard/FavoriteCard';
import { Spinner } from '../loading/Loading';

interface FavoriteListProps {
  favorites: string[];
  onRemoveFavorite: (id: string) => void;
}

export const FavoriteList: FC<FavoriteListProps> = ({ favorites, onRemoveFavorite }) => {
  const userQueries = useQueries<Drink[]>({
    queries:
      favorites?.map((favorite) => {
        return {
          queryKey: ['drink', favorite],
          queryFn: () => fetchDrinkById(favorite).then((res) => res),
        };
      }) || [],
  });

  const data: Drink[] = userQueries.map((query) => query.data as Drink);

  const isLoading: boolean = userQueries.some((query) => query.isLoading);
  const isError: boolean = userQueries.some((query) => query.isError);
  const isSuccess: boolean = userQueries.some((query) => query.isSuccess);

  if (isLoading) return <Spinner />;
  if (isError) return <div>Something went wrong...</div>;
  if (data.length == 0) return <div>No favorites found...</div>;

  return (
    <>
      <h2 id={'favorites-heading'}>Your favorites:</h2>
      <div className='favorites'>
        <ul>
          {isSuccess &&
            favorites &&
            data.map((drink, index) => (
              <FavoriteCard drink={drink} handleRemoveFavorite={onRemoveFavorite} key={index} />
            ))}
        </ul>
      </div>
    </>
  );
};
