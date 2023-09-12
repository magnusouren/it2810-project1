import { screen, waitFor } from '@testing-library/react';

import { renderWithRouterAndQueryClient } from '../../../utils/test-utils';
import { Home } from '../Home';

describe('Accordion test', () => {
  it('Should match snapshot', async () => {
    const { container } = renderWithRouterAndQueryClient(<Home />);
    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });

  it('Should show title and links', async () => {
    const { container } = renderWithRouterAndQueryClient(<Home />);
    await waitFor(() => {
      expect(container.innerHTML).toContain('Beer');
    });
    expect(screen.getByText('Beer')).toBeTruthy();
  });
});
