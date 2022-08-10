import React from 'react';
import styles from './index.module.sass';
import Navigation from '../Navigation';
import Logo from '../../../components/Logo';
import Container from '../Container';

const Header = () => {
  return (
    <div className={styles.Header}>
      <Container>
        <div className={styles.HeaderWrapper}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </div>
  );
};

export default Header;
