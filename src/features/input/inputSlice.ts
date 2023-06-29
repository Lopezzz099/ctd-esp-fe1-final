import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// Define el estado para el input
interface InputState {
  value: string;
  clearing: boolean;
}

// Estado inicial
const initialState: InputState = {
  value: "",
  clearing: false,
};

// Acción asincrónica para limpiar el valor del input
export const clearInputValue = createAsyncThunk(
  "input/clearValue",
  async (_, { dispatch }) => {
    // Simula una pausa de 100ms antes de limpiar el valor
    await new Promise((resolve) => setTimeout(resolve, 100));

    dispatch(setInputValue(""));
  }
);

// Slice de Redux para el input
const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
      // Actualiza el valor del input en el estado
        setInputValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(clearInputValue.pending, (state) => {
                state.clearing = true;
            })
            .addCase(clearInputValue.fulfilled, (state) => {
                state.clearing = false;
            });
    },
});

export const { setInputValue } = inputSlice.actions;
export default inputSlice.reducer
