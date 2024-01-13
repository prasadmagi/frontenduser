import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "./UserContext";
import { popUp } from "../Helper";
import {
  Button,
  CircularProgress,
  Grid,
  Paper,
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

    popUp({ message: "User is Not Admin", icons: "error", title: "Error" }).then((event) => {
      if (event.isConfirmed) {


      }
    })
    setTimeout(() => {

      navigate("/");
    }, 100)
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
  const paperStyle = { padding: 0, height: '20vh', width: "150px", margin: "10px" }
  return (
    <>
      {isLoading ? (
        <Grid
          container
          spacing={1}
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
         
          <Card
            variant="solid"
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
              gap: 8,
              marginTop: "10px",
              color: "white",
              margin: "1px"
            }}
          >
            {allUser &&
              allUser.map((user) => {
                return (
                  <Paper  elevation={10} style={paperStyle} square={true} >
                  <CardContent sx={{  borderRadius: "10px", width: "100%"}}>
                    <Typography level="title-md" textColor="inherit">
                      {user.name}
                    </Typography>
                    <Typography textColor="inherit">
                      <span>isAdmin:</span>
                      {user.isAdmin === "No" ? "No" : "Yes"}
                    </Typography>
                    <Typography textColor="inherit">
                      <span>UserActive:</span>
                      {user.isActive === true ? "Active" : "Not Active"}
                    </Typography>
                  </CardContent>
                  </Paper>
                );
              })}
          </Card>
        
        </>
      )}
    </>
  );
};
