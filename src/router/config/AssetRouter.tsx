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
import { MypageContainer } from "../../views/Potential/index";
import FAQ from "../../views/Home/components/FAQ";
const AssetRouter = ({ match }: RouteComponentProps) => {
  return (
    <Switch>
      <>
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
          path={`${match.url}/mypage`}
          component={MypageContainer}
        />
        <PrivateRoutes path={`${match.url}/faq`} component={FAQ} />
      </>
    </Switch>
  );
};
export default AssetRouter;
