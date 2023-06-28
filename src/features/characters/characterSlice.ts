import { PayloadAction, SerializedError, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Character, CharactersState, PaginationInfo } from "../../types/types";

const initialState: CharactersState = {
  characters: [],
  pagination: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  loading: false,
  error: null,
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetch',
  async ({ page, name }: { page: number; name?: string }) => {
    let url = `https://rickandmortyapi.com/api/character?page=${page}`;
    if (name) {
      url += `&name=${name}`;
    }
    const response = await fetch(url);
    if (!response) {
      throw new Error('Error al obtener los personajes')
    }

    const data = await response.json();
    return { characters: data.results, pagination: data.info}
  }
)

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchCharacters.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCharacters.fulfilled, (state, action: PayloadAction<{ characters: Character[]; pagination: PaginationInfo }>) => {
      state.characters = action.payload.characters;
      state.pagination = action.payload.pagination;
      state.loading = false;
      state.error = null;
    })
    .addCase(fetchCharacters.rejected, (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.error = (action.payload as SerializedError).message || 'Error al obtener los personajes';
    });
  },
});

export default characterSlice.reducer;
