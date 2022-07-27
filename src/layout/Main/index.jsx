import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../Container';

const Main = ({ children }) => {
  return (
    <div content='main'>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default Main;
