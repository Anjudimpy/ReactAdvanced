import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = { isRunning: false, elapsedTime: 0 };

const timerSlice = createSlice({
  name: 'timer',
  initialState: INITIAL_STATE,
  reducers: { 
    startTimer: (state) => {
      state.isRunning = true;
    },
    pauseTimer: (state) => {
      state.isRunning = false;
    },
    resetTimer: (state) => {
      state.elapsedTime = 0;
      state.isRunning = false; 
    },
    incrementTimer: (state) => {
      state.elapsedTime += 1;
    },
  }
});

export const { startTimer, pauseTimer, resetTimer, incrementTimer } = timerSlice.actions;

export const timerReducer = timerSlice.reducer;
