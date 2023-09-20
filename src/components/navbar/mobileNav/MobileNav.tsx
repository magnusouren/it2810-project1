import './MobileNav.css';

import { FaCocktail } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

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
        <NavLink to={'/'} className='link'>
          Home
        </NavLink>
        <NavLink to={'/drinks'} className='link'>
          Drinks
        </NavLink>
        <NavLink to={'/favorites'} className='link'>
          Favorites
        </NavLink>
      </div>
    </>
  );
};
