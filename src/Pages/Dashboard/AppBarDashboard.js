import { AppBar, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles({
    link: {
        textDecoration: "none",
        display: "block",
        marginLeft: "20px",
        fontWeight: 500,
        fontSize: "16px",
        color: "white",
    }
})

const AppBarDashboard = ({ drawerWidth, handleDrawerToggle }) => {
    const classes = useStyles();
    let { url } = useRouteMatch();
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }

            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: { xs: "space-between", sm: "flex-end" } }}>

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Link className={classes.link} to={`${url}/login`}><AccountCircleRoundedIcon style={{ cursor: "pointer" }} /></Link>

            </Toolbar>

        </AppBar >
    );
};

export default AppBarDashboard;