import React from 'react';
import styles from './index.module.sass';
import Navigation from '@layout/Navigation';
import Logo from '@components/Logo';
import Container from '@layout/Container';

const Header = () => {
  return (
    <header className={styles.Header}>
      <Container>
        <div className={styles.Wrapper}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
