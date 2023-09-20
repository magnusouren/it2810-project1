import { screen } from '@testing-library/react';

import { SimpleDrinkType } from '../../../types';
import { renderWithRouterAndQueryClient } from '../../../utils/test-utils';
import { SimpleDrink } from '../SimpleDrink';

const drink: SimpleDrinkType = {
  strDrink: 'Margarita',
  strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
  idDrink: '11007',
};

describe('SimpleDrink', () => {
  it('Should match snapshot', () => {
    const { container } = renderWithRouterAndQueryClient(<SimpleDrink drink={drink} />);
    expect(container).toMatchSnapshot();
  });

  it('Should show drink when it is passed as prop', () => {
    renderWithRouterAndQueryClient(<SimpleDrink drink={drink} />);
    expect(screen.getByText('Margarita')).toBeDefined();
  });
});
