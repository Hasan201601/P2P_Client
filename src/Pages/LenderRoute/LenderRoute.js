import { useJwt } from 'react-jwt';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const LenderRoute = ({ children, ...rest }) => {
    const { user } = useAuth()
    const { decodedToken } = useJwt(user?.accessToken)
    let role = decodedToken?.role;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && role === "lender" ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default LenderRoute;