import DashboardHome from "./DashboardHome";
import EscrowInProcess from "./EscrowInProcess";
import MyAgent from "./MyAgent";
import Properties from "./Properties";
import Faq from "./Faq";
import App from "../../App";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  RouteComponentProps,
} from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { ReactComponent as LogoSvg } from "../../images/Dashboard/logo.svg";
import { ReactComponent as DashboardSvg } from "../../images/Dashboard/dashboard.svg";
import { ReactComponent as PropertiesSvg } from "../../images/Dashboard/properties.svg";
import { ReactComponent as EscrowSvg } from "../../images/Dashboard/escrow.svg";
import { ReactComponent as MyAgentSvg } from "../../images/Dashboard/myAgent.svg";
import { ReactComponent as FaqSvg } from "../../images/Dashboard/faq.svg";

type Props = {
  setDashboardPage: (param: boolean) => void;
  match: RouteComponentProps;
};
const DashboardContainer = ({ setDashboardPage, match }: Props) => {
  useEffect(() => {
    setDashboardPage(true);
    return () => {
      setDashboardPage(false);
    };
  });

  return (
    <Router>
      <Container>
        <SideBar>
          <SideBarContent>
            <StyledLink to="/">
              <LogoWrapper>
                <StyledLogo />
              </LogoWrapper>
            </StyledLink>
            <StyledLink to="/dashboard/dashboardHome">
              <StyledDashboard />
            </StyledLink>
            <StyledLink to="/dashboard/properties">
              <StyledProperties />
            </StyledLink>
            <StyledLink to={`/dashboard/escrowInProcess`}>
              <StyledEscrow />
            </StyledLink>
            <StyledLink to={`/dashboard/myAgent`}>
              <StyledMyAgent />
            </StyledLink>
            <StyledLink to={`/dashboard/faq`}>
              <StyledFaq />
            </StyledLink>
          </SideBarContent>
        </SideBar>

        <ContentContainer>
          <Route
            exact
            path="/dashboard"
            render={() => <DashboardHome setDashboardPage={setDashboardPage} />}
          />
          <Route
            exact
            path={`${match.match.url}/dashboardHome`}
            // path="/dashboard/dashboardHome"

            render={() => <DashboardHome setDashboardPage={setDashboardPage} />}
          />

          <Route
            exact
            path={`${match.match.url}/properties`}
            render={() => <Properties setDashboardPage={setDashboardPage} />}
          />
          <Route
            exact
            path={`${match.match.url}/escrowInProcess`}
            render={() => (
              <EscrowInProcess setDashboardPage={setDashboardPage} />
            )}
          />
          <Route
            exact
            path={`${match.match.url}/myAgent`}
            render={() => <MyAgent setDashboardPage={setDashboardPage} />}
          />
          <Route exact path={`${match.match.url}/faq`} render={() => <Faq />} />
        </ContentContainer>
      </Container>
    </Router>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* max-width: 1904px; */
  max-width: 1904px;
  display: flex;
  margin: 0 auto;
`;
const SideBar = styled.div`
  width: 243px;
  height: 100vh;
  background: #f7f7f7;
`;
const SideBarContent = styled.div`
  width: 100%;

  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const LogoWrapper = styled.div`
  min-height: 130px;
  padding: 29px 0px;
`;
const StyledLogo = styled(LogoSvg)`
  width: 100%;
`;
const StyledDashboard = styled(DashboardSvg)`
  width: 100%;
`;
const StyledProperties = styled(PropertiesSvg)`
  width: 100%;
`;
const StyledEscrow = styled(EscrowSvg)`
  width: 100%;
`;
const StyledMyAgent = styled(MyAgentSvg)`
  width: 100%;
`;
const StyledFaq = styled(FaqSvg)`
  width: 100%;
`;

const StyledLink = styled(Link)`
  color: black;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f7f7f7;
`;
export default DashboardContainer;
