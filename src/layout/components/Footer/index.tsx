import React, { FC } from 'react';

import styles from './index.module.sass';
import Container from '@layout/components/Container';

const Footer: FC = () => {
  return (
    <footer className={styles.Footer}>
      <Container>
        <div className={styles.FooterBody}>Footer</div>
      </Container>
    </footer>
  );
};

export default Footer;
