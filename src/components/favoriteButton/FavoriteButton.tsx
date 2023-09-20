import './FavoriteButton.css';

import { FC, useEffect, useRef, useState } from 'react';

import { isFavorite, toggleFavorite } from '../../utils/persistency';

interface FavoriteButtonProps {
  id: string;
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({ id }) => {
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
    <div
      className='favorite-toggle favorite'
      onClick={toggleFavoriteDrink}
      ref={favoriteDrinkToggleButton}
      data-testid='favorite'
    >
      &#60;3
    </div>
  ) : (
    <div
      className='favorite-toggle'
      onClick={toggleFavoriteDrink}
      ref={favoriteDrinkToggleButton}
      data-testid='favorite'
    >
      &#60;3
    </div>
  );
};
