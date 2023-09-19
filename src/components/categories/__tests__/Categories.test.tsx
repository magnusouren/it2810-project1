import { screen, waitFor } from '@testing-library/react';

import { renderWithRouterAndQueryClient } from '../../../utils/test-utils';
import { Categories } from '../Categories';

describe('Categories', () => {
  it('Should match snapshot', async () => {
    const { asFragment } = renderWithRouterAndQueryClient(<Categories />);

    await waitFor(() => {
      expect(screen.getByText('Beer')).toBeDefined();
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
