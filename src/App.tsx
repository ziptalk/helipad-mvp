import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import AssetList from "./components/asset_list/AssetList";
import AssetDetail from "./components/asset_detail/AssetDetail";
import SignUp from "./components/login/SignUp";
import Landing from "./components/landing/Landing";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/sign-up"} component={SignUp} />
          <Route exact path={"/asset-list"} component={AssetList} />
          <Route exact path={"/asset-detail"} component={AssetDetail} />
          <Route exact path={"/landing"} component={Landing} />
        </Switch>
      </Router>
  );
}

export default App;
