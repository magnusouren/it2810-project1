import { fireEvent, screen, waitFor } from '@testing-library/react';

import { randomDrink } from '../../../../__mocks__/mockObjects';
import { renderWithRouterAndQueryClient } from '../../../utils/test-utils';
import { DrinkOfTheDay } from '../DrinkOfTheDay';

describe('DrinkOfTheDay', () => {
  it('Should match snapshot', async () => {
    const { asFragment } = renderWithRouterAndQueryClient(<DrinkOfTheDay />);

    await waitFor(() => {
      expect(screen.getByText('Drink of the day!')).toBeDefined();
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render correct heading element of page', async () => {
    renderWithRouterAndQueryClient(<DrinkOfTheDay />);
    await waitFor(() => {
      expect(screen.getByText('Drink of the day!')).toBeDefined();
    });
    expect(screen.getByRole('heading', { name: 'Drink of the day!' })).toBeDefined();
  });

  it('Should render correct heading element for drink', async () => {
    renderWithRouterAndQueryClient(<DrinkOfTheDay />);
    await waitFor(() => {
      expect(screen.getByText(randomDrink.strDrink)).toBeDefined();
    });
    expect(screen.getByRole('heading', { name: randomDrink.strDrink })).toBeDefined();
  });

  it('Should render correct details for drink', async () => {
    renderWithRouterAndQueryClient(<DrinkOfTheDay />);
    await waitFor(() => {
      expect(screen.getByText(randomDrink.strDrink)).toBeDefined();
    });
    expect(screen.getByText(randomDrink.strCategory)).toBeDefined();
    expect(screen.getByText(randomDrink.strGlass)).toBeDefined();
    expect(screen.getByText(randomDrink.strAlcoholic)).toBeDefined();
  });

  it('Should render correct image for drink', async () => {
    const { getByAltText } = renderWithRouterAndQueryClient(<DrinkOfTheDay />);
    await waitFor(() => {
      expect(screen.getByText(randomDrink.strDrink)).toBeDefined();
    });
    expect(getByAltText(randomDrink.strDrink)).toBeDefined();
  });

  it('should navigate to correct drink on click', async () => {
    const { getByText } = renderWithRouterAndQueryClient(<DrinkOfTheDay />);
    fireEvent.click(getByText(randomDrink.strDrink));
    expect(window.location.pathname).toBe(`/drink/${randomDrink.idDrink}`);
  });
});
