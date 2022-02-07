import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import useAuthentication from "../../Hooks/useAuthentication"
import useAuth from '../../Hooks/useAuth';
import CheckoutModal from './CheckoutModal';



const Cart = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(null);
    const history = useHistory()
    const amount = 60;
    const total = 3;
    const { user } = useAuth();
    const handleCheckout = (amount) => {
        if (!user.username) {
            history.push("/dashboard/login")
        }
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
        setData(null)
    };
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Cart
                </Typography>
                <Typography variant="h5" component="div">
                    You have ordered {total} items
                </Typography>
                <Typography variant="h5" component="div">
                    Total Amount
                </Typography>
                <Typography sx={{ mb: 1.5 }} variant="h3" color="text.primary">
                    $ {amount}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => handleCheckout(amount)} size="large" variant="outlined" >Proceed To CheckOut</Button>
                <CheckoutModal
                    open={open}
                    handleClose={handleClose}
                    total={total}
                    amount={amount}
                    setOpen={setOpen}
                    data={data}
                    setData={setData}
                ></CheckoutModal>
            </CardActions>
        </Card>

    );
};

export default Cart;