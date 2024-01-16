import axios from "axios";
import React, { useRef, useState } from "react";
import { popUp } from "../Helper";
import {
  Button,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import Paper from '@mui/material/Paper';
import CircularProgress from "@mui/material/CircularProgress";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../redux/authActions";

export const CreateUser = () => {
  debugger
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [isAdmin, setisAdmin] = useState("No");
  const [isLoading, setisLoading] = useState(false);
  const nameref = useRef(null)
  const passwordref = useRef(null)
  const { loading, message, msgId } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const handlesubmit = (e) => {
    debugger;
    e.preventDefault();
    setisLoading(true);
    debugger;
    createApiCall();
  };

  const createApiCall = async () => {
    debugger;
    let url = window.REACT_APP_URL + "createUser";
    let input = {
      name: name,
      password: password,
      isAdmin: isAdmin,
    };
    let response = await axios.post(url, input);

    let result = await response.data;
    setisLoading(false);
    console.log(result, "createUser");
    console.log("ref1", nameref);
    console.log("ref2", passwordref);
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

    setname("")
    setpassword("")
  };

  const handleChange = (e) => {
    debugger;
    setisAdmin(e.target.value)


  };
  const handlesubmit1 = () => {
    debugger;
    const data = {
      name: name,
      password: password,
      isAdmin: isAdmin
    }
    dispatch(createUser(data))
    debugger
    if (msgId === -1) {
      popUp({ message: message, icons: "error", title: "Error" }).then(
        (event) => {
          if (event.isConfirmed) {
          }
          return;
        }
      );
    } else if (msgId === 0) {
      popUp({
        message: message,
        icons: "success",
        title: "Success",
      }).then((event) => {
        if (event.isConfirmed) {
        }
        return;
      });
    }

    setname("")
    setpassword("")
  }
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

        <Grid>
          <Paper elevation={10} style={paperStyle} square={true}>
            <Grid align="center" sx={{ margin: "10px", height: "100%" }}>
              <h2>Create User</h2>
              <Grid sx={{ margin: "1rem" }}>
                <TextField
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  type="name"
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  ref={nameref}
                />
              </Grid>
              <Grid sx={{ margin: "1rem" }}>
                <TextField
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  ref={passwordref}
                />
              </Grid>
              <Grid align="center" sx={{ margin: "1rem" }}>
                <FormLabel id="demo-controlled-radio-buttons-group">Admin</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={isAdmin}
                  onChange={handleChange}
                >
                  <Grid align="center" sx={{ margin: "2rem" }}>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                  </Grid>
                </RadioGroup>
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
        </Grid>
      )}

    </>
  );
};
