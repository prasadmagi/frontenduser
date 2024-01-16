import axios from "axios";
import React, { useState, useContext, createContext, useEffect } from "react";
import { popUp } from "../Helper";
import { PostService } from "../util/Services";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Paper from '@mui/material/Paper';
import UserContext from "./UserContext";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authActions";

export const LoginUser = () => {
  debugger;
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [isloading, setisloading] = useState(false);
 const {userName,userToken,success, message, msgId, user} =  useSelector((state)=>state.auth)
 const dispatch = useDispatch()
  const navigate = useNavigate();
  const data = useContext(UserContext)
  let token = localStorage.getItem("token");

  useEffect(() => {
    debugger
    if (token) {
      setisloading(true)
      popUp({ message: "User Already Login Please Logout First", icons: "error", title: "Error" }).then((event) => {
        if (event.isConfirmed) {

          navigate('/logout')
        }
        navigate('/logout')
      })
      return

    }
  }, [])

  const handlesubmit = (e) => {
    setisloading(true);
    debugger;
    e.preventDefault();
    if (!(name && password)) {
      popUp({
        message: "Please Enter All Value",
        icons: "error",
        title: "Error",
      }).then((event) => {
        if (event.isConfirmed) {
          setname("");
          setpassword("");
        }
        setisloading(false);
        return;
      });
      return;
    } else {
      if (token) {
        popUp({
          message: "User Already Login",
          icons: "error",
          title: "Error",
        }).then((event) => {
          if (event.isConfirmed) {
            navigate("/logout")
          }
          return;
        });
      } else {
        loginApiCall();

      }
    }
  };
  // const handlesubmit1 = ()=> {
  //   debugger
  //   const data = {
  //     name:name,
  //     password:password
  //   }
  //   dispatch(loginUser(data))
  //   if(msgId === 0) {
  //     popUp({message:message, icons:"success",title:"Success"}).then((event)=>{
  //       if(event.isConfirmed) {

  //       }
  //     })
  //     return
  //   }else if(msgId === -1) {
  //     popUp({message:message, icons:"error", title:"Error"}).then((event)=>{
  //       if(event.isConfirmed) {
          
  //       }
  //     })
  //   }
  //   console.log(userName, "user");
  // }
  const loginApiCall = async () => {
    debugger;
    // let url = window.REACT_APP_URL+"loginUser";
    let input = {
      name: name,
      password: password,
    };
    data.setusername(name)

    console.log(data.user, "set");
    await PostService("loginUser", input)
      .then((resp) => {
        setisloading(false);
        console.log(resp, "resp");
        let result = resp.data;
        data.setisAdminUser(result.isAdmin)
        console.log(result, "loginUser");
        debugger;
        if (result.msgId === -1) {
          popUp({
            message: result.message,
            icons: "error",
            title: "Error",
          }).then((event) => {
            if (event.isConfirmed) {
            }
            return;
          });
        } else if (result.msgId === 0) {
          popUp({
            message: result.message,
            icons: "success",
            title: "Success",
          }).then((event) => {
            if (event.isConfirmed) {
              navigate("/Private");
            }
            return;
          });

          localStorage.setItem("token", result.token);
        }

        setname("")
        setpassword("")

      })
      .catch((err) => {
        popUp({ message: err, icons: "error", title: "Error" });
        return;
      });
    // let response = await axios.post(url, input);

    // let result = await response.data;
  };
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
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

          <Paper elevation={10} style={paperStyle} square={true}>
            <Grid align="center" sx={{ margin: "10px" }}>
              <h2>Login User</h2>
              <Grid align="center" sx={{ margin: "1rem" }}>
                <TextField
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  type="name"
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </Grid>
              <Grid align="center" sx={{ margin: "1rem" }} >
                <TextField
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
              </Grid>
              <Grid align="center" sx={{ margin: "1rem" }}>
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
                {/* <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="button-block"
                  onClick={handlesubmit1}
                  fullWidth
                >
                  Submit
                </Button> */}
              </Grid>
            </Grid>
          </Paper>
        </>
      )
      }
    </>
  );
};
