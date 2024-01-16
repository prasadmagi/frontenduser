import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser } from "./authActions";

// const intialState =

export const userSlice = createSlice({
  name: "auth",

  initialState: {
    loading: false,
    userName: "",
    userToken: null,
    message:"",
    msgId:0,
    success: false,
    error: null,
    
  },
  reducers: {
 
  },
  extraReducers:(builder)=> {
    // [createUser.pending] : (state) => {
    //     state.loading = true
    //     state.error = null
    // },
    // [createUser.fulfilled] : (state, {payload})=> {
    //     state.loading = false
    //     state.sucess = true
    //     state.userName = payload
    // },
    // [createUser.fulfilled] : (state , {payload})=> {
    //     state.loading = false
    //     state.error = payload
    // },
    // [loginUser.pending] : (state) => {
    //     state.loading = true
    //     state.error = null
    // },
    // [loginUser.fulfilled] : (state, {payload})=> {
    //     state.loading = false
    //     state.sucess = true
    //     state.userName = payload
    //     state.userToken = payload.userToken
    // },
    // [loginUser.fulfilled] : (state , {payload})=> {
    //     state.loading = false
    //     state.error = payload
    // },

    builder.addCase(loginUser.pending, (state, action)=>{
        state.success = false
        state.loading = true
    })
    builder.addCase(loginUser.fulfilled, (state, action)=>{
        state.success = true
        state.message = action.payload.message
        state.msgId = action.payload.msgId
        state.loading = false
        state.userName = action.payload.user
    })
    builder.addCase(loginUser.rejected, (state, action)=>{
        state.success = true
        state.message = action.payload.message
        state.msgId = action.payload.msgId
        state.loading = false
    })
  }
});


export default userSlice.reducer;
