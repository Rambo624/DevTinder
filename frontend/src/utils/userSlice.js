import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
name:"user",
initialState:null,
reducers:{
    addUser:(state,action)=>{
        return action.payload
    },
    removeUser:(state,action)=>{
        return null
    }

},
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable the serializable check for redux-persist actions
    }),
})

export default userSlice.reducer

export const {addUser,removeUser}=userSlice.actions



