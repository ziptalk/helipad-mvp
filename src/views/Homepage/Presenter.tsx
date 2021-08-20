import styled from "styled-components";
import Main from "./Main";
import ServiceGuidance from "./ServiceGuidance";
import FindProperty from "./FindProperty";
import FindBuyer from "./FindBuyer";
import Establishment from "./Establishment";
import HandleHouse from "./HandleHouse";
import GetStarted from "./GetStarted";
import VideoPlayerPresenter from "./videoPlayerPresenter";
const HomePagePresenter = () => {
  return (
    <Container>
      <VideoPlayerPresenter />
      <Main />
      <ServiceGuidance />
      <FindProperty />
      <FindBuyer />
      <Establishment />
      <HandleHouse />
      <GetStarted />
    </Container>
  );
};
const Container = styled.div`
  max-width: 1904px;
  width: 100%;
`;
export default HomePagePresenter;
