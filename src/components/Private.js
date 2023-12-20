import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import UserContext from "./UserContext";

export const Private = (props) => {
  debugger;
  const [data, setdata] = useState("")
  const dataUser = useContext(UserContext)
  const location = useLocation();
  const handleSubmitData = ()=>{
    debugger
    console.log(dataUser.username, "user");
    apicall()
  }

  const apicall = async()=>{
    debugger
    let url = window.REACT_APP_URL + "sendData";
    let input = {
      name: location.user,
      data: data,
    };
    let response = await axios.post(url, input);

    let result = await response.data;

    console.log(result, "result");
  }
  return (
    <div>
      <h2>Private Route with User Name : {dataUser.username} </h2>
      <input value={data} onChange={(e)=>setdata(e.target.value)} placeholder="Add Data Here"/>
      <button onClick={handleSubmitData}>Submit</button>
    </div>
  );
};
