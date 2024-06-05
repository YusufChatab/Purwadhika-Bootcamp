import { createSlice } from "@reduxjs/toolkit";

interface ICount {
  value: number;
}

interface IPayload {
  payload: number;
}

const initialState: ICount = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: ICount) => {
      state.value += 1;
    },
    decrement: (state: ICount) => {
      state.value -= 1;
    },
    increameantByAmount: (state: ICount, action: IPayload) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, increameantByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
