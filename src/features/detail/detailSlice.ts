import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Character } from "../../types/types";

// Define el estado para el detalle del personaje
interface DetailState {
    detail: Character;
}

// Obtiene el detalle del personaje almacenado en localStorage o un objeto vacío si no existe
const storedData = localStorage.getItem("detail");
const initialDetail: Character = storedData ? JSON.parse(storedData) : {};

// Estado inicial
const initialState: DetailState = {
    detail: initialDetail,
};

// Slice de Redux para el detalle del personaje
const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {
        // Actualiza el detalle del personaje en el estado y guarda en localStorage
        addToDetail: (state, action: PayloadAction<Character>) => {
            state.detail = action.payload;
            localStorage.setItem("detail", JSON.stringify(state.detail));
        }
    }
})

export const { addToDetail } = detailSlice.actions;
export default detailSlice.reducer