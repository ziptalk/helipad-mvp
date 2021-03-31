import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import AssetList from "./components/asset_list/AssetList";
import AssetDetail from "./components/asset_detail/AssetDetail";
import SignUp from "./components/login/SignUp";
import Landing from "./components/landing/Landing";
import Header from "./components/header/Header";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
      <Router>
          <Switch>
              <section className="container">
                  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
                  <Header />
                  <div className="routingContainer">
                      <Route exact path={"/login"} component={Login} />
                      <Route exact path={"/sign-up"} component={SignUp} />
                      <Route exact path={"/asset-list"} component={AssetList} />
                      <Route exact path={"/asset-detail"} component={AssetDetail} />
                      <Route exact path={"/landing"} component={Landing} />
                  </div>
                  <Footer />
              </section>
          </Switch>
      </Router>
  );
}

export default App;
