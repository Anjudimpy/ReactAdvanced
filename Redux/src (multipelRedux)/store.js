const redux = require("redux");

// import counter reducer function here
import { combineReducers } from "redux";

const {counterReducer} = require("./redux/reducers/counterReducer");
const { timerReducer } = require("./redux/reducers/timerReducer");

// combine the reducer functions here
const result = combineReducers({
    counter:counterReducer,
    timer:timerReducer

})

export const store = redux.createStore(result)
