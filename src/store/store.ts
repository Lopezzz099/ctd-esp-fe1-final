import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../features/characters/characterSlice";
import inputSlice from "../features/input/inputSlice";

const store = configureStore({
  reducer: {
    characters: characterReducer,
    input: inputSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
