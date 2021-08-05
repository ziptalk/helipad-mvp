import React from "react";
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

const AuthRouter = ({ match }: RouteComponentProps) => {
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
      <Route path={`${match.url}/account`} component={AccountPage} />
      <Route path={`${match.url}/logout`} component={Logout} />
      {/* <PrivateRoutes path={`${match.url}/logout`} component={Logout} /> */}
      <PrivateRoutes path={`${match.url}/mypage`} component={MyPage} />
    </Switch>
  );
};

export default AuthRouter;
