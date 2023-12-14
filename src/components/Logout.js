import React, { useEffect, useState } from "react";
import { popUp } from "../Helper";
import { CircularProgress } from "@mui/material";

export const Logout = () => {
  const [isLoading, setisLoading] = useState(false);
  const handleSubmit = () => {
    debugger;
    setisLoading(true);
  

    let token = localStorage.getItem("token");
    setisLoading(false)
    if (token) {
        localStorage.clear("token");
      popUp({
        message: "User logout successfully",
        icons: "success",
        title: "Success",
      }).then((event) => {
        if (event.isConfirmed) {
        }
        return;
      });
    } else {
        popUp({message:"Please Login First", icons:"error", title:"Error"}).then((event)=>{
            if(event.isConfirmed) {

            }
            return 
        })
    }
  };

  return (
    <div>
      {
        isLoading ?
        (<CircularProgress/>) :
        <div>
          <h2>Logout</h2>
          <button onClick={handleSubmit}>Logout</button>
        </div>
      }
    </div>
  );
};
