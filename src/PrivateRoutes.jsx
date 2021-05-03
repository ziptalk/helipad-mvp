import React, { useContext } from "react";
import {Route, Redirect} from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoutes = ({ component: Component, ...parentProps}) => {
    const {authenticated, loadingAuthState} = useContext(AuthContext);
    if (loadingAuthState) {
        console.log("Render loading page...");
        return (
            <></>
        );
    }

    return (
        <Route
            {...parentProps}
            render = {routeProps =>
                authenticated ?
                    (<Component {...routeProps} />)
                        :
                    (<Redirect to={{pathname: "/inviteCodeForm", state: {prevPath: routeProps.location}}} />)
            }
        />
    )
}

export default PrivateRoutes;