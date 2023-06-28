import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Character } from "../../types/types";

interface FavState {
  favs: Character[];
}

const storedData = localStorage.getItem("favs");
const initialFavs: Character[] = storedData ? JSON.parse(storedData) : [];

const initialState: FavState = {
  favs: initialFavs,
};

const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addToFavs: (state, action: PayloadAction<Character>) => {
        const existingFav = state.favs.some((element: Character) => element.id === action.payload.id);

        if (!existingFav) {
          state.favs.push(action.payload);
          localStorage.setItem("favs", JSON.stringify(state.favs));
        }
    },
    clearFavs: (state) => {
        state.favs = [];
        localStorage.setItem("favs", JSON.stringify(state.favs))
    },
    delateById: (state, action: PayloadAction<number>) => {
        const id = action.payload;
        let arrFilter = state.favs.filter((item: Character) => item.id !== id);
        state.favs = arrFilter;
        localStorage.setItem("favs", JSON.stringify(state.favs))
    }
  },
});

export const { addToFavs, clearFavs, delateById } = favsSlice.actions;
export default favsSlice.reducer
