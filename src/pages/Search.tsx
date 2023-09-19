import { useLocation } from 'react-router-dom';

import { CategoryType } from '../types';

export const Search = () => {
  const { state } = useLocation();

  !state && window.location.replace('/');

  const category = state as CategoryType;

  return <>{category}</>;
};
