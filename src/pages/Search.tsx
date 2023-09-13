import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { CategoryType } from '../types';

interface SearchProps {
  searchCategory?: CategoryType;
}

interface Cat {
  name: string;
}

export const Search: FC<SearchProps> = ({ searchCategory }) => {
  const { state } = useLocation();
  const [Cat, setCat] = useState<Cat | null>(null);

  const { data, isLoading, isSuccess } = useQuery<CategoryType[]>(['categories'], () =>
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((res) => res.data.drinks.map((drink: { strCategory: string }) => drink.strCategory)),
  );

  useEffect(() => {
    if (searchCategory) {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchCategory}`)
        .then((res) => console.log(res));
    } else if (Cat) {
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${Cat.name}`).then((res) => console.log(res));
    }
  }, [Cat, searchCategory]);
  console.log(state);
  console.log(searchCategory);
  if (isLoading) return <div>Loading...</div>;
  !state && window.location.replace('/');

  const category = state as CategoryType;

  return (
    <>
      <div>
        {data && isSuccess && (
          <select
            placeholder='Filter by category'
            onChange={(e) => {
              setCat({ name: e.target.value });
            }}
          >
            {data.sort().map((category: CategoryType) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        )}
        {category}
      </div>
    </>
  );
};
