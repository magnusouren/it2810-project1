import { act, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { renderWithRouter } from '../../../../utils/test-utils';
import { MobileNav } from '../MobileNav';

describe('Navbar', () => {
  it('Should match snapshot', () => {
    const { container } = renderWithRouter(<MobileNav />);
    expect(container).toMatchSnapshot();
  });

  it('Should show title and links', () => {
    renderWithRouter(<MobileNav />);
    expect(screen.getByText(/Enjoy my cocktail/i)).toBeDefined();
    expect(screen.getByText(/Drinks/i)).toBeDefined();
    expect(screen.getByText(/Favorites/i)).toBeDefined();
  });

  it('Should navigate when to /drinks/ when Search is clicked', async () => {
    renderWithRouter(<MobileNav />);
    act(() => {
      screen.getByText(/Drinks/i).click();
    });
    expect(window.location.pathname).toBe('/drinks');
  });

  it('Should navigate when to /favorites/ when Favorites is clicked', async () => {
    renderWithRouter(<MobileNav />);
    act(() => {
      screen.getByText(/Favorites/i).click();
    });
    expect(window.location.pathname).toBe('/favorites/');
  });

  it('Should navigate when to / when logo is clicked', async () => {
    renderWithRouter(<MobileNav />);
    act(() => {
      screen.getByText(/Enjoy my cocktail/i).click();
    });
    expect(window.location.pathname).toBe('/');
  });
});
