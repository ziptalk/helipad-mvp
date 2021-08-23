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
import { useEffect, useState } from "react";
import { ReactComponent as LogoSvg } from "../../images/Dashboard/logo.svg";
// import { ReactComponent as DashboardSvg } from "../../images/Dashboard/dashboard.svg";

// import { ReactComponent as EscrowSvg } from "../../images/Dashboard/escrow.svg";
// import { ReactComponent as MyAgentSvg } from "../../images/Dashboard/myAgent.svg";
// import { ReactComponent as FaqSvg } from "../../images/Dashboard/faq.svg";
import dashboardImg from "../../images/Dashboard/dashboard.png";
import selectedDashboardImg from "../../images/Dashboard/SelectedDashboard.png";
import propertyImg from "../../images/Dashboard/property.png";
import selectedPropertyImg from "../../images/Dashboard/SelectedProperties.png";
import escrowImg from "../../images/Dashboard/escrow.png";
import selectedEscrowImg from "../../images/Dashboard/SelectedEscrow.png";
import myAgentImg from "../../images/Dashboard/myAgent.png";
import selectedMyAgentImg from "../../images/Dashboard/SelectedMyAgent.png";
import faqImg from "../../images/Dashboard/faq.png";
import selectedFAQImg from "../../images/Dashboard/SelectedFAQ.png";
type Props = {
  setDashboardPage: (param: boolean) => void;
  match: RouteComponentProps;
};

const DashboardContainer = ({ setDashboardPage, match }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("dashboardHome");

  const renderByCategory = () => {
    switch (selectedCategory) {
      case "dashboardHome":
        return <DashboardHome />;
      case "properties":
        return <Properties />;
      case "escrowInProcess":
        return <EscrowInProcess />;
      case "myAgent":
        return <MyAgent />;
      case "faq":
        return <Faq />;
      default:
        return <DashboardHome />;
    }
  };
  useEffect(() => {
    setDashboardPage(true);
    return () => {
      setDashboardPage(false);
    };
  }, []);
  const onClickCategory = () => {};
  return (
    <Container>
      <SideBar>
        <SideBarContent>
          <StyledLink to="/">
            <LogoWrapper>
              <StyledLogo />
            </LogoWrapper>
          </StyledLink>
          <Category onClick={() => setSelectedCategory("dashboardHome")}>
            {selectedCategory === "dashboardHome" ? (
              <Item imgPath={selectedDashboardImg} />
            ) : (
              <Item imgPath={dashboardImg} />
            )}
          </Category>
          <Category onClick={() => setSelectedCategory("properties")}>
            {selectedCategory === "properties" ? (
              <Item imgPath={selectedPropertyImg} />
            ) : (
              <Item imgPath={propertyImg} />
            )}
          </Category>
          <Category onClick={() => setSelectedCategory("escrowInProcess")}>
            {selectedCategory === "escrowInProcess" ? (
              <Item imgPath={selectedEscrowImg} />
            ) : (
              <Item imgPath={escrowImg} />
            )}
          </Category>
          <Category onClick={() => setSelectedCategory("myAgent")}>
            {selectedCategory === "myAgent" ? (
              <Item imgPath={selectedMyAgentImg} />
            ) : (
              <Item imgPath={myAgentImg} />
            )}
          </Category>
          <Category onClick={() => setSelectedCategory("faq")}>
            {selectedCategory === "faq" ? (
              <Item imgPath={selectedFAQImg} />
            ) : (
              <Item imgPath={faqImg} />
            )}
          </Category>
        </SideBarContent>
      </SideBar>
      <Router>
        <ContentContainer>{renderByCategory()}</ContentContainer>
      </Router>
    </Container>
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
const SelectedItem = styled.div``;
const Category: any = styled.div``;
const LogoWrapper = styled.div`
  min-height: 130px;
  padding: 29px 0px;
`;
const StyledLogo = styled(LogoSvg)`
  width: 100%;
`;
// const StyledDashboard = styled(DashboardSvg)`
//   width: 100%;
// `;
// const StyledProperties = styled(PropertiesSvg)`
//   width: 100%;
// `;
// const StyledEscrow = styled(EscrowSvg)`
//   width: 100%;
// `;
// const StyledMyAgent = styled(MyAgentSvg)`
//   width: 100%;
// `;
// const StyledFaq = styled(FaqSvg)`
//   width: 100%;
// `;

const StyledLink = styled(Link)`
  color: black;
`;
const Item: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  width: 100%;
  height: auto;
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f7f7f7;
`;
export default DashboardContainer;
