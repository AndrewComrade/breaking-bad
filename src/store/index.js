import { configureStore } from '@reduxjs/toolkit';
import { charactersReducer } from './reducers/characters.slice';

export const store = configureStore({
  reducer: {
    charactersReducer,
  },
});
