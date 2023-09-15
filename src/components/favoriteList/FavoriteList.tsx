import './FavoriteList.css';

import { useQuery } from '@tanstack/react-query';

import { Drink } from '../../types';
import { fetchCocktailById } from '../../utils/apiCalls';
import { FavoriteCard } from './favoriteCard/FavoriteCard';

const FavoriteList = () => {
  const favorites: string[] | undefined = localStorage
    .getItem('drinkFavorites')
    ?.slice(1, -1)
    .split(',')
    .map((fav) => fav.slice(1, -1));

  const { data, isLoading, isError } = useQuery<Drink[] | undefined>(['cocktailById'], async () => {
    // Hent data for hver ID og vent på alle forespørslene
    if (!favorites) return;
    const promises = favorites.map((id) => fetchCocktailById(id));
    const results = await Promise.all(promises);
    return results.map((result) => result.drinks[0] as Drink);
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error while loading drinks</div>;
  }
  return (
    <>
      <h2 id={'favorites-heading'}>Your favorites:</h2>
      <div className='favorites'>
        <ul>{data && favorites && data.map((drink, index) => <FavoriteCard drink={drink} key={index} />)}</ul>
      </div>
    </>
  );
};

export default FavoriteList;
