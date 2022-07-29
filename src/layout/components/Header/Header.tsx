import React from 'react';
import { routesPaths } from '../../../routes';
import { Link } from 'react-router-dom';

const navigationLinks = [
  {
    name: 'Home',
    path: routesPaths.HOME,
  },
  {
    name: 'Characters',
    path: routesPaths.CHARACTERS,
  },
];

const Header = () => {
  return (
    <div className='header'>
      <nav>
        {navigationLinks.map((link) => (
          <Link key={link.name} to={link.path}>
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
