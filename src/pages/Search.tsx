import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { DrinkList } from '../components/drinkList/DrinkList';
import { SearchCategory } from '../components/searchCategory/SearchCategory';
import { CategoryType, SimpleDrink } from '../types';

export const Search: FC = () => {
  const { state } = useLocation();
  const [searchCategory, setSearchCategory] = useState<CategoryType | null>((state as CategoryType) || null);
  const { data } = useQuery<SimpleDrink[]>([searchCategory], () =>
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchCategory || 'Beer'}`)
      .then((res) =>
        res.data.drinks.map(
          (drink: { drinkID: string; strDrink: string; strDrinkThumb: string }) => (
            drink.drinkID, drink.strDrink, drink.strDrinkThumb
          ),
        ),
      ),
  );
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <SearchCategory searchCategory={searchCategory} setSearchCategory={setSearchCategory} />
      <DrinkList drinks={data} />
    </>
  );
};
