import './FavoriteButton.css';

import { FC, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import { isFavorite, toggleFavorite } from '../../utils/persistency';

interface FavoriteButtonProps {
  id: string;
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({ id }) => {
  const [isFavoriteDrink, setIsFavoriteDrink] = useState(isFavorite(id));

  const updateFavoriteDrink = () => {
    setIsFavoriteDrink(id ? isFavorite(id) : false);
  };

  const toggleFavoriteDrink = () => {
    if (id) {
      toggleFavorite(id);
      updateFavoriteDrink();
    }
  };

  // const peach = '#fbc4ab'; color={peach}
  // const red = '#ff0000'; color={red}
  const heart = isFavoriteDrink ? <FaHeart /> : <FaRegHeart />;

  return (
    <div
      className={`favorite-toggle${isFavoriteDrink ? ' favorite' : ''}`}
      onClick={toggleFavoriteDrink}
      // ref={favoriteDrinkToggleButton}
      data-testid='favorite'
    >
      {/* Use an empty span for the icon */}
      {heart}
    </div>
  );
};
