import React, { FC } from 'react';
import Header from '@layout/components/Header';
import Footer from '@layout/components/Footer';

import styles from './index.module.sass';

interface MainProps {
  children: React.ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return (
    <div className={styles.MainGrid}>
      <Header />
      <main className={styles.Main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Main;
