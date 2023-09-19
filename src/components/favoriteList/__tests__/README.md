# FavriteList tests

## Mocking

For mocking the API-calls to fetch a drink we have mocked two different scenarios with two different ID's. This is for testing how to component handles 0, 1 or more drinks in the list.

The mocks are located in the `mockDrinks.ts` file.

### Mocks

```typescript
drinks: {
    [
        drinkId: '1',
        strDrink: 'Super Drink',
        ingredients: [],
        strGlass: 'Highball',
        strInstructions: 'Instructions for drink',
        strDrinkThumb: 'https://localhost:3000/drink/11008.jpg',
        strCategory: 'Category',
        strAlcoholic: 'Alcoholic',
        strIngredient1: 'Ingredient 1',
        strMeasure1: 'Measure 1',
        strIngredient2: 'Ingredient 2',
        strMeasure2: 'Measure 2',
    ]
}
```

```typescript
drinks: {
    [
        drinkId: '2',
        strDrink: 'Foo bar',
        ingredients: [],
        strGlass: 'Foo',
        strInstructions: 'Instructions for foo drink',
        strDrinkThumb: 'https://localhost:3000/drink/2.jpg',
        strCategory: 'Category',
        strAlcoholic: 'Alcoholic',
        strIngredient1: 'Ingredient 1',
        strMeasure1: 'Measure 1',
        strIngredient2: 'Ingredient 2',
        strMeasure2: 'Measure 2',
    ]
}

```

## Snapshot tests

We have also added snapshot tests for the component. This is to make sure that the component is rendered correctly and that it does not change over time. The snapshot tests are located in the `__snapshots__` folder. We are testing scenarios with 0, 1 and 2 drinks in the list.

## Rendering tests

We are testing that the header on the page is rendered correctly. For checking this we are searching for a heading-element with the correct text. This is for accepting different levels of headings if we want to change the level of the heading in the future.

## Length of list

We are testing that the length of the list is correct. This is for checking that the list is rendered correctly and that the length of the list is correct due to the number of drinks in the list passed as props.
