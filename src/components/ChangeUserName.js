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

export const ChangeUserName = () => {
  const [oldname, setoldname] = useState("");
  const [newname, setnewname] = useState("");
  const [password, setpassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const handlesubmit = (e) => {
    debugger;
    setisLoading(true);
    e.preventDefault();
    Apicall();
  };

  const Apicall = async () => {
    debugger;
    let input = {
      oldname: oldname,
      newname: newname,
      password: password,
    };
    let url = window.REACT_APP_URL + "changeUserName";
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
              <Typography>Change User Name</Typography>
            </Grid>
            <Grid item spacing={2} xs={8}>
              <TextField
                value={oldname}
                onChange={(e) => setoldname(e.target.value)}
                type="name"
                id="outlined-basic"
                label="Old Name"
                variant="outlined"
              />
            </Grid>
            <Grid item spacing={2} xs={8}>
              <TextField
                value={newname}
                onChange={(e) => setnewname(e.target.value)}
                type="name"
                id="outlined-basic"
                label="New Name"
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
      )}
      {/* <div>
        <h2>Change the User name </h2>
        <input value={oldname} onChange={(e)=>setoldname(e.target.value)} placeholder='Enter Old Name'/>
        <input value={newname} onChange={(e)=>setnewname(e.target.value)} placeholder='Enter New Name'/>
        <input value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Enter Password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div> */}
    </>
  );
};
