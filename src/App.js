import React from 'react';
import AppRouter from './components/AppRouter';
import Main from './layout/Main';
import useAsync from './hooks/useAsync';
import { getAllCharacters } from './api/characters';
import { REQUEST_STATUSES } from './constants';
import { getAllEpisodes } from './api/episodes';

function App() {
  const {
    status: charactersStatus,
    error: charactersError,
    data: characters,
  } = useAsync(getAllCharacters);
  const { data: episodes } = useAsync(getAllEpisodes);

  // console.log(characters);
  // console.log(episodes);`

  if (charactersStatus === REQUEST_STATUSES.LOADING) {
    return <h2>LOADING...</h2>;
  }

  if (charactersStatus === REQUEST_STATUSES.ERROR) {
    return <h2>{charactersError.message}</h2>;
  }

  return (
    <Main>
      <AppRouter />
    </Main>
  );
}

export default App;
