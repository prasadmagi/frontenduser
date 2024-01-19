import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser } from "./authActions";

// const intialState =
const userToken = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : null
export const userSlice = createSlice({
  name: "auth",

  initialState: {
    loading: false,
    userName: "",
    userToken: null,
    message: "",
    msgId: 0,
    success: false,
    error: null,
    isAdmin:""
  },
  reducers: {

  },
  extraReducers: (builder) => {
    debugger
    builder.addCase(loginUser.pending, (state, action) => {
      state.success = false
      state.loading = true
    })
    builder.addCase(loginUser.fulfilled, (state, action, payload) => {
      debugger
      state.success = false
      state.message = action.payload.message
      state.msgId = action.payload.msgId
      state.loading = false
      state.userName = action.payload.user
      state.userToken = action.payload.token
      state.isAdmin = action.payload.isAdmin
      localStorage.setItem("token",action.payload.token)


    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.success = true
      state.message = action.payload.message
      state.msgId = action.payload.msgId
      state.loading = false
    })
    builder.addCase(createUser.pending, (state, action) => {
      state.success = false
      state.loading = true
    })
    builder.addCase(createUser.fulfilled, (state, action) => {
      debugger
      state.success = false
      state.message = action.payload.message
      state.msgId = action.payload.msgId
      state.loading = false
      // state.userName = action.payload.user
      // state.userToken = action.payload.token
    })
    builder.addCase(createUser.rejected, (state, action) => {
      state.success = true
      state.message = action.payload.message
      state.msgId = action.payload.msgId
      state.loading = false
    })
  }
});


export default userSlice.reducer;
