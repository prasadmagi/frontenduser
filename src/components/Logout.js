import React, { useEffect, useState, useContext } from "react";
import { popUp } from "../Helper";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

export const Logout = () => {
  const token = localStorage.getItem("token")
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate()
  const datauser = useContext(UserContext)
  const handleSubmit = () => {
    debugger;
    setisLoading(true);


    apicall()
  };
  useEffect(() => {
    debugger
    if (!token) {
      popUp({ message: "Please Login First", icons: "error", title: "Error" })
      return
    }
  }, [token])
  const apicall = async () => {
    debugger
    let url = window.REACT_APP_URL + "logout"
    let input = {

      token: token
    }
    datauser.setusername("")
    const response = await axios.put(url, input)

    const result = await response.data
    setisLoading(false)
    console.log(result, "logout-result");

    if (result.msgId === 0) {
      localStorage.clear("token")
      popUp({ message: result.message, icons: "success", title: "Success" })
      navigate('/')
      return
    } else {
      popUp({ message: result.message, icons: "error", title: "Error" })
      return

    }

  }
  return (
    <div>
      {
        isLoading ?
          (<CircularProgress />) :
          <div>
            <h2>Logout</h2>
            <button onClick={handleSubmit}>Logout</button>
          </div>
      }
    </div>
  );
};
