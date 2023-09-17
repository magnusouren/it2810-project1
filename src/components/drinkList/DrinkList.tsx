import './DrinkList.css';

import { FC } from 'react';

import { SimpleDrinkType } from '../../types';
import { SimpleDrink } from '../simpleDrink/SimpleDrink';

interface DrinkListProps {
  drinks: SimpleDrinkType[] | undefined;
}

export const DrinkList: FC<DrinkListProps> = ({ drinks }) => {
  return (
    <div>
      {drinks && (
        <ul className='drink-list'>
          {drinks.map((drink: SimpleDrinkType) => (
            <SimpleDrink key={drink.idDrink} drink={drink} />
          ))}
        </ul>
      )}
    </div>
  );
};
