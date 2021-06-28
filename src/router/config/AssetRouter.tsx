import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import { AssetDetailRoutes, AssetRoutes } from "../../views/Asset";
import PrivateRoutes from "./PrivateRouter/PrivateRoutes";
import Process from "../../views/MyPage/components/process/Process";
import ContactHistory from "../../views/MyPage/components/mypage/ContactHistory";

import NeighborhoodContainer from "../../views/Neighborhood/list/NeighborhoodContainer";
import Neighborhood from "../../views/Neighborhood/components/Neighborhood";
import NeighborhoodDetail from "../../views/Neighborhood/components/NeighborhoodDetail";
import FAQ from "../../views/Home/components/FAQ";
const AssetRouter = ({ match }: RouteComponentProps) => {
  console.log("match url :", match.url);
  console.log("match path:", match.path);
  return (
    <Switch>
      <>
        <section className="container">
          <div className="routingContainer">
            <PrivateRoutes path={`${match.url}/process`} component={Process} />
            <PrivateRoutes
              path={`${match.url}/contact`}
              component={ContactHistory}
            />
            <PrivateRoutes
              path={`${match.url}/neighborhood`}
              component={NeighborhoodContainer}
            />
            <PrivateRoutes
              path={`${match.url}/neighborhoodInfo/:regionName`}
              component={NeighborhoodDetail}
            />
            <PrivateRoutes
              path={`${match.url}/assetList`}
              component={AssetRoutes}
            />
            <PrivateRoutes path={`${match.url}/faq`} component={FAQ} />
          </div>
        </section>
      </>
    </Switch>
  );
};
export default AssetRouter;
