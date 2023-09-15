import './Navbar.css';

import { FaCocktail } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { MobileNav } from './mobile/MobileNav';

export const Navbar = () => (
  <div>
    <nav className='desktop'>
      <ul>
        <li>
          <Link to={'/'} className={'logo'}>
            Enjoy my cocktail <FaCocktail />
          </Link>
        </li>
        <div className='links'>
          <li className='link'>
            <Link to={'/search/'}>Search</Link>
          </li>
          <li className='link'>
            <Link to={'/favorites/'}>Favorites</Link>
          </li>
        </div>
      </ul>
    </nav>
    <nav className='mobile'>
      <MobileNav />
    </nav>
  </div>
);
