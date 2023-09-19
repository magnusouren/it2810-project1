import { screen, waitFor } from '@testing-library/react';

import { CategoryType } from '../../../types';
import { renderWithRouterAndQueryClient } from '../../../utils/test-utils';
import { SearchCategory } from '../SearchCategory';

const categories: CategoryType[] = [
  'Ordinary Drink',
  'Cocktail',
  'Shake',
  'Other / Unknown',
  'Cocoa',
  'Shot',
  'Coffee / Tea',
  'Homemade Liqueur',
  'Punch / Party Drink',
  'Beer',
  'Soft Drink',
];

describe('SearchCategory', () => {
  it('Should match snapshot', async () => {
    const { asFragment } = renderWithRouterAndQueryClient(
      <SearchCategory searchCategory={'Ordinary Drink'} setSearchCategory={() => {}} />,
    );
    expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div>
        Loading...
      </div>
    </DocumentFragment>
  `);

    await waitFor(() => {
      for (let i = 0; i < categories.length; i++) {
        expect(screen.getByText(categories[i])).toBeDefined();
      }
    });
  });
});
