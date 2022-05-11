import { episodeReducer } from "./slices";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");



const rootReducer=combineReducers({
    episodes:episodeReducer
});

const store=configureStore({
    reducer:rootReducer
})

export {store}