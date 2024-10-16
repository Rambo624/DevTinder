import { createSlice } from "@reduxjs/toolkit";


const feedSlice=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addfeed:(state,action)=>action.payload,
        removeUserFromFeed:(state,action)=>{
            const newArray=state.filter((user)=>user._id!==action.payload)
            return newArray
        }
    }
})

export default feedSlice.reducer
export const {addfeed,removeUserFromFeed}=feedSlice.actions