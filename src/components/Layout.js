import React, { useContext } from "react";
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

export const Layout = () => {
  const { AuthToken } = useContext(UserContext)
  console.log(AuthToken, "layouttoken");
  return (
    <>
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
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {/* {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}

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
                <Link to="/Logout">
                  <Typography
                    textAlign="center"
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontWeight: "bold",
                    }}
                  >
                    Logout
                  </Typography>
                </Link>
              </MenuItem>

            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                // anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              // open={Boolean(anchorElUser)}
              // onClose={handleCloseUserMenu}
              >

              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Test</Link>
          </li>
          <li>
            <Link to="/CreateUser">CreateUser</Link>
          </li>
          <li>
            <Link to="/LoginUser">LoginUser</Link>
          </li>

          <li>
            <Link to="/DeleteUser">DeleteUser</Link>
          </li>
          <li>
            <Link to="/Logout">Logout</Link>
          </li> 
          <li>
            <Link to="/Private">Private Page</Link>
          </li>

          <li>
            <Link to="/ChangeUserName">Change User Name</Link>
          </li>
          <li>
            <Link to="/ChangePassword">Change Password</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </>
  );
};
