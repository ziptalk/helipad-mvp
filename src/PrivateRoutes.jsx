import React, { useContext } from "react";
import {Route, Redirect} from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoutes = ({ component: Component, ...parentProps}) => {
    const {authenticated, loadingAuthState} = useContext(AuthContext);
    console.log("PrivateRoutes: authenticated? ", authenticated);
    console.log("PrivateRoutes: loadingAuthState: ", loadingAuthState);
    console.log("PrivateRoutes: rest: ", parentProps);
    if (loadingAuthState) {
        console.log("Render loading page...");
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    // return (
    //     <Route
    //         {...parentProps}
    //         render = {routeProps => <Component {...routeProps} />} />
    // );

    return (
        <Route
            {...parentProps}
            render = {routeProps =>
                authenticated ?
                    (<Component {...routeProps} />)
                        :
                    (<Redirect to={{pathname: "/login", state: {prevPath: routeProps.location}}} />)
            }
        />
    )
}

export default PrivateRoutes;