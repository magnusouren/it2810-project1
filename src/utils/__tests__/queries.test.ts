import { fetchDrinkById } from '../queries';

const expectedDrink = {
  idDrink: '11118',
  strDrink: 'Super Drink',
  strGlass: 'Highball',
  strInstructions: 'Instructions for drink',
  strDrinkThumb: 'https://localhost:3000/drink/11118.jpg',
  strCategory: 'Category',
  strAlcoholic: 'Alcoholic',
  ingredients: [
    { ingredient: 'Ingredient 1', measure: 'Measure 1' },
    { ingredient: 'Ingredient 2', measure: 'Measure 2' },
  ],
};

describe('queries - fetchDrinkById', () => {
  it('it should return correct object', async () => {
    expect(await fetchDrinkById('1')).toEqual(expectedDrink);
  });

  it('it should return null when id is invalid', async () => {
    expect(await fetchDrinkById('0')).toEqual(null);
  });

  it('it should return null when id is not provided', async () => {
    expect(await fetchDrinkById()).toEqual(null);
  });
});
