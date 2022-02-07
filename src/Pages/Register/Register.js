import { Button, FormControl, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useAuthentication from '../../Hooks/useAuthentication';

const useStyles = makeStyles({
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
    },
    link: {
        textDecoration: "none",
        fontWeight: 500,
        fontSize: "16px",
        color: "black",
    }
})

const Register = () => {
    const classes = useStyles();
    const [role, setRole] = useState("user");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleName = (event) => {
        setName(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleChange = (event) => {
        setRole(event.target.value);
    };
    const { RegisterUser } = useAuth()

    const handleRegister = e => {
        e.preventDefault()
        RegisterUser(name, email, password, role)
    }
    return (
        <form className={classes.form} onSubmit={handleRegister}>
            <FormControl >
                <TextField
                    placeholder="Name"
                    type="text"
                    className={classes.formField}
                    onChange={handleName}
                />
            </FormControl>
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
            <FormControl >
                <p className={classes.formText} style={{ margin: "0", padding: '0' }}>Choose Account Type</p>
                <select
                    style={{ padding: "10px 0", fontSize: "20px" }}
                    defaultvalue={"Choose Account Type"}
                    onChange={handleChange} className={classes.formField}
                >

                    <option value={"user"}>User</option>
                    <option value={"lender"}>Lender</option>
                </select>
            </FormControl>
            <Button className={classes.formButton} type="submit" variant="contained"> Register</Button>
            <Typography className={classes.formText}>Already have an account? <Link className={classes.link} to="/dashboard/login">Login</Link></Typography>

        </form>
    );
};

export default Register;