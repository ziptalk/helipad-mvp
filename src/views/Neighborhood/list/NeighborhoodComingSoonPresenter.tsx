import styled from "styled-components";
import { ReactComponent as LasVegasSvg } from "../../../images/Neighborhood/ic_lasVegas.svg";
import { ReactComponent as SanDiegoSvg } from "../../../images/Neighborhood/ic_sanDiego.svg";
const NeighborhoodComingSoonPresenter = () => {
  return (
    <Container>
      <Title>Coming Soon</Title>
      <Content>
        <LasVegas></LasVegas>
        <SanDiego></SanDiego>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 103px;
`;
const Title = styled.div`
  font-family: Poppins;
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: 90px;
  letter-spacing: -2px;
  text-align: center;
  margin-bottom: 85px;
`;
const Content = styled.div`
  margin: 0 60px;
  display: flex;
  justify-content: space-between;
`;

const LasVegas = styled(LasVegasSvg)``;
const SanDiego = styled(SanDiegoSvg)``;

const Name = styled.div``;
export default NeighborhoodComingSoonPresenter;
