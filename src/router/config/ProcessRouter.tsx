import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import { ProcessRoutes, AdminProcessRoutes } from "../../views/Process";
import PrivateRoutes from "./PrivateRouter/PrivateRoutes";
// import Process from "../../views/MyPage/components/process/Process";

const ProcessRouter = ({ match }: RouteComponentProps) => {
  console.log("match url :", match.url);
  console.log("match path:", match.path);
  return (
    <Switch>
      <>
        <section className="container">
          <div className="routingContainer">
            {/* <PrivateRoutes path={`${match.url}/process`} component={Process} /> */}
            <PrivateRoutes
              path={`${match.url}/userprocess`}
              component={ProcessRoutes}
            />
            <PrivateRoutes
              path={`${match.url}/adminprocess`}
              component={AdminProcessRoutes}
            />
          </div>
        </section>
      </>
    </Switch>
  );
};
export default ProcessRouter;
