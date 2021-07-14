import "./App.css";
import AuthRouter from "./router/config/AuthRouter";
import AssetRouter from "./router/config/AssetRouter";
import ProcessRouter from "./router/config/ProcessRouter";
import InviteCodeFormContainer from "./components/landing/InviteCodeForm//InviteCodeFormContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { AboutUs, ContactUs, FAQ } from "./views/Home/components";

function App() {
  return (
    <Router>
      <Switch>
        <>
          <GlobalStyle />
          <section className="container">
            <HeaderContainer />
            <div className="routingContainer">
              <Route exact path="/" component={InviteCodeFormContainer} />
              <Route path="/auth" component={AuthRouter} />
              <Route path="/asset" component={AssetRouter} />
              <Route path="/faq" component={FAQ} />
              <Route path="/aboutus" component={AboutUs} />
              <Route path="/contactus" component={ContactUs} />
              <Route path="/process" component={ProcessRouter} />
            </div>
          </section>
        </>
      </Switch>
    </Router>
  );
}

export default App;
