import { act, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { renderWithRouter } from '../../../utils/test-utils';
import { Navbar } from '../Navbar';

describe('Navbar', () => {
  it('Should match snapshot', () => {
    const { container } = renderWithRouter(<Navbar />);
    expect(container).toMatchSnapshot();
  });

  it('Should show title and links', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText('Enjoy my cocktail')).toBeDefined();
    expect(screen.getByText('Drinks')).toBeDefined();
    expect(screen.getByText('Favorites')).toBeDefined();
  });

  it('Should navigate when to /drinks/ when Search is clicked', async () => {
    renderWithRouter(<Navbar />);
    act(() => {
      screen.getByText('Drinks').click();
    });
    expect(window.location.pathname).toBe('/drinks/');
  });

  it('Should navigate when to /favorites/ when Favorites is clicked', async () => {
    renderWithRouter(<Navbar />);
    act(() => {
      screen.getByText('Favorites').click();
    });
    expect(window.location.pathname).toBe('/favorites/');
  });

  it('Should navigate when to / when logo is clicked', async () => {
    renderWithRouter(<Navbar />);
    act(() => {
      screen.getByText('Enjoy my cocktail').click();
    });
    expect(window.location.pathname).toBe('/');
  });
});
