import { getFavorites, isFavorite, toggleFavorite } from '../persistency';

describe('Persistency', () => {
  afterEach(() => {
    localStorage.clear();
  });
  it('should return an empty array if there are no favorites', () => {
    const favorites = getFavorites();
    expect(favorites).toEqual([]);
  });

  it('should add a favorite', () => {
    toggleFavorite('1');
    const favorites = getFavorites();
    expect(favorites).toEqual(['1']);
  });

  it('should remove a favorite', () => {
    toggleFavorite('1');
    toggleFavorite('1');
    const favorites = getFavorites();
    expect(favorites).toEqual([]);
  });

  it('should return true if the drink is a favorite', () => {
    toggleFavorite('1');
    const favorite = isFavorite('1');
    expect(favorite).toEqual(true);
  });
});
