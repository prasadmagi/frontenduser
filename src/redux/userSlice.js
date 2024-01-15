import { createSlice } from "@reduxjs/toolkit";

// const intialState =

export const userSlice = createSlice({
  name: "auth",

  initialState: {
    loading: false,
    userName: "",
    userToken: null,
    success: false,
  },
  reducers: {
 
  },
});

export const { increment } = userSlice.actions;
export default userSlice.reducer;
