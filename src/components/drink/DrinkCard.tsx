import './DrinkCard.css';

import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Drink } from '../../types';
import { fetchDrinkById } from '../../utils/queries';
import { FavoriteButton } from '../favoriteButton/FavoriteButton';

export const DrinkCard: FC = () => {
  const { id } = useParams();
  // useQuery hook
  const { data, isLoading, isSuccess } = useQuery<Drink | null>(['drink', id], () => fetchDrinkById(id));

  if (isLoading) return <div>Loading...</div>;

  if (!isSuccess) return <div>Something went wrong</div>;

  if (!data) return <div>No drink was found...</div>;

  return (
    <div className='drink-container'>
      <div className='return-button-container'>
        <Link to='/drinks' className='return-button'>
          <span className='material-symbols-outlined'>arrow_back_ios_new</span>
        </Link>
      </div>
      <div className='drink-header'>
        <h1>{data.strDrink}</h1>
      </div>
      <div className='favorite-button-container'>
        <FavoriteButton id={id || ''} />
      </div>
      <div className='image-container'>
        <img src={data.strDrinkThumb} alt={data.strDrink + 'image'} />
      </div>
      <div className='info'>
        <p id='drink-category'>{data.strCategory}</p>
        <p id='drink-glass'>{data.strGlass}</p>
        <p id='drink-alcoholic'>{data.strAlcoholic}</p>
      </div>
      <div className='ingredients'>
        <h3 className='section-header'>Ingredients</h3>
        <ul className='ingredients-list'>
          {data.ingredients.map((ingredient, index) => (
            <li key={index}>
              <div className='measure'>{ingredient.measure == null ? '' : ingredient.measure}</div>
              <div className='ingredient'>{ingredient.ingredient}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className='instructions'>
        <h3 className='section-header'>Instructions</h3>
        <p>{data.strInstructions}</p>
      </div>
    </div>
  );
};
