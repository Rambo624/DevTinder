import { createSlice } from "@reduxjs/toolkit";


const feedSlice=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addfeed:(state,action)=>action.payload,
        removeFeed:(state,action)=>null
    }
})

export default feedSlice.reducer
export const {addfeed,removeFeed}=feedSlice.actions