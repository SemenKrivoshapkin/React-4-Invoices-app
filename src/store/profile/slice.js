import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./init"


export  const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.name = action.payload.name
            state.surname = action.payload.sername
        },
       
    },
    
})

export const { setProfile } = profileSlice.actions