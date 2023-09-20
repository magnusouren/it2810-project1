import { useEffect, useState } from 'react';

import { FavoriteList } from '../components/favoriteList/FavoriteList';
import { getFavorites } from '../utils/persistency';

export const Favorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const removeFavoriteFromState = (id: string) => {
    setFavorites((prevFavorites) => prevFavorites.filter((favId) => favId !== id));
  };

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  return (
    <>
      <h2 id={'favorites-heading'}>Your favorites:</h2>
      <div className='favorites'>
        {favorites && <FavoriteList favorites={favorites} onRemoveFavorite={removeFavoriteFromState} />}
        {!favorites && <div>No favorites found</div>}
      </div>
    </>
  );
};
