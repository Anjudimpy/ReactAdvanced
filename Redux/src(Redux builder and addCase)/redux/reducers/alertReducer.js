import { createSlice } from '@reduxjs/toolkit';
import { pauseTimer, resetTimer, startTimer } from './timerReducer';

const INITIAL_STATE = { message: null };

const alertSlice = createSlice({
  name: 'alert',
  initialState: INITIAL_STATE,
  reducers: {
    reset: (state) => {
      state.message = "";
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(startTimer, (state, action) => {
      state.message = "Timer has started.";
    })
   .addCase(pauseTimer, (state,action)=>{
    state.message="Timer is paused.";
     })
   . addCase(resetTimer,(state,action)=>{
    state.message="Timer set to 0.";

   })
  }
});

export const alertReducer = alertSlice.reducer;
export const resetAlert=alertSlice.actions.reset;
export const alertSelector = (state) => state.alertReducer.message;
