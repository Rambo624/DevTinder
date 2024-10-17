import { createSlice } from "@reduxjs/toolkit";


const connectionSlice=createSlice({
    name:"request",
    initialState:null,
    reducers:{
        addRequest:(state,action)=>action.payload,
        removeRequest:(state,action)=>{
            const newArray=state.filter((request)=>request.id!==action.payload)
            return newArray
        }
    }



})


export default connectionSlice.reducer

export const {addRequest,removeRequest}=connectionSlice.actions