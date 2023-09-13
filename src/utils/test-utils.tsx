import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Function to render a component wrapped inside a browserrouter for testing purposes
export const renderWithRouter = (component: JSX.Element) => render(<BrowserRouter>{component}</BrowserRouter>);

const queryClient = new QueryClient();

export const renderWithRouterAndQueryClient = (component: JSX.Element) =>
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{component}</BrowserRouter>
    </QueryClientProvider>,
  );
