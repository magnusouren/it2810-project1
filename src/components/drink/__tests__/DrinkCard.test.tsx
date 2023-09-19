import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import nock from 'nock';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { renderWithRouterAndQueryClient } from '../../../utils/test-utils';
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

const tree = (id: string) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={[`/drink/${id}`]}>
        <Routes>
          <Route path='/drink'>
            <Route path=':id' element={<DrinkCard />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );
};

describe('DrinkCard', () => {
  it('Renders with proper params', async () => {
    /* This nock is to remove a temporary error showing in the test logs */
    nock('https://www.thecocktaildb.com').get(`/api/json/v1/1/lookup.php?i=undefined`).once().reply(200, {
      drinks: [],
    });

    nock('https://www.thecocktaildb.com')
      .get(`/api/json/v1/1/lookup.php?i=${testDrink.drinkId}`)
      .once()
      .reply(200, {
        drinks: [testDrink],
      });

    render(tree(testDrink.drinkId));

    await waitFor(() => {
      expect(screen.getByText(testDrink.strDrink)).toBeDefined();
      expect(screen.getByText(testDrink.strGlass)).toBeDefined();
      expect(screen.getByText(testDrink.strInstructions)).toBeDefined();
      expect(screen.getByText(testDrink.strCategory)).toBeDefined();
      expect(screen.getByText(testDrink.strAlcoholic)).toBeDefined();
      expect(screen.getByText(testDrink.strIngredient1)).toBeDefined();
      expect(screen.getByText(testDrink.strMeasure1)).toBeDefined();
      expect(screen.getByText(testDrink.strIngredient2)).toBeDefined();
      expect(screen.getByText(testDrink.strMeasure2)).toBeDefined();
    });
  });

  it('Should match snapshot', async () => {
    /* This nock is to remove a temporary error showing in the test logs */
    nock('https://www.thecocktaildb.com').get(`/api/json/v1/1/lookup.php?i=undefined`).once().reply(200, {
      drinks: [],
    });

    nock('https://www.thecocktaildb.com')
      .get(`/api/json/v1/1/lookup.php?i=${testDrink.drinkId}`)
      .once()
      .reply(200, {
        drinks: [testDrink],
      });

    const { container } = render(tree(testDrink.drinkId));

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
    /* This nock is to remove a temporary error showing in the test logs */
    nock('https://www.thecocktaildb.com').get(`/api/json/v1/1/lookup.php?i=undefined`).once().reply(200, {
      drinks: [],
    });

    nock('https://www.thecocktaildb.com').get(`/api/json/v1/1/lookup.php?i=1`).once().reply(200, {
      drinks: [],
    });

    render(tree('1'));

    await waitFor(() => {
      expect(screen.getByText(/No drink was found.../i)).toBeDefined();
    });
  });
});
