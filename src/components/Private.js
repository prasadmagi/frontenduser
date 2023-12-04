import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const Private = (props) => {
  debugger;
  // console.log(props,"props");
  // const [user, setuser] = useState("")
  let user =  ""
  const location = useLocation();
  // useEffect(()=>{
  //   user  = user ? location: "UserName"

  // },[])
  return (
    <div>
      <h2>Private Route with User Name : {location.user} </h2>
    </div>
  );
};
