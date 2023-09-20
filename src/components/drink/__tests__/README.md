# DrinkCard tests

## Snapshot tests

Take snapshots of the DrinkCard component and compare them to the previous snapshot. If the snapshot has changed, the test will fail.
We test with snapshots to make sure that the layout of the DrinkCard does not change unexpectedly.

## Loading

Tests that the screen renders a loading screen when the Drink object is undefined or not fetched yet.

## Error when fetching

Tests that the screen renders an error message when the Drink id is illegal.

## Rendering

Tests that the DrinkCard renders correctly with the correct content when an id is specified as a dynamic route.

A Drink object is passed as prop when rendering the DrinkCard. The DrinkCard should render the following correctly depending on the Drink object passed as prop:

- Drink name as heading
- Drink image
- Drink category
- Drink glass type
- Drink alcoholic type
- Drink instructions
- Drink ingredients (iterating over the ingredients to make sure that all ingredients are rendered)

We are also testing that static content is rendered correctly.

## Correct links and navigation

Tests that the "Go Back" button works as expected.
