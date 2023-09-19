import { screen, waitFor } from '@testing-library/react';

import { renderWithRouterAndQueryClient, renderWithRouterQueryClientAndDrinkId } from '../../../utils/test-utils';
import { DrinkCard } from '../DrinkCard';

/* Minimal API return format */
const testDrink = {
  drinkId: '11118',
  strDrink: 'Super Drink',
  ingredients: [],
  strGlass: 'Highball',
  strInstructions: 'Instructions for drink',
  strDrinkThumb: 'https://localhost:3000/drink/11118.jpg',
  strCategory: 'Category',
  strAlcoholic: 'Alcoholic',
  strIngredient1: 'Ingredient 1',
  strMeasure1: 'Measure 1',
  strIngredient2: 'Ingredient 2',
  strMeasure2: 'Measure 2',
};

describe('DrinkCard', () => {
  it('Renders with proper params', async () => {
    renderWithRouterQueryClientAndDrinkId(testDrink.drinkId);

    await waitFor(() => {
      expect(screen.getByText(testDrink.strDrink)).toBeDefined();
    });
  });

  it('Should match snapshot', async () => {
    const { container } = renderWithRouterQueryClientAndDrinkId(testDrink.drinkId);

    /* Expecting Drink name to show to make sure
    the component is finished loading before comparing snapshots */
    await waitFor(() => {
      expect(screen.getByText(testDrink.strDrink)).toBeDefined();
    });
    expect(container).toMatchSnapshot();
  });

  it('Should show loading state when data is loading', () => {
    renderWithRouterAndQueryClient(<DrinkCard />);
    expect(screen.getByText(/Loading/i)).toBeDefined();
  });

  it('Should show that no drinks were found if none are returned', async () => {
    renderWithRouterQueryClientAndDrinkId('0');

    await waitFor(() => {
      expect(screen.getByText(/No drink was found.../i)).toBeDefined();
    });
  });
});
