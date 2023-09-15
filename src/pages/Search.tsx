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
  const { data } = useQuery<SimpleDrink[]>([searchCategory], async () => {
    return axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchCategory || 'Beer'}`)
      .then((res) => {
        const drinkData = res.data.drinks;
        const drinks: SimpleDrink[] = [];
        for (let i = 0; i < drinkData.length; i++) {
          const drink: SimpleDrink = {
            strDrink: drinkData[i].strDrink,
            strDrinkThumb: drinkData[i].strDrinkThumb,
            idDrink: drinkData[i].idDrink,
          };
          drinks.push(drink);
        }
        return drinks;
      });
  });

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
