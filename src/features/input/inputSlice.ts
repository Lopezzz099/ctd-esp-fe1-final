import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface InputState {
  value: string;
  clearing: boolean;
}

const initialState: InputState = {
  value: "",
  clearing: false,
};

export const clearInputValue = createAsyncThunk(
  "input/clearValue",
  async (_, { dispatch }) => {
    await new Promise((resolve) => setTimeout(resolve, 100));

    dispatch(setInputValue(""));
  }
);

const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
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
