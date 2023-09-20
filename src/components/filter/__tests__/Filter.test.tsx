import { screen, waitFor } from '@testing-library/react';

import { renderWithRouterAndQueryClient } from '../../../utils/test-utils';
import { Filter } from '../Filter';

describe('Filter', () => {
  it('Should match snapshot', async () => {
    const { asFragment } = renderWithRouterAndQueryClient(
      <Filter searchCategory={'Ordinary Drink'} setSearchCategory={() => {}} />,
    );

    await waitFor(() => {
      expect(screen.getByText('Beer')).toBeDefined();
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
