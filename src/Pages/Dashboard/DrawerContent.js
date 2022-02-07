import { Divider, List, ListItem, Typography, } from "@mui/material";
import { Link } from "react-router-dom";

import React from 'react';
import { useRouteMatch } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import useAuth from "../../Hooks/useAuth";
import { useJwt } from "react-jwt";
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';


const useStyles = makeStyles({
    link: {
        textDecoration: "none",
        display: "block",
        padding: "5px 20px",
        fontWeight: 500,
        fontSize: "16px",
        color: "black",
    },
    logout: {
        display: "flex",
        padding: "5px 30px",
    }
})

const DrawerContent = () => {
    const { user, LogOut } = useAuth()
    const { decodedToken } = useJwt(user?.accessToken)
    let role = decodedToken?.role;
    const classes = useStyles()
    let { url } = useRouteMatch();
    const handleLogout = () => {
        LogOut()
    }
    return (
        <div>

            <List>
                <Divider />
                <Link className={classes.link} to={`${url}`}>
                    <ListItem button >
                        Cart
                    </ListItem>
                </Link>
                <Divider />
                <Link className={classes.link} to={`${url}/login`}>
                    <ListItem button >
                        Login
                    </ListItem>
                </Link>
                <Divider />
                <Link className={classes.link} to={`${url}/register`}>
                    <ListItem button >
                        Register
                    </ListItem>
                </Link>
                <Divider />
                {
                    role === "lender" ? <>
                        <Link className={classes.link} to={`${url}/requests`}>
                            <ListItem button >
                                Loan Requests
                            </ListItem>
                        </Link>
                        <Divider />
                    </> : role === "user" ? <>
                        <Link className={classes.link} to={`${url}/payment`}>
                            <ListItem button >
                                Payment
                            </ListItem>
                        </Link>
                        <Divider />
                    </> : null
                }
                <ListItem button className={classes.logout} onClick={handleLogout}>

                    <ExitToAppRoundedIcon></ExitToAppRoundedIcon>
                    <Typography>Logout</Typography>
                </ListItem>
                <Divider />
            </List>

        </div >
    );
};

export default DrawerContent;
