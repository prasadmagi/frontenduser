import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import UserContext from "./UserContext";
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { popUp } from "../Helper";
import {
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DrawerMenu } from "./DrawerMenu";
export const Layout = () => {
  const theme = useTheme()
  const AuthToken = useContext(UserContext)
  const useMatch = useMediaQuery(theme.breakpoints.down('sm'))
  const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate()
  const setting = ["Profile", "Logout"]
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenUserMenu = (event) => {
    debugger
    console.log(AuthToken);
    if (AuthToken) {

      setAnchorElUser(event.currentTarget);
    }
  };

  const handleMenuClick = async (e) => {
    debugger
    setisLoading(true)
    console.log(e, "check");
    if (e === "Logout") {
      //   let url = window.REACT_APP_URL + "logout";

      //   let response = await axios.get(url)
      //   let result = await response.data
      //   setisLoading(false)
      //   if (result.msgId === -1) {
      //     popUp({ message: result.message, icons: "error", title: "Error" })
      //     return
      //   } else {
      //     popUp({ message: result.message, icons: "success", title: "Success" })
      //     return

      //   }
      // }

      let token = localStorage.getItem("token")

      if (token) {
        setisLoading(false)
        localStorage.clear()
        popUp({ message: "User Logout Successfully", icons: "success", title: "Success" }).then((event) => {
          if (event.isConfirmed) {
            navigate("/")
          }
        })
        return
      } else {
        setisLoading(false)
        popUp({ message: "Please Login First", icons: "error", title: "Error" }).then((event) => {
          if (event.isConfirmed) {
            navigate("/LoginUser")
          }
        })
        return
      }
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      {
        isLoading ? (
          <CircularProgress />
        ) :
          (
            <AppBar position="static">
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    LOGO
                  </Typography>

                  <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      // onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      {/* <MenuIcon /> */}
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      // anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      // open={Boolean(anchorElNav)}
                      // onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: "block", md: "none" },
                      }}
                    ></Menu>
                  </Box>
                  {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                  <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                      mr: 2,
                      display: { xs: "flex", md: "none" },
                      flexGrow: 1,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    Test
                  </Typography>
                  <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                    {
                      useMatch ? (
                        <DrawerMenu />
                      ) :
                        (
                          <>
                            <MenuItem>
                              <Link to="/">
                                <Typography
                                  textAlign="center"
                                  sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Test
                                </Typography>
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link to="/CreateUser">
                                <Typography
                                  textAlign="center"
                                  sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    fontWeight: "bold",
                                  }}
                                >
                                  CreateUser
                                </Typography>
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link to="/LoginUser">
                                <Typography
                                  textAlign="center"
                                  sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    fontWeight: "bold",
                                  }}
                                >
                                  LoginUser
                                </Typography>
                              </Link>
                            </MenuItem>


                            <MenuItem>
                              <Link to="/DeleteUser">
                                <Typography
                                  textAlign="center"
                                  sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    fontWeight: "bold",
                                  }}
                                >
                                  DeleteUser
                                </Typography>
                              </Link>
                            </MenuItem>

                            <MenuItem>
                              <Link to="/Private">
                                <Typography
                                  textAlign="center"
                                  sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Private
                                </Typography>
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link to="/ChangeUserName">
                                <Typography
                                  textAlign="center"
                                  sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ChangeUserName
                                </Typography>
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link to="/ChangePassword">
                                <Typography
                                  textAlign="center"
                                  sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ChangePassword
                                </Typography>
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link to="/AdminPanel">
                                <Typography
                                  textAlign="center"
                                  sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    fontWeight: "bold",
                                  }}
                                >
                                  AdminPanel
                                </Typography>
                              </Link>
                            </MenuItem>

                          </>
                        )
                    }

                  </Box>

                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {setting.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>

                          <Typography textAlign="center" onClick={() => handleMenuClick(setting)}>{setting}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </Toolbar>

              </Container>
            </AppBar>

          )
      }
      <Outlet />


    </>
  );
};
