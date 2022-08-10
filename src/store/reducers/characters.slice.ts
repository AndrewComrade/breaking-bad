import { ICharacter } from '../../types/ICharacter';
import { createSlice } from '@reduxjs/toolkit';

interface CharactersState {
  characters: ICharacter[];
}

const initialState: CharactersState = {
  characters: [],
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
});

export default charactersSlice.reducer;
