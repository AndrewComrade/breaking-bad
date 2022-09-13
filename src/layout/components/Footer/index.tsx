import React from 'react';

import styles from './index.module.sass';
import Container from '@layout/components/Container';

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
