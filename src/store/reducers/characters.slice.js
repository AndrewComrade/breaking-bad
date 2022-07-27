import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  characters: [],
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setChatacters: (state, action) => {
      state.characters = action.payload;
    },
  },
});

export const { setChatacters } = charactersSlice.actions;

export const charactersReducer = charactersSlice.reducer;
