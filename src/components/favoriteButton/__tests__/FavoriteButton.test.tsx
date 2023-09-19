import { act, cleanup, render, screen } from '@testing-library/react';
import { afterAll } from 'vitest';

import { FavoriteButton } from '../FavoriteButton';

describe('FavoriteButton', () => {
  afterAll(cleanup);
  it('Should match snapshot', () => {
    const { container } = render(<FavoriteButton id='1' />);
    expect(container).toMatchSnapshot();
  });

  it('Toggle should change class after click', () => {
    render(<FavoriteButton id='1' />);
    act(() => {
      screen.getByText('favorite').parentElement?.click();
    });
    expect(screen.getByText('favorite').parentElement?.classList.contains('favorite')).toBe(true);
    act(() => {
      screen.getByText('favorite').parentElement?.click();
    });
    expect(screen.getByText('favorite').parentElement?.classList.contains('favorite')).toBe(false);
  });
});
