import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "./UserContext";
import { popUp } from "../Helper";
import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

export const Private = () => {
  debugger;
  const [data, setdata] = useState("");
  const [userdata, setuserdata] = useState("");
  const [isloading, setisloading] = useState(false);
  const dataUser = useContext(UserContext);
  const { userName } = useSelector((state) => state.auth)
  const handleSubmitData = () => {
    debugger;
    setisloading(true);
    console.log(dataUser.username, "user");
    apicall();
  };

  const apicall = async () => {
    debugger;
    let url = window.REACT_APP_URL + "sendUserData";
    let input = {
      name: dataUser.username,
      data: data,
    };
    let response = await axios.put(url, input);

    let result = await response.data;
    setisloading(false);
    console.log(result, "result");

    if (result.msgId === -1) {
      popUp({ message: result.message, icons: "error", title: "Error" }).then(
        (event) => {
          if (event.isConfirmed) {
          }
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
      });
    }

    setdata("");
  };

  const handleUserData = async () => {
    debugger

    setisloading(true)
    let username = dataUser.username
    let url1 = window.REACT_APP_URL + "getUserData"
    let input = {
      name: username
    }

    let response1 = await axios.post(url1, input)
    let result1 = await response1.data
    setisloading(false)
    console.log(result1, "fetchusersata");

    if (result1.msgId === -1) {
      popUp({ message: result1.message, icons: "error", title: "Error" }).then((event) => {
        if (event.isConfirmed) {

        }
        return
      })
    } else {
      setuserdata(result1.data[0]?.data)
      popUp({ message: result1.message, icons: "error", title: "Error" }).then((event) => {
        if (event.isConfirmed) {

        }
        return
      })

    }



  }
  return (
    <>
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
            <Grid
              container
              item
              direction="column"
              justify="center"
              spacing={2}
            >
              <Typography>
                Private Route with User Name : {dataUser.username}
              </Typography>
            </Grid>
            <Grid item spacing={2} xs={6}>
              <TextField
                value={data}
                onChange={(e) => setdata(e.target.value)}
                type="text"
                id="outlined-basic"
                label="Add Data Here"
                variant="outlined"
              />
            </Grid>

            <Grid item spacing={2}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="button-block"
                onClick={handleSubmitData}
              >
                Submit
              </Button>
            </Grid>
            <Grid item spacing={2}>
              <Button variant="contained"
                color="primary"
                type="submit"
                className="button-block"
                onClick={handleUserData}>Fetch User Data </Button>

            </Grid>
            <Grid item spacing={2}>
              <Typography>{userdata}</Typography>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
