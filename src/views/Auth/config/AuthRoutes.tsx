import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../components/login/Login";

export const AuthRoutes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      {/*<Redirect to="/auth/signup" from="/auth" />*/}
    </Switch>
  );
};
