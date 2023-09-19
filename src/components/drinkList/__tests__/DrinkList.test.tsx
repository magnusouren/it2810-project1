import { renderWithRouterAndQueryClient } from '../../../utils/test-utils';
import { DrinkList } from '../DrinkList';

describe('DrinkList', () => {
  it('Should match snapshot', () => {
    const { container } = renderWithRouterAndQueryClient(<DrinkList drinks={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
