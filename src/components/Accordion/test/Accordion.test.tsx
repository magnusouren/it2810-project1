import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import Accordion from '../Accordion';

// Les mer: https://eternaldev.com/blog/testing-a-react-application-with-vitest

describe('Accordion test', () => {
  it('Should match snapshot', () => {
    const { container } = render(
      <Accordion title='Testing'>
        <h4>Content</h4>
      </Accordion>,
    );

    expect(container).toMatchSnapshot();
  });

  it('Should show title', () => {
    render(
      <Accordion title='Testing'>
        <h4>Content</h4>
      </Accordion>,
    );

    expect(screen.getByText(/Testing/i)).toBeDefined();
    expect(screen.getByRole('heading', { name: /Testing/i })).toBeDefined();
  });
});
