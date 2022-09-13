import Container from '@layout/Container';
import React from 'react';

import styles from './index.module.sass';

const HomePage = () => {
  return (
    <div className={styles.Home}>
      <Container>
        <h1>SAY MY NAME!</h1>
      </Container>
    </div>
  );
};

export default HomePage;
