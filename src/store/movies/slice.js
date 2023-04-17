import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./init"

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovi: (state, action) => {
            console.log(action)
            // state.moviss.push(action.payload)
        }
    }
})

export const { addMovie } = moviesSlice.actions