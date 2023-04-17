import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./init"

export const instrumentsSlice = createSlice({
    name: 'instruments',
    initialState,
    reducers: {
        addInstruments: (state, action) => {
            console.log(action)
            // state.instrumentss.push(action.payload)
        }
    }
})

export const { addInstruments } = instrumentsSlice.actions