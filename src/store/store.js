import { combineReducers } from "redux";
// import { clubsSlice } from "./clubs/slice";
// import { instrumentsSlice } from "./instruments/slice";
// import { moviesSlice } from "./movies/slice";
import { configureStore } from "@reduxjs/toolkit";
import { profileSlice } from "./profile/slice";

const commonReducer = combineReducers({
    // clubs: clubsSlice.reducer,
    // instruments: instrumentsSlice.reducer,
    // movies: moviesSlice.reducer,
    profile: profileSlice.reducer
})

export const store = configureStore({
    reducer: commonReducer
})