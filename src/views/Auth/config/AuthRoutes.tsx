import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "../components/login/Login";
import SignUp from "../components/login/SignUp";

export const AuthRoutes = () => {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            {/*<Redirect to="/auth/signup" from="/auth" />*/}
        </Switch>
    );
}