const addFavorite = (id: string) => {
  const favorites = getFavorites();
  favorites.push(id);
  localStorage.setItem('drinkFavorites', JSON.stringify(favorites));
};

export const getFavorites = () => {
  const favorites = localStorage.getItem('drinkFavorites');
  if (favorites) {
    return JSON.parse(favorites);
  }
  return [];
};

const removeFavorite = (id: string) => {
  const favorites = getFavorites();
  const newFavorites = favorites.filter((favorite: string) => favorite !== id);
  localStorage.setItem('drinkFavorites', JSON.stringify(newFavorites));
};

export const toggleFavorite = (id: string) => {
  const favorites = getFavorites();
  if (favorites.includes(id)) {
    removeFavorite(id);
  } else {
    addFavorite(id);
  }
};

export const isFavorite = (id: string) => {
  const favorites = getFavorites();
  return favorites.includes(id);
};
