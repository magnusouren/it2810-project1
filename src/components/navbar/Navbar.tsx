import './Navbar.css';

import { DesktopNav } from './desktopNav/DesktopNav';
import { MobileNav } from './mobileNav/MobileNav';

export const Navbar = () => (
  <div>
    <nav className='desktop'>
      <DesktopNav />
    </nav>
    <nav className='mobile'>
      <MobileNav />
    </nav>
  </div>
);
