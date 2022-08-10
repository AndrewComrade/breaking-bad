import React, { FC } from 'react';
import styles from './index.module.sass';
import logo from '../../assets/icons/logo.svg';
import { Link } from 'react-router-dom';
import { routesPaths } from '../../routes';

const Logo: FC = () => {
  return (
    <Link to={routesPaths.HOME}>
      <div className={styles.LogoWrapper}>
        <img className={styles.LogoImage} src={logo} alt='Breaking bad logo' />
      </div>
    </Link>
  );
};

export default Logo;
