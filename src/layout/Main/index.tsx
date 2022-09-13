import React from 'react';
import Header from '@layout/Header';
import Footer from '@layout/Footer';

import styles from './index.module.sass';

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <div className={styles.Grid}>
      <Header />
      <main className={styles.Main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Main;
