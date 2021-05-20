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
<<<<<<< HEAD
import GlobalStyle from "./GlobalStyle";
=======
>>>>>>> [wip] Divide asset, auth routing
function App() {
  return (
    <Router>
      <Switch>
        <>
<<<<<<< HEAD
          <GlobalStyle />
=======
>>>>>>> [wip] Divide asset, auth routing
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
