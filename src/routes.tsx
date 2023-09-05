import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { App } from './pages/App.tsx';
import { NotFound } from './pages/NotFound.tsx';

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}></Route>
      <Route path='*' element={<NotFound />} />
    </>,
  ),
);
