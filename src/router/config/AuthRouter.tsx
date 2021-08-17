import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import PrivateRoutes from "./PrivateRouter/PrivateRoutes";
import { Logout } from "../../views/Auth/components";
import LoginAndRegisterContainer from "../../views/Auth";
import MyPage from "../../views/MyPage/components/mypage/MyPage";
import AccountPage from "../../views/Account/components/AccountPage";
import ContactPage from "../../views/Contact/components/ContactPage";
import WaitlistPage from "../../views/Waitlist/components/WaitlistPage";
import VIPClientPage from "../../views/Waitlist/components/VIPClientPage";
const AuthRouter = ({ match }: RouteComponentProps) => {
  const [isLandingPage, setIsLandingPage] = useState(false);
  return (
    <Switch>
      <Route
        path={`${match.url}/login`}
        component={LoginAndRegisterContainer}
      />
      <Route
        path={`${match.url}/registerForm`}
        component={LoginAndRegisterContainer}
      />
      <Route path={`${match.url}/contact`} component={ContactPage} />
      <Route path={`${match.url}/account`} component={AccountPage} />
      <Route path={`${match.url}/logout`} component={Logout} />
      <Route path={`${match.url}/waitlist`} component={WaitlistPage} />
      <Route path={`${match.url}/vipclient`} render={(props) => (
                  <VIPClientPage
                    isLandingPage={isLandingPage}
                    setIsLandingPage={setIsLandingPage}
                  />
                )}/>
      {/* <PrivateRoutes path={`${match.url}/logout`} component={Logout} /> */}
      <PrivateRoutes path={`${match.url}/mypage`} component={MyPage} />
    </Switch>
  );
};

export default AuthRouter;
