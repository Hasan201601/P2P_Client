import { Alert, Button, CardActions, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const CheckoutModal = ({ data, setData, open, handleClose, total, amount, setOpen }) => {

    const [error, setError] = useState({});
    console.log(data, error);
    const { user } = useAuth()
    const currentUser = {
        id: user._id,
        name: user.username,
        email: user.email
    }
    const credentials = {
        nid: "1213424543",
        birthReg: "12d23hbh423jj"
    }

    const handleRequest = (amount) => {

        axios.post("http://localhost:5000/api/v1/loanRequest", {
            user: currentUser,
            amount: amount,
            credentials: credentials
        }, {
            headers: {
                token: `Bearer ${user.accessToken}`
            }
        })
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                setError(err)
            }

            )

    }
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Payment Details</DialogTitle>
                <DialogContent>
                    <Typography variant="h5" component="div">
                        You have ordered {total} items
                    </Typography>
                    <DialogContentText>

                    </DialogContentText>
                    <DialogContentText>
                        This is just a dummy text.
                        If you want to subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>

                </DialogContent>

                <DialogActions>
                    <CardActions>
                        <Button size="large" variant="contained" >Pay ${amount}</Button>
                    </CardActions>
                    <CardActions>
                        <Button size="large" variant="outlined" onClick={() => handleRequest(amount)} >Request Loan</Button>
                    </CardActions>
                    <Button onClick={handleClose}>{data ? "Close" : "Cancel"}</Button>

                </DialogActions>
                <DialogContentText>
                    {data && <Alert severity="success">Request Submitted Successfully</Alert>}
                </DialogContentText>
            </Dialog>
        </div>

    );
};

export default CheckoutModal;