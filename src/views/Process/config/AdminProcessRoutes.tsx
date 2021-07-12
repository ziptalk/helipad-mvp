import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AdminProcess from "../components/adminUserProcess/AdminProcess";

export const AdminProcessRoutes = ({ match }: any) => {
  return (
    <Switch>
      <Route path={`${match.path}/:assetId`} component={AdminProcess}/>
    </Switch>
  );
};
