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

describe('Categories', () => {
  it('Should match snapshot', async () => {
    const { asFragment } = renderWithRouterAndQueryClient(<Categories />);
    expect(asFragment()).toMatchSnapshot();
  });

  it.each(['Beer', 'Cocoa', 'Coffee'])('Should show %s', async (category) => {
    renderWithRouterAndQueryClient(<Categories />);
    expect(screen.getByText(category)).toBeDefined();
  });

  it('Should not show a category when it is not in the list', async () => {
    renderWithRouterAndQueryClient(<Categories />);
    expect(screen.queryByText('Ordinary drink')).toBeNull();
  });
});
