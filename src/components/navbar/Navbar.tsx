import './Navbar.css';

import { FaCocktail } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to={'/'} className={'logo'}>
          Enjoy my cocktail <FaCocktail />
        </Link>
      </li>
      <div className='links'>
        <li className='link'>
          <Link to={'/search'}>Search</Link>
        </li>
        <li className='link'>
          <Link to={'/favorites'}>Favorites</Link>
        </li>
      </div>
    </ul>
  </nav>
);
