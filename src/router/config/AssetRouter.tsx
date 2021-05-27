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
import {
  Login,
  Logout,
  SignUp,
  RegisterForm,
} from "../../views/Auth/components";
import { InviteCodeForm } from "../../components/landing/InviteCodeForm";
import Process from "../../views/MyPage/components/process/Process";
import ContactHistory from "../../views/MyPage/components/mypage/ContactHistory";
import Neighborhood from "../../views/Neighborhood/components/Neighborhood";
import NeighborhoodDetail from "../../views/Neighborhood/components/NeighborhoodDetail";
import { composeInitialProps } from "react-i18next";

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
              component={Neighborhood}
            />
            <PrivateRoutes
              path={`${match.url}/neighborhoodInfo/:id`}
              component={NeighborhoodDetail}
            />
            <PrivateRoutes
              path={`${match.url}/assetList`}
              component={AssetRoutes}
            />
          </div>
        </section>
      </>
    </Switch>
  );
};
export default AssetRouter;
