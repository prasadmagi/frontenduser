import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


const backendUrl = window.REACT_APP_URL

export const createUser = createAsyncThunk(
    
    "auth/createUser",
    async ({name, password, isAdmin}) => {
        try {
            debugger
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                  },    
            }
            const {createUserData }  =  await axios.post(`${backendUrl}/createUser`, {name,password,isAdmin}, config)

            return createUserData;
        }catch(err) {
            console.log(err);
        }
    }
)

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({name, password})=> {
        try {
            debugger
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                  },    
            }
            const loginUserData =  await axios.post(`${backendUrl}/loginUser`, {name,password}, config)
            console.log(loginUserData.data, "loginUserData");
           return loginUserData.data;

        }catch(err) {
            console.log(err);
        }
    }
)