import './MobileNav.css';

import { FaCocktail } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const MobileNav = () => {
  return (
    <>
      <Link to={'/'} className={'logo'}>
        Enjoy my cocktail <FaCocktail />
      </Link>
      <Link to={'/'} className={'logoIcon'}>
        <FaCocktail />
      </Link>
      <div className='links'>
        <Link to={'/'} className='link'>
          Home
        </Link>
        <Link to={'/search/'} className='link'>
          Search
        </Link>
        <Link to={'/favorites/'} className='link'>
          Favorites
        </Link>
      </div>
    </>
  );
};