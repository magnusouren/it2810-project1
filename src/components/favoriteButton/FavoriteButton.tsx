import './FavoriteButton.css';

import { FC, useEffect, useRef, useState } from 'react';

import { isFavorite, toggleFavorite } from '../../utils/persistency';

export const FavoriteButton: FC<{ id: string }> = ({ id }) => {
  const [isFavoriteDrink, setIsFavoriteDrink] = useState(isFavorite(id));
  const favoriteDrinkToggleButton = useRef<HTMLDivElement>(null);

  const updateFavoriteDrink = () => {
    setIsFavoriteDrink(id ? isFavorite(id) : false);
  };

  const toggleFavoriteDrink = () => {
    if (id) {
      toggleFavorite(id);
      updateFavoriteDrink();
    }
  };

  useEffect(() => {
    if (isFavoriteDrink) {
      if (favoriteDrinkToggleButton.current) {
        favoriteDrinkToggleButton.current.classList.add('favorite');
      }
    } else {
      if (favoriteDrinkToggleButton.current) {
        favoriteDrinkToggleButton.current.classList.remove('favorite');
      }
    }
  }, [isFavoriteDrink, favoriteDrinkToggleButton]);

  return isFavoriteDrink ? (
    <div className='favoriteToggle favorite' onClick={toggleFavoriteDrink} ref={favoriteDrinkToggleButton}>
      <span className='material-symbols-outlined'>favorite</span>
    </div>
  ) : (
    <div className='favoriteToggle' onClick={toggleFavoriteDrink} ref={favoriteDrinkToggleButton}>
      <span className='material-symbols-outlined'>favorite</span>
    </div>
  );
};
