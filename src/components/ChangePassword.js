import axios from "axios";
import React, { useState } from "react";
import { popUp } from "../Helper";

export const ChangePassword = () => {
  const [name, setname] = useState("");
  const [oldpassword, setoldpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    Apicall();
  };

  const Apicall = async () => {
    debugger;
    let input = {
      name: name,
      oldpassword: oldpassword,
      newpassword: newpassword,
    };
    let url = window.REACT_APP_URL + "changePassword";
    let response = await axios.post(url, input);
    let result = response.data;

    console.log(result, "result");

    if(result.msgId === -1) {

        popUp({message:result.message, icons:"error", title:"Error"}).then((event)=>{
            if(event.isConfirmed) {

            }
            return 
        })
    }else{
        popUp({message:result.message, icons:"success", title:"Success"}).then((event)=>{
            if(event.isConfirmed) {

            }
            return 
        })
    }
  };
  return (
    <div>
      <h2>Change the Password </h2>
      <input
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        value={oldpassword}
        onChange={(e) => setoldpassword(e.target.value)}
        placeholder="Enter Old Password"
      />
      <input
        value={newpassword}
        onChange={(e) => setnewpassword(e.target.value)}
        placeholder="Enter New Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
