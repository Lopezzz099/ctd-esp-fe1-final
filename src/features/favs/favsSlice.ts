import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Character } from "../../types/types";

// Define el estado para los favoritos
interface FavState {
  favs: Character[];
}

// Obtiene los favoritos almacenados en localStorage o un array vacío si no existen
const storedData = localStorage.getItem("favs");
const initialFavs: Character[] = storedData ? JSON.parse(storedData) : [];

// Estado inicial
const initialState: FavState = {
  favs: initialFavs,
};

// Slice de Redux para los favoritos
const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addToFavs: (state, action: PayloadAction<Character>) => {
      // Verifica si el favorito ya existe en el estado
      const existingFav = state.favs.some(
        (element: Character) => element.id === action.payload.id
      );

      if (!existingFav) {
        // Agrega el favorito al estado y guarda en localStorage
        state.favs.push(action.payload);
        localStorage.setItem("favs", JSON.stringify(state.favs));
      }
    },
    clearFavs: (state) => {
      // Limpia la lista de favoritos y actualiza localStorage
      state.favs = [];
      localStorage.setItem("favs", JSON.stringify(state.favs));
    },
    delateById: (state, action: PayloadAction<number>) => {
       // Elimina un favorito por ID y actualiza localStorage
      const id = action.payload;
      let arrFilter = state.favs.filter((item: Character) => item.id !== id);
      state.favs = arrFilter;
      localStorage.setItem("favs", JSON.stringify(state.favs));
    },
  },
});

export const { addToFavs, clearFavs, delateById } = favsSlice.actions;
export default favsSlice.reducer;
