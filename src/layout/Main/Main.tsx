import React, { FC } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

interface MainProps {
  children: React.ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='main'>{children}</main>
      <Footer />
    </>
  );
};

export default Main;
