import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "./UserContext";
import { popUp } from "../Helper";

export const Private = () => {
  debugger;
  const [data, setdata] = useState("")
  const dataUser = useContext(UserContext)
  const handleSubmitData = () => {
    debugger
    console.log(dataUser.username, "user");
    apicall()
  }

  const apicall = async () => {
    debugger
    let url = window.REACT_APP_URL + "sendUserData";
    let input = {
      name: dataUser.username,
      data: data,
    };
    let response = await axios.put(url, input);

    let result = await response.data;

    console.log(result, "result");

    if (result.msgId === -1) {
      popUp({ message: result.message, icons: "error", title: "Error" }).then((event) => {
        if (event.isConfirmed) {

        }
      })
    } else {
      popUp({ message: result.message, icons: "success", title: "Success" }).then((event) => {
        if (event.isConfirmed) {

        }
      })
    }

    setdata("")
  }
  return (
    <div>
      <h2>Private Route with User Name : {dataUser.username} </h2>
      <input value={data} onChange={(e) => setdata(e.target.value)} placeholder="Add Data Here" />
      <button onClick={handleSubmitData}>Submit</button>
    </div>
  );
};
