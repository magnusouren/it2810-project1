import { FavoriteList } from '../components/favoriteList/FavoriteList';

export const Favorites = () => {
  const getFavorites = () => {
    if (localStorage.getItem('drinkFavorites') === null) {
      localStorage.setItem('drinkFavorites', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('drinkFavorites') || '{}');
  };
  const favorites: string[] = getFavorites();

  return (
    <>
      {favorites && <FavoriteList favorites={favorites} />}
      {!favorites && <div>No favorites found</div>}
    </>
  );
};
