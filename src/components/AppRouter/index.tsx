import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesPaths } from '@routes/index';
import HomePage from '@pages/Home';
import CharactersPage from '@pages/Characters';
import EpisodesPage from '@pages/Episodes';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={routesPaths.HOME} element={<HomePage />} />
      <Route path={routesPaths.CHARACTERS} element={<CharactersPage />} />
      <Route path={routesPaths.EPISODES} element={<EpisodesPage />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;
