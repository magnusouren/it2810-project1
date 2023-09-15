import { screen, waitFor } from '@testing-library/react';
import nock from 'nock';

import { renderWithRouterAndQueryClient } from '../../../utils/test-utils';
import { Categories } from '../Categories';

// vi.mock('@tanstack/react-query', async () => {
//   const axios = (await vi.importActual('@tanstack/react-query')) as { default?: undefined };
//   return {
//     ...axios,
//     useQuery: () => ({
//       data: ['Beer', 'Cocoa', 'Coffee'] as CategoryType[],
//       isLoading: false,
//       isSuccess: true,
//     }),
//   };
// });

const mockApiReturn = [
  {
    strCategory: 'Beer',
  },
  {
    strCategory: 'Cocoa',
  },
  {
    strCategory: 'Coffee',
  },
];

describe('Categories', () => {
  it('Should match snapshot', async () => {
    nock('https://www.thecocktaildb.com').get(`/api/json/v1/1/list.php?c=list`).once().reply(200, {
      drinks: mockApiReturn,
    });

    const { asFragment } = renderWithRouterAndQueryClient(<Categories />);

    await waitFor(() => {
      expect(screen.getByText('Beer')).toBeDefined();
      expect(screen.getByText('Cocoa')).toBeDefined();
      expect(screen.getByText('Coffee')).toBeDefined();
    });

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
