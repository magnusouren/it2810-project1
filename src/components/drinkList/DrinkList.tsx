import './DrinkList.css';

import { FC } from 'react';

import { SimpleDrink } from '../../types';

interface DrinkListProps {
  drinks: SimpleDrink[] | undefined;
}

export const DrinkList: FC<DrinkListProps> = ({ drinks }) => {
  return (
    <div>
      {drinks && (
        <ul className='drink-list'>
          {drinks.map((drink) => (
            <li key={drink.drinkId}>{drink.strDrink}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
