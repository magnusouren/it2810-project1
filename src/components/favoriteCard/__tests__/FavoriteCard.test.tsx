import { fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import { mockDrink } from '../../../../__mocks__/mockObjects';
import { renderWithRouterAndQueryClient } from '../../../utils/test-utils';
import { FavoriteCard } from '../FavoriteCard';

describe('FavoriteCard', () => {
  it('should render correctly', () => {
    const { container } = renderWithRouterAndQueryClient(
      <FavoriteCard drink={mockDrink} handleRemoveFavorite={vi.fn()} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should show correct category and glass', async () => {
    const { getByText } = renderWithRouterAndQueryClient(
      <FavoriteCard drink={mockDrink} handleRemoveFavorite={vi.fn()} />,
    );
    expect(getByText(`${mockDrink.strCategory} - ${mockDrink.strGlass}`)).toBeDefined();
  });

  it('should show correct name of drink', async () => {
    const { getByText } = renderWithRouterAndQueryClient(
      <FavoriteCard drink={mockDrink} handleRemoveFavorite={vi.fn()} />,
    );
    expect(getByText(mockDrink.strDrink)).toBeDefined();
  });

  it('should show correct image of drink', async () => {
    const { getByAltText } = renderWithRouterAndQueryClient(
      <FavoriteCard drink={mockDrink} handleRemoveFavorite={vi.fn()} />,
    );
    expect(getByAltText(mockDrink.strDrink)).toBeDefined();
  });

  it('should navigate to correct drink on click', async () => {
    const { getByText } = renderWithRouterAndQueryClient(
      <FavoriteCard drink={mockDrink} handleRemoveFavorite={vi.fn()} />,
    );
    fireEvent.click(getByText(mockDrink.strDrink));
    expect(window.location.pathname).toBe('/drink/11118');
  });

  it('should contain correct heading', async () => {
    const { getByRole } = renderWithRouterAndQueryClient(
      <FavoriteCard drink={mockDrink} handleRemoveFavorite={vi.fn()} />,
    );
    expect(getByRole('heading', { name: mockDrink.strDrink })).toBeDefined();
  });

  it('should call onRemoveFavorite when "hearth-minus" is clicked', async () => {
    const mock = vi.fn();
    const { getByText } = renderWithRouterAndQueryClient(
      <FavoriteCard drink={mockDrink} handleRemoveFavorite={mock} />,
    );
    getByText('heart_minus').click();
    expect(mock).toHaveBeenCalledWith(mockDrink.idDrink);
  });
});
