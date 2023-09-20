import { rest } from 'msw';

import { alternativeDrink, defaultDrinkResponse } from './mockObjects';
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
    if (req.url.searchParams.get('i') === '2') {
      return res(
        ctx.status(200),
        ctx.json({
          drinks: [alternativeDrink],
        }),
      );
    }
    req.url.searchParams.set('i', '11118');
    return res(
      ctx.status(200),
      ctx.json({
        drinks: [defaultDrinkResponse],
      }),
    );
  }),

  rest.get('https://www.thecocktaildb.com/api/json/v1/1/random.php', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        drinks: [
          {
            idDrink: '9118',
            strDrink: 'Random Drink',
            strDrinkThumb: 'https://localhost:3000/drink/11118.jpg',
            strCategory: 'Category',
            strGlass: 'Highball',
            strAlcoholic: 'Alcoholic',
          },
        ],
      }),
    );
  }),
];
