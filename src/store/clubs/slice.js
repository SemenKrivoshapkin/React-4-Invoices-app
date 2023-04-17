import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./init"


export  const clubsSlice = createSlice({
    name: 'clubs',
    initialState,
    reducers: {
        addClub: (state, action) => {
            console.log(action.payload)
            state.clubs.push(action.payload)
        },
        // editClub: (state, action) => {
        //     state.clubs.
        // }
    },
    
})

export const { addClub } = clubsSlice.actions