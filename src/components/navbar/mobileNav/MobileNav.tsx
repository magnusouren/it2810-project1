import './MobileNav.css';

import { FaCocktail } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const MobileNav = () => {
  return (
    <>
      <Link to={'/'} className={'mobileLogo'}>
        Enjoy my cocktail <FaCocktail />
      </Link>
      <div className='mobileLinks'>
        <Link to={'/search/'} className='mobileLink'>
          Search
        </Link>
        <Link to={'/favorites/'} className='mobileLink'>
          Favorites
        </Link>
      </div>
    </>
  );
};
