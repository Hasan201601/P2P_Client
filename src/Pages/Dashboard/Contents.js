import { Box } from '@mui/system';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import Cart from '../Cart/Cart';
import Payment from '../Cart/Stripe/Payment';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Contents = () => {
    let { path } = useRouteMatch();
    console.log(path)
    return (
        <Box>
            <Route exact path={`${path}`} >
                <Cart></Cart>
            </Route>
            <Switch>
                <Route path={`${path}/login`} >
                    <Login></Login>
                </Route>
                <Route path={`${path}/register`}>
                    <Register></Register>
                </Route>
                <Route path={`${path}/payment`}>
                    <Payment></Payment>
                </Route>
            </Switch>
        </Box>
    );
};

export default Contents;