import { Box } from '@mui/system';
import React from 'react';
import { useJwt } from 'react-jwt';
import { Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../Hooks/useAuth';
import Cart from '../Cart/Cart';
import Payment from '../Cart/Stripe/Payment';
import LenderRoute from '../LenderRoute/LenderRoute';
import LoanRequests from '../LoanRequests/LoanRequests';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Contents = () => {
    let { path } = useRouteMatch();
    const { user } = useAuth()
    const { decodedToken } = useJwt(user?.accessToken)
    let role = decodedToken?.role;
    return (
        <Box>
            <Route exact path={`${path}`} >
                <Cart></Cart>
            </Route>
            <Route path={`${path}/login`} >
                <Login></Login>
            </Route>
            <Route path={`${path}/register`}>
                <Register></Register>
            </Route>
            <Switch>
                {role === "lender" ? <>
                    <LenderRoute path={`${path}/loans`}>
                        <LoanRequests></LoanRequests>
                    </LenderRoute>
                </> : role === "user" ? <>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                </> : null
                }


            </Switch>
        </Box >
    );
};

export default Contents;