import { Divider, List, ListItem, } from "@mui/material";
import { Link } from "react-router-dom";

import React from 'react';
import { useRouteMatch } from "react-router-dom";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    link: {
        textDecoration: "none",
        display: "block",
        padding: "5px 20px",
        fontWeight: 500,
        fontSize: "16px",
        color: "black",
    }
})

const DrawerContent = () => {
    const classes = useStyles()
    let { url } = useRouteMatch();
    console.log(url)
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
            </List>

        </div >
    );
};

export default DrawerContent;
