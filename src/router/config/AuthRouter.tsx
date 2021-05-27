import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import PrivateRoutes from "./PrivateRouter/PrivateRoutes";
import { AssetDetailRoutes, AssetRoutes } from "../../views/Asset";

import {
  Login,
  Logout,
  SignUp,
  RegisterForm,
  RegisterForm2,
} from "../../views/Auth/components";
import MyPage from "../../views/MyPage/components/mypage/MyPage";
import Process from "../../views/MyPage/components/process/Process";
import ContactHistory from "../../views/MyPage/components/mypage/ContactHistory";
import Neighborhood from "../../views/Neighborhood/components/Neighborhood";
import NeighborhoodDetail from "../../views/Neighborhood/components/NeighborhoodDetail";
import { InviteCodeForm } from "../../components/landing/InviteCodeForm";

const AuthRouter = ({ match }: RouteComponentProps) => {
  console.log("application match url : ", match.url);
  return (
    <Switch>
      <>
        <section className="container">
          <div className="routingContainer">
            <Route path={`${match.url}/login`} component={Login} />
            <Route path={`${match.url}/signup`} component={SignUp} />
            <Route
              path={`${match.url}/registerForm`}
              component={RegisterForm}
            />
            <Route
              path={`${match.url}/registerForm2`}
              component={RegisterForm2}
            />

            <PrivateRoutes path={`${match.url}/logout`} component={Logout} />
            <PrivateRoutes path={`${match.url}/mypage`} component={MyPage} />

            {/* <Redirect to="/asset/assetList" from="/" />
            <Redirect to="/asset/neighborhood" from="/" /> */}
          </div>
        </section>
      </>
    </Switch>

    // <Router>
    //   <Switch>
    //     <section className="container">
    //       <HeaderContainer />
    //       <div className="routingContainer">
    //         <PrivateRoutes path="/asset" component={AssetRoutes} />
    //         <Route exact path="/" component={InviteCodeForm} />
    //         <Route path="/login" component={Login} />
    //         <PrivateRoutes path="/logout" component={Logout} />
    //         <Route path="/signup" component={SignUp} />
    //         <Route path="/registerForm" component={RegisterForm} />
    //         <PrivateRoutes path="/mypage" component={MyPage} />
    //         <PrivateRoutes path="/process" component={Process} />
    //         <PrivateRoutes path="/contact" component={ContactHistory} />
    //         <PrivateRoutes path="/neighborhood" component={Neighborhood} />
    //         <PrivateRoutes
    //           path="/neighborhoodInfo/:id"
    //           component={NeighborhoodDetail}
    //         />
    //         <Redirect to="/asset" from="/" />
    //         <Redirect to="/neighborhood" from="/" />
    //       </div>
    //     </section>
    //   </Switch>
    // </Router>
  );
};

export default AuthRouter;
