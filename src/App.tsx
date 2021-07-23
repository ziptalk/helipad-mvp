import { useState } from "react";
import "./App.css";
import AuthRouter from "./router/config/AuthRouter";
import AssetRouter from "./router/config/AssetRouter";
import ProcessRouter from "./router/config/ProcessRouter";
import InviteCodeFormContainer from "./components/landing/InviteCodeForm//InviteCodeFormContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import theme from "./globalStyle/theme";
import { AboutUs, ContactUs, FAQ } from "./views/Home/components";
import { ThemeProvider } from "styled-components";
function App() {
  const [isLandingPage, setIsLandingPage] = useState(false);
  return (
    <Router>
      <Switch>
        <>
          <ThemeProvider theme={theme}>
            {/* <GlobalStyle /> */}
            <section className="container">
              <HeaderContainer isLandingPage={isLandingPage} />
              <div className="routingContainer">
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <InviteCodeFormContainer
                      isLandingPage={isLandingPage}
                      setIsLandingPage={setIsLandingPage}
                    />
                  )}
                />
                <Route path="/auth" component={AuthRouter} />
                <Route path="/asset" component={AssetRouter} />
                <Route path="/faq" component={FAQ} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/contactus" component={ContactUs} />
                <Route path="/process" component={ProcessRouter} />
              </div>
            </section>
          </ThemeProvider>
        </>
      </Switch>
    </Router>
  );
}

export default App;
