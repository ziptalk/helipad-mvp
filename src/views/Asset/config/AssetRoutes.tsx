import React from "react";
import { Route, Switch } from "react-router-dom";
import AssetList from "../components/asset_list/AssetList";
import AssetDetail from "../components/asset_detail/AssetDetail";

export const AssetRoutes = ({ match }: any) => {
    console.log("match path : ", match.path);
    return (
        <>
            <Route exact path={match.path} component={AssetList} />
            <Route path={`${match.path}/:assetId`} component={AssetDetail} />
        </>
    );
}