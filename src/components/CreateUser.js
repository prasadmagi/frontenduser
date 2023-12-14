import axios from "axios";
import React, { useState } from "react";
import { popUp } from "../Helper";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
export const CreateUser = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState(null);
  const [isLoading, setisLoading] = useState(false);
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
      role: role,
    };
    let response = await axios.post(url, input);

    let result = await response.data;
    setisLoading(false);
    console.log(result, "createUser");

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
  };

  const handleChangeSelect = (e) => {
    debugger;
    let value = e.target.value;

    if (value === 1) {
      setrole(true);
    } else {
      setrole(false);
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
              <Typography>Create User</Typography>
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
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
              />
            </Grid>
            {/* <Grid item spacing={2} xs={8}> */}
            <FormControl fullWidth>
              <Grid item spacing={2} xs={8}>
                {/* <InputLabel id="demo-simple-select-label">Role</InputLabel> */}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="Role"
                  onChange={handleChangeSelect}
                >
                  <MenuItem value={1}>Admin</MenuItem>
                  <MenuItem value={2}>Normal</MenuItem>
                </Select>
              </Grid>
            </FormControl>
            {/* </Grid> */}
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
      <h2> User Create</h2>
      {isLoading ? (
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
            placeholder="Enter Name"
          />
          <label>
            Role As Admin:
            <select name="role" defaultValue={"false"} value={role}>
              <option value={"true"}>True</option>
              <option value={"False"}>False</option>
            </select>
          </label>
          <input type="Submit" value={"Submit"} />
        </form>
      )}
    </div> */}
    </>
  );
};
