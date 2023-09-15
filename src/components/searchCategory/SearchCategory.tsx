import './SearchCategory.css';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC } from 'react';

import { CategoryType } from '../../types';

interface SearchCategoryProps {
  searchCategory: string | null;
  setSearchCategory: (category: CategoryType | null) => void;
}

export const SearchCategory: FC<SearchCategoryProps> = ({ setSearchCategory }) => {
  const { data, isLoading, isSuccess } = useQuery<CategoryType[]>(['categories'], () =>
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((res) => res.data.drinks.map((drink: { strCategory: string }) => drink.strCategory)),
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data && isSuccess && (
        <select
          placeholder='Filter by category'
          onChange={(e) => {
            setSearchCategory(e.target.value as CategoryType);
          }}
        >
          {data.sort().map((category: CategoryType) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
