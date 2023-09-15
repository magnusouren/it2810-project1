import './FavoriteCard.css';

import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Drink } from '../../../types';

interface FavoriteCardProps {
  drink: Drink;
}

export const FavoriteCard: FC<FavoriteCardProps> = ({ drink }) => {
  return (
    <li key={drink.strDrink}>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <Link to={`/drink/${drink.idDrink}`}>
        <h3>{drink.strDrink}</h3>
      </Link>
      <p className='material-symbols-outlined'>heart_minus</p>
    </li>
  );
};
