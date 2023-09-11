import { FC } from 'react';
import { DrinkOfTheDay } from '../components/drinkOfTheDay/DrinkOfTheDay';

export const Home: FC = () => {
  return (
    <div>
      Hjem
      <DrinkOfTheDay />
    </div>
  );
};
