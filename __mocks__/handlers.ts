import { rest } from 'msw';
export const handlers = [
  // Handles a POST /login request

  rest.get('https://www.thecocktaildb.com/api/json/v1/1/list.php', (req, res, ctx) => {
    req.url.searchParams.set('c', 'list');
    return res(
      ctx.status(200),
      ctx.json({
        drinks: [
          {
            strCategory: 'Beer',
          },
          {
            strCategory: 'Cocoa',
          },
          {
            strCategory: 'Coffee / Tea',
          },
        ],
      }),
    );
  }),

  rest.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php', (req, res, ctx) => {
    if (req.url.searchParams.get('i') === '0') {
      return res(
        ctx.status(200),
        ctx.json({
          drinks: [],
        }),
      );
    }
    req.url.searchParams.set('i', '11118');
    return res(
      ctx.status(200),
      ctx.json({
        drinks: [
          {
            drinkId: '11118',
            strDrink: 'Super Drink',
            ingredients: [],
            strGlass: 'Highball',
            strInstructions: 'Instructions for drink',
            strDrinkThumb: 'https://localhost:3000/drink/11118.jpg',
            strCategory: 'Category',
            strAlcoholic: 'Alcoholic',
            strIngredient1: 'Ingredient 1',
            strMeasure1: 'Measure 1',
            strIngredient2: 'Ingredient 2',
            strMeasure2: 'Measure 2',
          },
        ],
      }),
    );
  }),

  rest.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php', (req, res, ctx) => {
    req.url.searchParams.set('i', '0');
    return res(
      ctx.status(200),
      ctx.json({
        drinks: [],
      }),
    );
  }),
];
