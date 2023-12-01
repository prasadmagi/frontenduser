import axios from "axios";
import React, { useState } from "react";
import { popUp } from "../Helper";
import { PostService } from "../util/Services";
import { Loading } from "./Loading";

export const LoginUser = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [isloading, setisloading] = useState(false);
  const handlesubmit = (e) => {
    setisloading(true);
    debugger;
    e.preventDefault();

    let token = localStorage.getItem("token");

    if (token) {
      popUp({
        message: "User Already Login",
        icons: "error",
        title: "Error",
      }).then((event) => {
        if (event.isConfirmed) {
        }
        return;
      });
    } else {
      loginApiCall();
    }
  };

  const loginApiCall = async () => {
    debugger;
    // let url = window.REACT_APP_URL+"loginUser";
    let input = {
      name: name,
      password: password,
    };
    await PostService("loginUser", input)
      .then((resp) => {
        setisloading(false);
        console.log(resp, "resp");
        let result = resp.data;
        console.log(result, "createUser");
        debugger;
        if (result.msgId === -1) {
          popUp({
            message: result.message,
            icons: "error",
            title: "Error",
          }).then((event) => {
            if (event.isConfirmed) {
            }
            return;
          });
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

          localStorage.setItem("token", result.token);
        }
      })
      .catch((err) => {
        popUp({ message: err, icons: "error", title: "Error" });
        return;
      });
    // let response = await axios.post(url, input);

    // let result = await response.data;
  };

  return (
    <div>
      <h2> Login User</h2>
      {isloading ? (
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
            placeholder="Enter Password"
          />
          <input type="Submit" value={"Submit"} />
        </form>
      )}
    </div>
  );
};
