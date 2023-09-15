# Categories tests

When rendering the categories component, an API call is made to fetch the categories. This call is mocked in the test to return a predefined list of categories. Its is now returning a shorter list of categories than the actual API call would return. This is done to make the test run faster.

## Snapshot tests

Takes snapshots of the categories component and compares them to the previous snapshot. If the snapshot has changed, the test will fail.
We tests with snapshots to make sure that the categories does not change unexpectedly.

## Rendering

Tests that the categories renders correctly with the correct content when a list of categories is mocked.

## API call mock

Instead of making an actual API call, we mock the API call to return a predefined list of categories. This is done to make the test run faster and to make sure that the test does not fail because of an API call failing.

### Mock structure

The mock is structured in the following way:

```javascript
{
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
  ];
}
```
