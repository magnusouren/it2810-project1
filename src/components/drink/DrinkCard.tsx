import axios, { isCancel } from 'axios';
import { FC, useEffect, useState } from 'react';

interface Ingredient {
  ingredient: string;
  measure: string;
}

interface Drink {
  strDrink: string;
  ingredients: Array<Ingredient>;
  strGlass: string | null;
  strInstructions: string;
  strDrinkThumb: string;
  strVideo: string | null;
  strCategory: string;
  strAlcoholic: string;
}

export const DrinkCard: FC<{ id: string }> = ({ id }) => {
  const [drink, setDrink] = useState<Drink | null>(null);
  const [noMatch, setNoMatch] = useState(false);

  useEffect(() => {
    console.log('Fetching drink...');

    // eslint-disable-next-line import/no-named-as-default-member
    const cancelToken = axios.CancelToken.source();

    // Fetch a random drink from the API
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`, { cancelToken: cancelToken.token })
      .then((response) => {
        if (response.data.drinks === null) {
          setNoMatch(true);
          return;
        }
        setNoMatch(false);

        // Extract drink data
        const drinkData = response.data.drinks[0];
        const ingredients: Array<Ingredient> = [];

        // Extract ingredients
        for (let i = 1; i <= 15; i++) {
          const ingredient: string = drinkData[`strIngredient${i}`];
          const measure: string = drinkData[`strMeasure${i}`];
          if (ingredient) {
            ingredients.push({ ingredient, measure });
          } else {
            break;
          }
        }

        drinkData.ingredients = ingredients;
        setDrink(drinkData);
      })
      .catch((error) => {
        if (isCancel(error)) {
          console.log('Request cancelled', error.message);
        } else {
          console.error('Error fetching drink:', error);
        }
      });

    return () => {
      console.log('Cancelling drink request...');
      cancelToken.cancel();
    };
  }, []);

  if (noMatch) {
    return <div>No drink was found...</div>;
  }

  if (!drink) {
    return <div>Loading...</div>;
  }

  return (
    <div className='drinkContainer'>
      <h2>{drink.strDrink}</h2>
      <div className='imageContainer'>
        <img src={drink.strDrinkThumb} alt={drink.strDrink + 'image'} />
      </div>
      <p>{drink.strVideo}</p>
      <div className='misc'>
        <p>{drink.strCategory}</p>
        <p>{drink.strGlass}</p>
        <p>{drink.strAlcoholic}</p>
      </div>
      <div>
        <h3>Instructions</h3>
        <p>{drink.strInstructions}</p>
      </div>
      <ul className='ingredients'>
        {drink.ingredients.map((ingredient, index) => (
          <li key={index}>
            <div className='measure'>{ingredient.measure == null ? '' : ingredient.measure}</div>
            <div className='ingredient'>{ingredient.ingredient}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
