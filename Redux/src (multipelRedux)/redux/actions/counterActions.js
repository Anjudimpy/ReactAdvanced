// define counter action constants 
export const INCREMENT_COUNTER = "Increment counter";
export const DECREMENT_COUNTER="Decrement counter";
export const RESET_COUNTER="Reset counter";

// define counter action creators here
export const incrementCounter=()=>({type:INCREMENT_COUNTER});
export const decrementCounter=()=>({type:DECREMENT_COUNTER});
export const resetCounter=()=>({type:RESET_COUNTER});
