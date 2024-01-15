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
            await axios.post(`${backendUrl}/createUser`, {name,password,isAdmin}, config)
        }catch(err) {
            console.log(err);
        }
    }
)