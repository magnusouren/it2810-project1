import { screen, waitFor } from '@testing-library/react';
import nock from 'nock';
import { vi } from 'vitest';

import { renderWithRouterAndQueryClient } from '../../../utils/test-utils';
import { FavoriteList } from '../FavoriteList';
import { testDrink, testDrink2 } from './mockDrinks';

describe('FavoriteList', () => {
  beforeAll(() => {
    nock.disableNetConnect();
  });

  beforeEach(() => {
    nock('https://www.thecocktaildb.com')
      .get(`/api/json/v1/1/lookup.php?i=1`)
      .reply(200, {
        drinks: [testDrink],
      });
    nock('https://www.thecocktaildb.com')
      .get(`/api/json/v1/1/lookup.php?i=2`)
      .reply(200, {
        drinks: [testDrink2],
      });
  });

  afterAll(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });

  it('should render correctly when having 2 favorites', async () => {
    const { container } = renderWithRouterAndQueryClient(
      <FavoriteList favorites={['1', '2']} onRemoveFavorite={vi.fn()} />,
    );
    await waitFor(() => screen.getByText('Super Drink'));
    expect(container).toMatchSnapshot();
  });

  it('should render correctly when having 1 favorite', async () => {
    const { container } = renderWithRouterAndQueryClient(<FavoriteList favorites={['1']} onRemoveFavorite={vi.fn()} />);
    await waitFor(() => screen.getByText('Super Drink'));
    expect(container).toMatchSnapshot();
  });

  it('should render correctly when having no favorite', async () => {
    const { container } = renderWithRouterAndQueryClient(<FavoriteList favorites={[]} onRemoveFavorite={vi.fn()} />);
    expect(container).toMatchSnapshot();
  });

  it('should contain heading-element', async () => {
    const { getByRole } = renderWithRouterAndQueryClient(<FavoriteList favorites={['1']} onRemoveFavorite={vi.fn()} />);
    await waitFor(() => screen.getByText('Super Drink'));
    expect(getByRole('heading', { name: 'Your favorites:' })).toBeDefined();
  });

  it('should contain correct amount of favorite-cards', async () => {
    const { getAllByRole } = renderWithRouterAndQueryClient(
      <FavoriteList favorites={['1', '2']} onRemoveFavorite={vi.fn()} />,
    );
    await waitFor(() => screen.getByText('Super Drink'));
    expect(getAllByRole('listitem').length).toBe(2);
  });
});
