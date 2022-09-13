import React from 'react';

import styles from './index.module.sass';
import Container from '@layout/Container';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Container>
        <div className={styles.FooterBody}>Footer</div>
      </Container>
    </footer>
  );
};

export default Footer;
