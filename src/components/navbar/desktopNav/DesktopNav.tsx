import './DesktopNav.css';

import { FaCocktail } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

export const DesktopNav = () => (
  <ul>
    <li>
      <Link to={'/'} className={'logo'}>
        Enjoy my cocktail <FaCocktail />
      </Link>
    </li>
    <div className='links'>
      <li className='link'>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li className='link'>
        <NavLink to={'/drinks'}>Drinks</NavLink>
      </li>
      <li className='link'>
        <NavLink to={'/favorites'}>Favorites</NavLink>
      </li>
    </div>
  </ul>
);
