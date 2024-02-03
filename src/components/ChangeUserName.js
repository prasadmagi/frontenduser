import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
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
export const ChangeUserName = () => {
  const [oldname, setoldname] = useState("");
  const [newname, setnewname] = useState("");
  const [password, setpassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const dataUser = useContext(UserContext)
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

    setoldname("")
    setnewname("")
    setpassword("")
  };

  useEffect(() => {
    debugger
    let username = dataUser.username

    setoldname(username)
  }, [])
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
            <h2>Change User Name</h2>
            <Grid sx={{ margin: "1rem" }}>
              <TextField
                value={oldname}
                onChange={(e) => setoldname(e.target.value)}
                type="name"
                id="outlined-basic"
                label="Old Name"
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid sx={{ margin: "1rem" }}>
              <TextField
                value={newname}
                onChange={(e) => setnewname(e.target.value)}
                type="name"
                id="outlined-basic"
                label="New Name"
                variant="outlined"
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

    </>
  );
};
