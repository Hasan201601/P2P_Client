import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useAuthentication from '../../Hooks/useAuthentication';
import { useJwt } from "react-jwt"

const useStyles = makeStyles({
    link: {
        textDecoration: "none",
        fontWeight: 500,
        fontSize: "16px",
        color: "black",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center'
    },
    formField: {
        margin: "10px auto",
        width: "70%",

    },
    formButton: {
        margin: "10px auto",
        width: "70%"
    },
    formText: {
        width: "70%",
        textAlign: 'center'
    }
})

const Login = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log({ email, password })

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const { loginUser } = useAuth()

    const handleLogin = e => {
        e.preventDefault()
        loginUser(email, password)
    }
    /* const { decodedToken, isExpired } = useJwt(localStorage.getItem("user"))
    console.log({ decodedToken, isExpired }) */

    return (
        <>
            <form className={classes.form} onSubmit={handleLogin}>
                <FormControl >
                    <TextField
                        placeholder="Email"
                        type="email"
                        required className={classes.formField}
                        onChange={handleEmail}
                    />
                </FormControl>
                <FormControl >
                    <TextField
                        placeholder="Password"
                        type="passWord"
                        required className={classes.formField}
                        onChange={handlePassword}
                    />
                </FormControl>
                <Button className={classes.formButton} type="submit" variant="contained"> login</Button>
                <Typography className={classes.formText}>Don't have an account? <Link className={classes.link} to="/dashboard/register">Sign Up</Link></Typography>


            </form>
        </>
    );
};

export default Login;