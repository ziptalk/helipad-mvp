import React from "react";
import "./App.css";
import AuthRouter from "./router/config/AuthRouter";
import AssetRouter from "./router/config/AssetRouter";

import { InviteCodeForm } from "./components/landing/InviteCodeForm";
import { HeaderContainer } from "./components/header/HeaderContainer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
function App() {
  return (
    <Router>
      <Switch>
        <>
          <GlobalStyle />
          <section className="container">
            <HeaderContainer />
            <div className="routingContainer">
              <Route exact path="/" component={InviteCodeForm} />
              <Route path="/auth" component={AuthRouter} />
              <Route path="/asset" component={AssetRouter} />
            </div>
          </section>
        </>
      </Switch>
    </Router>
  );
}

export default App;
