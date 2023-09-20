import { act, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { renderWithRouter } from '../../../../utils/test-utils';
import { DesktopNav } from '../DesktopNav';

describe('Navbar', () => {
  it('Should match snapshot', () => {
    const { container } = renderWithRouter(<DesktopNav />);
    expect(container).toMatchSnapshot();
  });

  it('Should show title and links', () => {
    renderWithRouter(<DesktopNav />);
    expect(screen.getByText(/Enjoy my cocktail/i)).toBeDefined();
    expect(screen.getByText(/Drinks/i)).toBeDefined();
    expect(screen.getByText(/Favorites/i)).toBeDefined();
  });

  it('Should navigate when to /search/ when Search is clicked', async () => {
    renderWithRouter(<DesktopNav />);
    act(() => {
      screen.getByText(/Drinks/i).click();
    });
    expect(window.location.pathname).toBe('/drinks');
  });

  it('Should navigate when to /favorites/ when Favorites is clicked', async () => {
    renderWithRouter(<DesktopNav />);
    act(() => {
      screen.getByText(/Favorites/i).click();
    });
    expect(window.location.pathname).toBe('/favorites');
  });

  it('Should navigate when to / when logo is clicked', async () => {
    renderWithRouter(<DesktopNav />);
    act(() => {
      screen.getByText(/Enjoy my cocktail/i).click();
    });
    expect(window.location.pathname).toBe('/');
  });
});
