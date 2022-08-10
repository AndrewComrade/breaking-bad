import React, { FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import styles from './index.module.sass';

interface MainProps {
  children: React.ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.Main}>{children}</main>
      <Footer />
    </>
  );
};

export default Main;
