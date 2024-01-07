import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "./UserContext";
import { popUp } from "../Helper";
import {
    Button,
    CircularProgress,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
export const AdminPanel = () => {
    const [data, setdata] = useState("");
    const [userdata, setuserdata] = useState("");
    const [isloading, setisloading] = useState(false);
    const dataUser = useContext(UserContext);
    const handleUserData = async () => {
        debugger

        setisloading(true)
        let username = dataUser.username
        let url1 = window.REACT_APP_URL + "getUserData"
        let input1 = {
            name: "Pooja"
        }

        let response1 = await axios.get(url1, input1)
        let result1 = await response1.data
        setisloading(false)
        console.log(result1, "fetchusersata");

        if (result1.msgId === -1) {
            popUp({ message: result1.message, icons: "error", title: "Error" }).then((event) => {
                if (event.isConfirmed) {

                }
                return
            })
        }



    }
    return (
        <>
            <h4>Welcome user Data</h4>
            <Grid item spacing={2}>
                <Button variant="contained"
                    color="primary"
                    type="submit"
                    className="button-block"
                    onClick={handleUserData}>Fetch User Data </Button>

            </Grid>

        </>
    )
}
