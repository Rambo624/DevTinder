import { createSlice } from "@reduxjs/toolkit";


const connectionSlice=createSlice({
    name:"connection",
    initialState:null,
    reducers:{
        addConnections:(state,action)=>action.payload,
        removeConnections:(state,action)=>null
    }
})


export default connectionSlice.reducer

export const {addConnections,removeConnections}=connectionSlice.actions