import React from "react";
import {Route, Switch} from "react-router-dom";
import AssetDetail from "../components/asset_detail/AssetDetail";

export const AssetDetailRoutes = () => {
    return (
        <Switch>
            <Route path="/:assetId" component={AssetDetail} />
        </Switch>
    );
}