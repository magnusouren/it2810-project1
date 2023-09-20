import './DesktopNav.css';

import { FaCocktail } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const DesktopNav = () => (
  <ul>
    <li>
      <Link to={'/'} className={'logo'}>
        Enjoy my cocktail <FaCocktail />
      </Link>
    </li>
    <div className='links'>
      <li className='link'>
        <Link to={'/'}>Home</Link>
      </li>
      <li className='link'>
        <Link to={'/drinks/'}>Drinks</Link>
      </li>
      <li className='link'>
        <Link to={'/favorites/'}>Favorites</Link>
      </li>
    </div>
  </ul>
);
