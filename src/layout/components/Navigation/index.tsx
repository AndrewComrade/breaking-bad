import React from 'react';
import { routesPaths } from '@routes/index';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './index.module.sass';

const navigationLinks = [
  {
    label: 'Characters',
    path: routesPaths.CHARACTERS,
  },
  {
    label: 'Episodes',
    path: routesPaths.EPISODES,
  },
];

const cx = classNames.bind(styles);

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.Navigation}>
      {navigationLinks.map((link) => (
        <Link
          className={cx(styles.Link, {
            LinkActive: location.pathname === link.path,
          })}
          key={link.label}
          to={link.path}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
