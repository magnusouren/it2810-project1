# Category tests

## Snapshot tests

Take snapshots of the DrinkOfTheDay component and compare them to the previous snapshot. If the snapshot has changed, the test will fail.
We tests with snapshots to make sure that the category does not change unexpectedly.

## Rendering

Tests that the drink renders correctly with the correct content when a drink is fetched. Since the API call is mocked, the test will not fail if the API call fails. The mocked return-values are found in `./__mocks__/mockedObjects.ts`.

- Page heading is a constant, but we are testing that the header is rendered as a heading.

- The drink name is depending on the drink fetched. We are testing that the drink name has correct value and that it is rendered as a heading-element.
- The details is depending on the drink fetched. We are testing that the details has correct value and that it is rendered with correct content.
- The drink image is depending on the drink fetched. We are testing that the drink image has correct value and that it contains the img-url.

## Correct links and navigation

Tests that the drink of the day links to the correct pages and that the navigation works as expected.
