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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
export const AdminPanel = () => {
  debugger;
  const [allUser, setallUser] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const dataUser = useContext(UserContext);
  console.log(dataUser, "dataUser");
  if (dataUser.isAdminUser !== "Yes") {
    toast("User is not Admin");
    navigate("/");
  }
  const handleUserData = async () => {
    debugger;

    setisLoading(true);
    let url1 = window.REACT_APP_URL + "allUser";
    let response = await axios.get(url1);
    let result = await response.data;
    setisLoading(false);
    setallUser(result.user);
    console.log(result, "fetchallusers");
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
        <>
          <h4>Welcome User {dataUser.username} Admin</h4>
          <Grid item spacing={2}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="button-block"
              onClick={handleUserData}
            >
              Fetch All Users
            </Button>
          </Grid>
          <Grid item spacing={2}>
            {allUser &&
              allUser.map((user) => {
                return (
                  <>
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                  
                        </Typography>
                        <Typography variant="h5" component="div">
                        {user.name}
                        </Typography>
          
                        <Typography variant="body2">
                         {user.isActive ? user.isActive : ""}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        {/* <Button size="small">Learn More</Button> */}
                      </CardActions>
                    </Card>
                  </>
                );
              })}
          </Grid>
        </>
      )}
    </>
  );
};
