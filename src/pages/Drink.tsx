import { FC } from 'react';

import { DrinkCard } from '../components/drink/DrinkCard';
import { queryClient } from '../main';

export const Drink: FC = () => {
  console.log(queryClient.getQueryCache());

  return <DrinkCard />;
};
