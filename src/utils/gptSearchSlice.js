import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: "gptSearch",
    initialState: {
        searchEnabled: false
    },
    reducers : {
        toggleSearch: (state)=>{
            state.searchEnabled = !state.searchEnabled
        }
    }
})
export const {toggleSearch} = gptSearchSlice.actions
export default gptSearchSlice.reducer