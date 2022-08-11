import React, { FC } from 'react';
import { routesPaths } from '@routes/index';
import { Link } from 'react-router-dom';
import styles from './index.module.sass';

const navigationLinks = [
  {
    name: 'Characters',
    path: routesPaths.CHARACTERS,
  },
];

const Navigation: FC = () => {
  return (
    <nav className={styles.Navigation}>
      {navigationLinks.map((link) => (
        <Link className={styles.NavigationLink} key={link.name} to={link.path}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
