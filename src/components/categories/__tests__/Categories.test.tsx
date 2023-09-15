import { screen, waitFor } from '@testing-library/react';
import nock from 'nock';

import { CategoryType } from '../../../types';
import { renderWithRouterAndQueryClient } from '../../../utils/test-utils';
import { Categories } from '../Categories';

const mockApiReturn = [
  {
    strCategory: 'Beer' as CategoryType,
  },
  {
    strCategory: 'Cocoa' as CategoryType,
  },
  {
    strCategory: 'Coffee / Tea' as CategoryType,
  },
];

describe('Categories', () => {
  beforeEach(() => {
    nock('https://www.thecocktaildb.com').get(`/api/json/v1/1/list.php?c=list`).reply(200, {
      drinks: mockApiReturn,
    });
  });

  it('Should match snapshot', async () => {
    const { asFragment } = renderWithRouterAndQueryClient(<Categories />);

    await waitFor(() => {
      expect(screen.getByText('Beer')).toBeDefined();
      expect(screen.getByText('Cocoa')).toBeDefined();
      expect(screen.getByText('Coffee / Tea')).toBeDefined();
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it.each(['Beer', 'Cocoa', 'Coffee / Tea'])('Should show %s', async (category) => {
    renderWithRouterAndQueryClient(<Categories />);
    await waitFor(() => {
      expect(screen.getByText(category)).toBeDefined();
    });
    expect(screen.getByText(category)).toBeDefined();
  });

  it('Should not show a category when it is not in the list', async () => {
    renderWithRouterAndQueryClient(<Categories />);
    await waitFor(() => {
      expect(screen.getByText('Beer')).toBeDefined();
      expect(screen.getByText('Cocoa')).toBeDefined();
      expect(screen.getByText('Coffee / Tea')).toBeDefined();
    });
    expect(screen.queryByText('Ordinary drink')).toBeNull();
  });
});
