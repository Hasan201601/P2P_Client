import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';



const Cart = () => {
    const history = useHistory()
    const amount = 39
    const handleCheckout = (amount) => {
        const user = false;
        if (!user) {
            history.push("/dashboard/login")
        }
    }
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Cart
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
            </CardActions>
        </Card>

    );
};

export default Cart;