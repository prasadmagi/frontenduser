import React, { useEffect, useState } from "react";
import { popUp } from "../Helper";
import { Loading } from "./Loading";

export const Logout = () => {
  const [isLoading, setisLoading] = useState(false);
  const handleSubmit = () => {
    debugger;
    setisLoading(true);
  

    let token = localStorage.getItem("token");

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
        <div>
          <h2>Logout</h2>
          <button onClick={handleSubmit}>Logout</button>
        </div>
      }
    </div>
  );
};
