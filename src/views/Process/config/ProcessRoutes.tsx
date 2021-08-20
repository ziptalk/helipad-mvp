import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NormalUserProcess from "../components/normalUserProcess/NormalUserProcess";

export const ProcessRoutes = ({ match }: any) => {
  return (
    <Switch>
      <Route path={`${match.path}/:assetId`} component={NormalUserProcess} />
    </Switch>
  );
};
