import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { popUp } from "../Helper";
import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import UserContext from "./UserContext";
export const DeleteUser = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const datauser = useContext(UserContext)
  const handlesubmit = async (e) => {
    debugger;
    e.preventDefault();
    setisLoading(true);
    //api call
    let url = window.REACT_APP_URL + "deleteUser";
    let input = {
      name: name,
      password: password,
    };
    let response = await axios.post(url, input);

    let result = await response.data;
    setisLoading(false);
    
    console.log(result, "deleteUser");

    if (result.msgId === -1) {
      popUp({ message: result.message, icons: "error", title: "Error" }).then(
        (event) => {
          if (event.isConfirmed) {
          }
          return;
        }
      );
    } else {
      popUp({
        message: result.message,
        icons: "success",
        title: "Success",
      }).then((event) => {
        localStorage.clear()
        navigate("/")
        if (event.isConfirmed) {
        }
        return;
      });
    }
    setname("");
    setpassword("");
  };
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  useEffect(() => {
    debugger
    let username = datauser.username
    setname(username)
  }, [])
  return (
    <div>
      {isLoading ? (
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

        <Paper elevation={10} style={paperStyle} square={true}>
          <Grid align="center" sx={{ margin: "10px", height: "100%" }}>
            <h2>Delete User</h2>
            <Grid sx={{ margin: "1rem" }}>
              <TextField
                value={name}
                onChange={(e) => setname(e.target.value)}
                type="name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid sx={{ margin: "1rem" }}>
              <TextField
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </Grid>
            <Grid sx={{ margin: "1rem" }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="button-block"
                onClick={handlesubmit}
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      )}
    </div>
  );
};
