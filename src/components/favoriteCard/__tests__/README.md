# FavoriteCard

## Snapshot tests

We have also added snapshot tests for the component. This is to make sure that the component is rendered correctly and that it does not change over time. The snapshot tests are located in the `__snapshots__` folder.

## Mocking

We have mocked a drink object to be used in the tests. This object has fictive data that is used for test purposes. The object is passed as prop to the component and has type Drink.

### Mock object

```typescript
const mockDrink: Drink = {
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

## Rendering

To test correct rendering we are testing that component are rendering correct due to the given props. The props are comming from the mocked object.

We are testing that the component is rendering the correct image and text.

We are testing that the component is rendering with a heading, but not with a specific level. This is because the level of the heading is not important for the component and could be changed in the future.

We are not testing rendering of the component without props, since the component is not supposed to be rendered without props and the component will throw an error if rendered without props.

## Interaction

We are testing that the component is redirecting to the correct path when the heading is clicked on.
