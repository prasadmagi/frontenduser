import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const Private = (props) => {
  debugger;
  const [data, setdata] = useState("")
  // console.log(props,"props");
  // const [user, setuser] = useState("")
  let user =  ""
  const location = useLocation();
  const handleSubmitData = ()=>{
    debugger
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
      <h2>Private Route with User Name : {location.user} </h2>
      <input value={data} onChange={(e)=>setdata(e.target.value)} placeholder="Add Data Here"/>
      <button onClick={handleSubmitData}>Submit</button>
    </div>
  );
};
