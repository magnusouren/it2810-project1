import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { SearchCategory } from '../components/searchCategory/SearchCategory';
import { CategoryType } from '../types';

export const Search: FC = () => {
  const { state } = useLocation();
  const [searchCategory, setSearchCategory] = useState<CategoryType | null>((state as CategoryType) || null);

  return (
    <>
      <SearchCategory searchCategory={searchCategory} setSearchCategory={setSearchCategory} />
    </>
  );
};
