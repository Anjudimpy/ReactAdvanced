import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    incrementCounter: (state) => {
      state.count += 1;
    },
    decrementCounter: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { incrementCounter, decrementCounter, reset } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
