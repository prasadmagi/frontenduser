import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { popUp } from "../Helper";
import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import UserContext from "./UserContext";
export const ChangePassword = () => {
  const [name, setname] = useState("");
  const [oldpassword, setoldpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const datauser = useContext(UserContext)
  const handleSubmit = (e) => {
    debugger;
    setisLoading(true);
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
    setisLoading(false);
    console.log(result, "result");

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
        if (event.isConfirmed) {
        }
        return;
      });
    }
    setname("")
    setoldpassword("")
    setnewpassword("")
  };

  useEffect(() => {
    let username = datauser.username
    setname(username)
  }, [datauser])
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }

  return (
    <>
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

        <Paper elevation={8} style={paperStyle}>
          <Grid align="center">
            <h2>Change User Passsword</h2>
            <Grid sx={{ margin: "1rem" }}>
              <TextField
                value={name}
                onChange={(e) => setname(e.target.value)}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid sx={{ margin: "1rem" }}>
              <TextField
                value={oldpassword}
                onChange={(e) => setoldpassword(e.target.value)}
                id="outlined-basic"
                type="password"
                label="Old Password"
                variant="outlined"
              />
            </Grid>
            <Grid sx={{ margin: "1rem" }}>
              <TextField
                value={newpassword}
                onChange={(e) => setnewpassword(e.target.value)}
                id="outlined-basic"
                type="password"
                label="New Password"
                variant="outlined"
              />
            </Grid>
            <Grid sx={{ margin: "1rem" }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="button-block"
                onClick={handleSubmit}
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      )}


    </>
  );
};
