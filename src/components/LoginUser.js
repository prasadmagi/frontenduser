import axios from "axios";
import React, { useState } from "react";
import { popUp } from "../Helper";
import { PostService } from "../util/Services";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export const LoginUser = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [isloading, setisloading] = useState(false);
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  const handlesubmit = (e) => {
    setisloading(true);
    debugger;
    e.preventDefault();
    if (!(name && password)) {
      popUp({
        message: "Please Enter All Value",
        icons: "error",
        title: "Error",
      }).then((event) => {
        if (event.isConfirmed) {
          setname("");
          setpassword("");
        }
        setisloading(false);
        return;
      });
      return;
    } else {
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
              navigate("/Private", { state: name });
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
    <>
      {/* <div>
      {
        token ? (
          <div> User login Already </div>
        ):
   (
    <>
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
      </>
   )
      }
    </div> */}
      {isloading ? (
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
        >
          <CircularProgress />
        </Grid>
      ) : (
        <>
          <Grid
            container
            spacing={3}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "100vh" }}
          >
            {/* <Grid item spacing={3}> */}
            <Grid
              container
              item
              direction="column"
              justify="center"
              spacing={2}
            >
              <Grid item spacing={2} xs={8}>
                <Typography>Login User</Typography>
              </Grid>
              <Grid item spacing={2} xs={8}>
                <TextField
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  type="name"
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item spacing={2} xs={6}>
                <TextField
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
              </Grid>
              <Grid item spacing={2}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="button-block"
                  onClick={handlesubmit}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
            {/* </Grid> */}
          </Grid>
        </>
      )}
    </>
  );
};
