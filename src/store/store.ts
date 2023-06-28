import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../features/characters/characterSlice";
import inputSlice from "../features/input/inputSlice";
import favsSlice from "../features/favs/favsSlice";

const store = configureStore({
  reducer: {
    characters: characterReducer,
    input: inputSlice,
    favs: favsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
