import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesPaths } from '../../routes';
import HomePage from '../../pages/HomePage';
import CharactersPage from '../../pages/CharactersPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={routesPaths.HOME} element={<HomePage />} />
      <Route path={routesPaths.CHARACTERS} element={<CharactersPage />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;
