import { FC } from 'react';

import { DrinkCard } from '../components/drink/DrinkCard';

export const Drink: FC = () => {
  const exampleId = '11118';

  return <DrinkCard id={exampleId} />;
};
