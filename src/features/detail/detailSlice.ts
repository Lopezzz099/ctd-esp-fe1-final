import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Character } from "../../types/types";

interface DetailState {
    detail: Character;
}

const storedData = localStorage.getItem("detail");
const initialDetail: Character = storedData ? JSON.parse(storedData) : [];

const initialState: DetailState = {
    detail: initialDetail,
};

const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {
        addToDetail: (state, action: PayloadAction<Character>) => {
            state.detail = action.payload;
            localStorage.setItem("detail", JSON.stringify(state.detail));
        }
    }
})

export const { addToDetail } = detailSlice.actions;
export default detailSlice.reducer