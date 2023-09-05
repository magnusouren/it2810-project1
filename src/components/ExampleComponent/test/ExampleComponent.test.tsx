import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { ExampleComponent } from '../ExampleComponent';

// Les mer: https://eternaldev.com/blog/testing-a-react-application-with-vitest

describe('Accordion test', () => {
  it('Should match snapshot', () => {
    const { container } = render(
      <ExampleComponent title='Testing'>
        <h4>Content</h4>
      </ExampleComponent>,
    );

    expect(container).toMatchSnapshot();
  });

  it('Should show title', () => {
    render(
      <ExampleComponent title='Testing'>
        <h4>Content</h4>
      </ExampleComponent>,
    );

    expect(screen.getByText(/Testing/i)).toBeDefined();
    expect(screen.getByRole('heading', { name: /Testing/i })).toBeDefined();
  });
});
