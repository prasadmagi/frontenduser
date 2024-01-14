import React from 'react'
import { Drawer, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'; import MenuItem from "@mui/material/MenuItem";
import { Link } from 'react-router-dom';

export const DrawerMenu = () => {
    const [open, setopen] = useState(false)
    return (
        <div>
            <Drawer anchor='right' open={true} onClose={() => setopen(false)}></Drawer>
            <MenuItem>
                <Link to="/">
                    <Typography
                        textAlign="center"

                    >
                        Test
                    </Typography>
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/CreateUser">
                    <Typography
                        textAlign="center"

                    >
                        CreateUser
                    </Typography>
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/LoginUser">
                    <Typography
                        textAlign="center"

                    >
                        LoginUser
                    </Typography>
                </Link>
            </MenuItem>


            <MenuItem>
                <Link to="/DeleteUser">
                    <Typography
                        textAlign="center"

                    >
                        DeleteUser
                    </Typography>
                </Link>
            </MenuItem>

            <MenuItem>
                <Link to="/Private">
                    <Typography
                        textAlign="center"

                    >
                        Private
                    </Typography>
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/ChangeUserName">
                    <Typography
                        textAlign="center"

                    >
                        ChangeUserName
                    </Typography>
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/ChangePassword">
                    <Typography
                        textAlign="center"

                    >
                        ChangePassword
                    </Typography>
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/AdminPanel">
                    <Typography
                        textAlign="center"

                    >
                        AdminPanel
                    </Typography>
                </Link>
            </MenuItem>
            <IconButton onClick={() => setopen(true)}>
                <MenuRoundedIcon />
            </IconButton>
        </div>
    )
}
