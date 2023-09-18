import nock from 'nock';

import { fetchDrinkById } from '../queries';

const mockedDrink = {
  idDrink: '1',
  strDrink: 'Super Drink',
  strGlass: 'Highball',
  strInstructions: 'Instructions for drink',
  strDrinkThumb: 'https://localhost:3000/drink/11008.jpg',
  strCategory: 'Category',
  strAlcoholic: 'Alcoholic',
  strIngredient1: 'Ingredient 1',
  strMeasure1: 'Measure 1',
  strIngredient2: 'Ingredient 2',
  strMeasure2: 'Measure 2',
};

const expectedDrink = {
  idDrink: '1',
  strDrink: 'Super Drink',
  strGlass: 'Highball',
  strInstructions: 'Instructions for drink',
  strDrinkThumb: 'https://localhost:3000/drink/11008.jpg',
  strCategory: 'Category',
  strAlcoholic: 'Alcoholic',
  ingredients: [
    { ingredient: 'Ingredient 1', measure: 'Measure 1' },
    { ingredient: 'Ingredient 2', measure: 'Measure 2' },
  ],
};

describe('queries - fetchDrinkById', () => {
  beforeAll(() => {
    nock.disableNetConnect();
  });
  afterAll(() => {
    nock.enableNetConnect();
  });

  it('it should return correct object', async () => {
    nock('https://www.thecocktaildb.com')
      .get('/api/json/v1/1/lookup.php?i=1')
      .reply(200, {
        drinks: [mockedDrink],
      });
    expect(await fetchDrinkById('1')).toEqual(expectedDrink);
  });

  it('it should return null when id is invalid', async () => {
    nock('https://www.thecocktaildb.com').get('/api/json/v1/1/lookup.php?i=1').reply(200, {
      drinks: null,
    });
    expect(await fetchDrinkById('1')).toEqual(null);
  });
});
