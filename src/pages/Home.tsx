import { FC } from 'react';

import { Categories } from '../components/categories/Categories';
import { DrinkOfTheDay } from '../components/drinkOfTheDay/DrinkOfTheDay';

export const Home: FC = () => {
  return (
    <div>
      <Categories />
      <DrinkOfTheDay />
    </div>
  );
};
