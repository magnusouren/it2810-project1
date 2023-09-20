import { screen, waitFor } from '@testing-library/react';

import { mockDrink } from '../../../../__mocks__/mockObjects';
import { renderWithRouterAndQueryClient, renderWithRouterQueryClientAndDrinkId } from '../../../utils/test-utils';
import { DrinkCard } from '../DrinkCard';

describe('DrinkCard', () => {
  it('Should match snapshot', async () => {
    const { container } = renderWithRouterQueryClientAndDrinkId(mockDrink.idDrink);
    await waitFor(() => {
      expect(screen.getByText(mockDrink.strDrink)).toBeDefined();
    });
    expect(container).toMatchSnapshot();
  });

  it('Should show loading state when data is loading', () => {
    renderWithRouterAndQueryClient(<DrinkCard />);
    expect(screen.getByTestId(/Spinner/i)).toBeDefined();
  });

  it('Should show that no drinks were found if none are returned', async () => {
    renderWithRouterQueryClientAndDrinkId('0');
    await waitFor(() => {
      expect(screen.getByText(/No drink was found.../i)).toBeDefined();
    });
  });

  it('Should show correct name of drink as header', async () => {
    renderWithRouterQueryClientAndDrinkId(mockDrink.idDrink);
    await waitFor(() => {
      expect(screen.getByText(mockDrink.strDrink)).toBeDefined();
    });
    expect(screen.getByRole('heading', { name: mockDrink.strDrink })).toBeDefined();
  });

  it('Should show correct image', async () => {
    renderWithRouterQueryClientAndDrinkId(mockDrink.idDrink);
    await waitFor(() => {
      expect(screen.getByText(mockDrink.strDrink)).toBeDefined();
    });
    expect(screen.getByAltText(mockDrink.strDrink + 'image')).toBeDefined();
  });

  it('Should show correct category of drink', async () => {
    renderWithRouterQueryClientAndDrinkId(mockDrink.idDrink);
    await waitFor(() => {
      expect(screen.getByText(mockDrink.strDrink)).toBeDefined();
    });
    expect(screen.getByText(`${mockDrink.strCategory}`)).toBeDefined();
  });

  it('Should show correct glass', async () => {
    renderWithRouterQueryClientAndDrinkId(mockDrink.idDrink);
    await waitFor(() => {
      expect(screen.getByText(mockDrink.strDrink)).toBeDefined();
    });
    expect(screen.getByText(`${mockDrink.strGlass}`)).toBeDefined();
  });

  it('Should show correct alcoholics', async () => {
    renderWithRouterQueryClientAndDrinkId(mockDrink.idDrink);
    await waitFor(() => {
      expect(screen.getByText(mockDrink.strDrink)).toBeDefined();
    });
    expect(screen.getByText(`${mockDrink.strAlcoholic}`)).toBeDefined();
  });

  it('Should show correct instructions', async () => {
    renderWithRouterQueryClientAndDrinkId(mockDrink.idDrink);
    await waitFor(() => {
      expect(screen.getByText(mockDrink.strDrink)).toBeDefined();
    });
    expect(screen.getByRole('heading', { name: 'Instructions' })).toBeDefined();
    expect(screen.getByText(`${mockDrink.strInstructions}`)).toBeDefined();
  });

  it('Should show like button', async () => {
    renderWithRouterQueryClientAndDrinkId(mockDrink.idDrink);
    await waitFor(() => {
      expect(screen.getByText(mockDrink.strDrink)).toBeDefined();
    });
    expect(screen.getByTestId('favorite')).toBeDefined();
  });

  it.each(mockDrink.ingredients)('Should show correct ingredient "%s"', async (ingredient) => {
    renderWithRouterQueryClientAndDrinkId(mockDrink.idDrink);
    await waitFor(() => {
      expect(screen.getByText(mockDrink.strDrink)).toBeDefined();
    });
    expect(screen.getByText(`${ingredient.ingredient}`)).toBeDefined();
    expect(screen.getByText(`${ingredient.measure}`)).toBeDefined();
  });
});
