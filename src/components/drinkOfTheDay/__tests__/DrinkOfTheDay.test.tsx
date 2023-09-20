import { fireEvent, screen, waitFor } from '@testing-library/react';

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

  it('Should render correct heading element', async () => {
    renderWithRouterAndQueryClient(<DrinkOfTheDay />);
    await waitFor(() => {
      expect(screen.getByText('Drink of the day!')).toBeDefined();
    });
    expect(screen.getByRole('heading', { name: 'Drink of the day!' })).toBeDefined();
  });

  it('Should render correct heading element for drink', async () => {
    renderWithRouterAndQueryClient(<DrinkOfTheDay />);
    await waitFor(() => {
      expect(screen.getByText('Random Drink')).toBeDefined();
    });
    expect(screen.getByRole('heading', { name: 'Random Drink' })).toBeDefined();
  });

  it('Should render correct details for drink', async () => {
    renderWithRouterAndQueryClient(<DrinkOfTheDay />);
    await waitFor(() => {
      expect(screen.getByText('Random Drink')).toBeDefined();
    });
    expect(screen.getByText('Category')).toBeDefined();
    expect(screen.getByText('Highball')).toBeDefined();
    expect(screen.getByText('Alcoholic')).toBeDefined();
  });

  it('Should render correct image for drink', async () => {
    const { getByAltText } = renderWithRouterAndQueryClient(<DrinkOfTheDay />);
    await waitFor(() => {
      expect(screen.getByText('Random Drink')).toBeDefined();
    });
    expect(getByAltText('Random Drink')).toBeDefined();
  });

  it('should navigate to correct drink on click', async () => {
    const { getByText } = renderWithRouterAndQueryClient(<DrinkOfTheDay />);
    fireEvent.click(getByText('Random Drink'));
    expect(window.location.pathname).toBe('/drink/9118');
  });
});
