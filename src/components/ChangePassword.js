import axios from "axios";
import React, { useState } from "react";
import { popUp } from "../Helper";
import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export const ChangePassword = () => {
  const [name, setname] = useState("");
  const [oldpassword, setoldpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
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
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
        >
          <Grid container item direction="column" justify="center" spacing={2}>
            <Grid item spacing={2} xs={8}>
              <Typography>Change User Password</Typography>
            </Grid>
            <Grid item spacing={2} xs={8}>
              <TextField
                value={name}
                onChange={(e) => setname(e.target.value)}
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
            </Grid>
            <Grid item spacing={2} xs={8}>
              <TextField
                value={oldpassword}
                onChange={(e) => setoldpassword(e.target.value)}
                id="outlined-basic"
                type="password"
                label="Old Password"
                variant="outlined"
              />
            </Grid>
            <Grid item spacing={2} xs={8}>
              <TextField
                value={newpassword}
                onChange={(e) => setnewpassword(e.target.value)}
                id="outlined-basic"
                type="password"
                label="New Password"
                variant="outlined"
              />
            </Grid>
            <Grid item spacing={2} xs={8}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="button-block"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}

      {/* <div>
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
    </div> */}
    </>
  );
};
