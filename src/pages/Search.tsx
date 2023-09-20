import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { DrinkList } from '../components/drinkList/DrinkList';
import { SearchCategory } from '../components/searchCategory/SearchCategory';
import { CategoryType, SimpleDrinkType } from '../types';
import { getSessionFilter, setSessionFilter } from '../utils/persistency';

export const Search: FC = () => {
  const { state } = useLocation();
  const [searchCategory, setSearchCategory] = useState<CategoryType | null>(
    (state as CategoryType) || (getSessionFilter() as CategoryType) || null,
  );

  if (state) {
    setSessionFilter(state as CategoryType);
  }

  const { data } = useQuery<SimpleDrinkType[]>([searchCategory], async () => {
    return axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchCategory || 'Beer'}`)
      .then((res) => {
        const drinkData = res.data.drinks;
        const drinks: SimpleDrinkType[] = [];
        for (let i = 0; i < drinkData.length; i++) {
          const drink: SimpleDrinkType = {
            strDrink: drinkData[i].strDrink,
            strDrinkThumb: drinkData[i].strDrinkThumb,
            idDrink: drinkData[i].idDrink,
          };
          drinks.push(drink);
        }
        return drinks;
      });
  });

  return (
    <>
      <SearchCategory searchCategory={searchCategory} setSearchCategory={setSearchCategory} />
      <DrinkList drinks={data} />
    </>
  );
};
