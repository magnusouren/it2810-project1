# FavriteList tests

## Mocking

For mocking the API-calls to fetch a drink we have mocked two different scenarios with two different ID's. This is for testing how to component handles 0, 1 or more drinks in the list.

The mocks are located in the `./__mocks__/mockObjects.ts` file.

### Mocks

```typescript
drinks: const mockDrink: Drink = {
  idDrink: '11118',
  strDrink: 'Super Drink',
  ingredients: [
    { ingredient: 'Ingredient 1', measure: 'Measure 1' },
    { ingredient: 'Ingredient 2', measure: 'Measure 2' },
  ],
  strGlass: 'Highball',
  strInstructions: 'Instructions for drink',
  strDrinkThumb: 'https://localhost:3000/drink/11118.jpg',
  strCategory: 'Category',
  strAlcoholic: 'Alcoholic',
};
```

```typescript
drinks: {
  [
    {
      idDrink: '11118',
      strDrink: 'Super Drink',
      ingredients: [
        { ingredient: 'Ingredient 1', measure: 'Measure 1' },
        { ingredient: 'Ingredient 2', measure: 'Measure 2' },
      ],
      strGlass: 'Highball',
      strInstructions: 'Instructions for drink',
      strDrinkThumb: 'https://localhost:3000/drink/11118.jpg',
      strCategory: 'Category',
      strAlcoholic: 'Alcoholic',
    },
    {
      idDrink: '22222',
      strDrink: 'Foo bar',
      ingredients: [],
      strGlass: 'Foo',
      strInstructions: 'Instructions for foo drink',
      strDrinkThumb: 'https://localhost:3000/drink/2.jpg',
      strCategory: 'Category',
      strAlcoholic: 'Alcoholic',
    },
  ];
}
```

## Snapshot tests

We have also added snapshot tests for the component. This is to make sure that the component is rendered correctly and that it does not change over time. The snapshot tests are located in the `__snapshots__` folder. We are testing scenarios with 0, 1 and 2 drinks in the list.

## Rendering tests

We are testing that the header on the page is rendered correctly. For checking this we are searching for a heading-element with the correct text. This is for accepting different levels of headings if we want to change the level of the heading in the future.

## Length of list

We are testing that the length of the list is correct. This is for checking that the list is rendered correctly and that the length of the list is correct due to the number of drinks in the list passed as props.
