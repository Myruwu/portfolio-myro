import React from 'react';
import { Link } from 'react-scroll';
// images
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
          {/* button */}
          <Link
          to='contact'
          activeClass='active'
          smooth={true}
          spy={true}>
          <button className='btn btn-sm'>Contact Me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
