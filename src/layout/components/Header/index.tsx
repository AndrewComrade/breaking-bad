import React from 'react';
import styles from './index.module.sass';
import Navigation from '@layout/components/Navigation';
import Logo from '@components/Logo';
import Container from '@layout/components/Container';

const Header = () => {
  return (
    <header className={styles.Header}>
      <Container>
        <div className={styles.HeaderWrapper}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
