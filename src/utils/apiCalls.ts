import axios from 'axios';

export const fetchCocktailById = async (id: string) => {
  const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  return response.data;
};
