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
import NeighborhoodContainer from "../../views/Neighborhood/components/list/NeighborhoodContainer";
import NeighborhoodDetailContainer from "../../views/Neighborhood/components/detail/NeighborhoodDetailContainer";
import { PotentialContainer } from "../../views/Potential/index";
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
              component={NeighborhoodDetailContainer}
            />
            <PrivateRoutes
              path={`${match.url}/assetList`}
              component={AssetRoutes}
            />
            <PrivateRoutes
              path={`${match.url}/potentialList`}
              component={PotentialContainer}
            />
            <PrivateRoutes path={`${match.url}/faq`} component={FAQ} />
          </div>
        </section>
      </>
    </Switch>
  );
};
export default AssetRouter;
