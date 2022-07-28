import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  episodes: [],
};

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    setEpisodes: (state, action) => {
      state.films = action.payload;
    },
  },
});

export const { setEpisodes } = episodesSlice.actions;

export const episodesReducer = episodesSlice.reducer;
