import { screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { renderWithRouter } from '../../../utils/test-utils';
import { Navbar } from '../Navbar';

describe('Accordion test', () => {
  it('Should match snapshot', () => {
    const { container } = renderWithRouter(<Navbar />);
    expect(container).toMatchSnapshot();
  });

  it('Should show title and links', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText(/Enjoy my cocktail/i)).toBeDefined();
    expect(screen.getByText(/Search/i)).toBeDefined();
    expect(screen.getByText(/Favorites/i)).toBeDefined();
  });

  it('Should navigate when link is clicked', () => {
    renderWithRouter(<Navbar />);
  });
});
