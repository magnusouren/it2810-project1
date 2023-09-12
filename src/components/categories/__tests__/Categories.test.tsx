import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { CategoryType } from '../../../types';
import { renderWithRouterAndQueryClient } from '../../../utils/test-utils';
import { Categories } from '../Categories';

vi.mock('@tanstack/react-query', async () => {
  const axios = (await vi.importActual('@tanstack/react-query')) as { default?: undefined };
  return {
    ...axios,
    useQuery: () => ({
      data: ['Beer', 'Cocoa', 'Coffee'] as CategoryType[],
      isLoading: false,
      isSuccess: true,
    }),
  };
});

describe('Home', () => {
  it('Should match snapshot', async () => {
    const { asFragment } = renderWithRouterAndQueryClient(<Categories />);
    expect(asFragment()).toMatchSnapshot();
  });

  it.each(['Beer', 'Cocoa', 'Coffee'])('Should show %s', async (category) => {
    renderWithRouterAndQueryClient(<Categories />);
    expect(screen.getByText(category)).toBeDefined();
  });

  it.each(['Beer', 'Cocoa', 'Coffee'])('Should navigate when to /search/ when %s is clicked', async (category) => {
    renderWithRouterAndQueryClient(<Categories />);
    screen.getByText(category).click();
    expect(window.location.pathname).toBe('/search/');
    expect(window.history.state.usr).toEqual(category);
  });

  it.each(['Beer', 'Cocoa', 'Coffee'])('Should use %s as state in navigation when clicked', async (category) => {
    renderWithRouterAndQueryClient(<Categories />);
    screen.getByText(category).click();
    expect(window.history.state.usr).toEqual(category);
  });
});
