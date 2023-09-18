import './SearchCategory.css';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC, useState } from 'react';

import { CategoryType } from '../../types';

interface SearchCategoryProps {
  searchCategory: string | null;
  setSearchCategory: (category: CategoryType | null) => void;
}

export const SearchCategory: FC<SearchCategoryProps> = ({ searchCategory, setSearchCategory }) => {
  const [filter, setFilter] = useState(searchCategory || '');
  const { data, isSuccess } = useQuery<CategoryType[]>(['categories'], () =>
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((res) => res.data.drinks.map((drink: { strCategory: string }) => drink.strCategory)),
  );

  // if (isLoading) return <div>Loading...</div>;

  return (
    <div className='categoryDiv'>
      {data && isSuccess && (
        <select
          className='searchCategory'
          placeholder='Filter by category'
          value={filter}
          onChange={(e) => {
            setSearchCategory(e.target.value as CategoryType);
            setFilter(e.target.value as CategoryType);
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
