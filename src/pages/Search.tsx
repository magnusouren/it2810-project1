import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { SearchCategory } from '../components/searchCategory/SearchCategory';
import { CategoryType } from '../types';

export const Search: FC = () => {
  const { state } = useLocation();
  const [searchCategory, setSearchCategory] = useState<CategoryType | null>((state as CategoryType) || null);

  // const [cat, setCat] = useState<CategoryType | null>((state as CategoryType) || null);
  // // const [drinks, setDrinks] = useState<Drink[] | null>(null); // State med drinks som er resultatet av kallet fra API

  // const { data, isLoading, isSuccess } = useQuery<CategoryType[]>(['categories'], () =>
  //   axios
  //     .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
  //     .then((res) => res.data.drinks.map((drink: { strCategory: string }) => drink.strCategory)),
  // );

  // useEffect(() => {
  //   if (cat) {
  //     axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${cat}`).then((res) => console.log(res));

  //     //.then((res) => setDrinks(res.data.drinks)); // tilpasses til hvordan dataobjektet ser ut
  //   } else {
  //     axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${cat}`).then((res) => console.log(res));
  //   }
  // }, [cat]);

  // console.log(state);
  // console.log(cat);

  //if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {/* <SearchCategory searchCategory={cat} setSearchCategory={setCat} /> */}
      <SearchCategory searchCategory={searchCategory} setSearchCategory={setSearchCategory} />
      {/* <div>
        {data && isSuccess && (
          <select
            placeholder='Filter by category'
            onChange={(e) => {
              setCat(e.target.value as CategoryType);
            }}
          >
            {data.sort().map((category: CategoryType) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        )}
        {cat}
      </div> */}
    </>
  );
};
