import { useState } from "react";
import "./App.css";
import AuthRouter from "./router/config/AuthRouter";
import AssetRouter from "./router/config/AssetRouter";
import ProcessRouter from "./router/config/ProcessRouter";
import InviteCodeFormContainer from "./components/landing/InviteCodeForm//InviteCodeFormContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import FooterPresenter from "./components/FooterPresenter";
import { WaitlistPage } from "./views/Waitlist";
import DashboardContainer from "./views/Dashboard";
import HomePageContainer from "./views/Homepage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import theme from "./globalStyle/theme";
import { AboutUs, ContactUs, FAQ } from "./views/Home/components";
import { ThemeProvider } from "styled-components";
import Logout from "./views/Auth/components/login/Logout";
function App() {
  const [isLandingPage, setIsLandingPage] = useState(false);
  const [dashboardPage, setDashboardPage] = useState(false);
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <section className="container">
            <HeaderContainer
              dashboardPage={dashboardPage}
              isLandingPage={isLandingPage}
            />
            <div className="routingContainer">
              <Route exact path="/" component={HomePageContainer} />
              <Route
                exact
                path="/aboutus"
                render={(props) => (
                  <InviteCodeFormContainer
                    isLandingPage={isLandingPage}
                    setIsLandingPage={setIsLandingPage}
                  />
                )}
              />
              <Route
                exact
                path="/dashboard"
                render={(match) => (
                  <DashboardContainer
                    setDashboardPage={setDashboardPage}
                    match={match}
                  />
                )}
              />

              <Route path="/waitlist" component={WaitlistPage} />
              <Route path="/auth" component={AuthRouter} />
              <Route path="/asset" component={AssetRouter} />
              {/* <Route path="/faq" component={FAQ} /> */}
              {/* <Route path="/aboutus" component={AboutUs} /> */}
              <Route path="/contactus" component={ContactUs} />
              <Route path="/process" component={ProcessRouter} />
            </div>
            <FooterPresenter dashboardPage={dashboardPage} />
          </section>
        </ThemeProvider>
      </Switch>
    </Router>
  );
}

export default App;
