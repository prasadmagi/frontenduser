import axios from "axios";
import React, { useState } from "react";
import { popUp } from "../Helper";
import { Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";

export const DeleteUser = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [isLoading, setisLoading] = useState(false);

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
        if (event.isConfirmed) {
        }
        return;
      });
    }
  };

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
            <Typography>Delete User</Typography>
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
            <Grid item spacing={2} xs={8}>
              <TextField
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </Grid>
            <Grid item spacing={2} xs={8}>
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
        </Grid>
        // <div>
        //   <input
        //     value={name}
        //     onChange={(e) => setname(e.target.value)}
        //     placeholder="Enter Name"
        //     type="name"
        //   />
        //   <input
        //     value={password}
        //     onChange={(e) => setpassword(e.target.value)}
        //     placeholder="Enter Password"
        //     type="password"
        //   />
        //   <button onClick={handleSubmit}>Submit</button>
        // </div>
      )}
    </div>
  );
};
