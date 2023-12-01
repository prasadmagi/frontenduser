import axios from "axios";
import React, { useState } from "react";
import { popUp } from "../Helper";
import { Loading } from "./Loading";

export const CreateUser = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const handlesubmit = (e) => {
    debugger;
    e.preventDefault();
    setisLoading(true)
    debugger;
    createApiCall();
  };

  const createApiCall = async () => {
    debugger;
    let url = window.REACT_APP_URL + "createUser";
    let input = {
      name: name,
      password: password,
      role: role,
    };
    let response = await axios.post(url, input);

    let result = await response.data;
    setisLoading(false)
    console.log(result, "createUser");

    if (result.msgId === -1) {
      popUp({ message: result.message, icons: "error", title: "Error" }).then(
        (event) => {
          if (event.isConfirmed) {
          }
          return;
        }
      );
    } else if (result.msgId === 0) {
      popUp({
        message: result.message,
        icons: "success",
        title: "Success",
      }).then((event) => {
        if (event.isConfirmed) {
        }
        return;
      });
    }
  };
  return (
    <div>
      <h2> User Create</h2>
      {isLoading ? (
        <Loading />
      ) : (
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
          <label>
            Role As Admin:
            <select name="role" defaultValue={"false"} value={role}>
              <option value={"true"}>True</option>
              <option value={"False"}>False</option>
            </select>
          </label>
          <input type="Submit" value={"Submit"} />
        </form>
      )}
    </div>
  );
};
