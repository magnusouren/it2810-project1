import './SearchCategory.css';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC, useEffect } from 'react';

import { CategoryType } from '../../types';

interface SearchCategoryProps {
  searchCategory: string | null;
  setSearchCategory: (category: CategoryType | null) => void;
}

export const SearchCategory: FC<SearchCategoryProps> = ({ searchCategory, setSearchCategory }) => {
  const { data, isLoading, isSuccess } = useQuery<CategoryType[]>(['categories'], () =>
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((res) => res.data.drinks.map((drink: { strCategory: string }) => drink.strCategory)),
  );

  const {
    data: drinks,
    isLoading: isLoadingDrinks,
    isSuccess: isSuccessDrinks,
  } = useQuery<CategoryType[]>(
    [searchCategory],
    () =>
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchCategory}`)
        .then((res) => res.data.drinks.map((drink: { strDrink: string }) => drink.strDrink)),
    // { enabled: !!searchCategory },
  );

  useEffect(() => {
    if (searchCategory !== null) {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchCategory}`)
        .then((res) => console.log(res));

      //.then((res) => setDrinks(res.data.drinks)); // tilpasses til hvordan dataobjektet ser ut
    }
  }, [drinks, searchCategory]);

  if (isLoading) return <div>Loading...</div>;

  if (isLoadingDrinks) return <div>Loading...</div>;

  if (searchCategory && isSuccessDrinks) {
    console.log(searchCategory + 'her');
  }

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
