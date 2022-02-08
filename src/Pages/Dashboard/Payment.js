import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import StripeCheckout from "react-stripe-checkout"

const KEY = "pk_test_51KQkAwAGhKHLd3RgphLQoAB4Mi0hNnaLo0x9tZ0xE9DVccIo1nPtP7PBVtAaZHKejf7I9ykTjuyoNZSbqLORaqzu00yTosWcLp"

const Payment = () => {

    const [stripeToken, setStripeToken] = useState(null)
    const history = useHistory()

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000,
                })
                console.log(res.data);
                history.push("/success")
            } catch (err) {
                console.log(err);
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken, history])

    return (
        <div style={{ height: "50vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

            {
                stripeToken ? (
                    <span>Processing. Please wait..</span>
                )
                    : (
                        <StripeCheckout
                            name="p2planding"
                            image=""
                            billingAddress
                            shippingAddress
                            description="Your total is $20"
                            amount={2000}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <Button style={{ background: "black", color: "white" }}>Pay</Button>
                        </StripeCheckout>
                    )
            }




        </div >
    );
};

export default Payment;