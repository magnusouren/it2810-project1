import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Fucntion to render a component wrapped inside a browserrouter for testing purposes
export const renderWithRouter = (component: JSX.Element) => render(<BrowserRouter>{component}</BrowserRouter>);
