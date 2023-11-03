import axios from "axios";
import React, { useState } from "react";
import { popUp } from "../Helper";

export const CreateUser = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const handlesubmit = (e) => {
    debugger;
    e.preventDefault();

    debugger;
    createApiCall();
  };

  const createApiCall = async () => {
    debugger;
    let url =  window.REACT_APP_URL+"createUser";
    let input = {
      name: name,
      password: password,
    };
    let response = await axios.post(url, input);

    let result = await response.data;

    console.log(result, "createUser");

    if(result.msgId === -1) {
           popUp({message:result.message, icons:"error", title:"Error"}).then((event)=>{
            if(event.isConfirmed) {

            }
            return 
           }) 
    }else if(result.msgId === 0) {
        popUp({message:result.message, icons:"success", title:"Success"}).then((event)=>{
            if(event.isConfirmed) {

            }
            return 
           })     
    }
  };
  return (
    <div>
      <h2> User Create</h2>

      <form onSubmit={handlesubmit}>
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter Name"
        />
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter Name"
        />
        <input type="Submit" value={"Submit"} />
      </form>
    </div>
  );
};
