import styled from "styled-components";
import HeaderPresenter from "./HeaderPresenter";
import MainPresenter from "./MainPresenter";
import ComingSoonPresenter from "./ComingSoonPresenter";
import ContactPresenter from "./ContactPresenter";
import FooterPresenter from "../../../../components/FooterPresenter";
import NeighborhoodItem from "../../../../model/NeighborhoodItem";

type NeighborhoodProps = {
  neighborhoodList: NeighborhoodItem[];
};
const NeighborhoodPresenter = ({ neighborhoodList }: NeighborhoodProps) => {
  return (
    <Container>
      <HeaderPresenter />
      <MainHeaderBlock>
        <MainTitle>Neighborhood</MainTitle>
        <MainSubTitle>
          We are currently available in these Los Angeles
        </MainSubTitle>
      </MainHeaderBlock>
      {neighborhoodList.map((neighborhood, idx) => (
        <MainPresenter key={idx} order={idx} neighborhood={neighborhood} />
      ))}
      <ComingSoonPresenter />
      <ContactPresenter />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  width: 100vw;
  max-width: 1904px;
`;
const MainHeaderBlock = styled.div`
  max-width: 1904px;
  width: 80vw;
  display: flex;
  align-items: center;
  height: 286px;
  padding-top: 30px;
`;
const MainTitle = styled.div`
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: 90px;
  letter-spacing: -2px;
  text-align: left;
  margin-left: 212px;
`;
const MainSubTitle = styled.div`
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: 0px;
  text-align: left;
  margin-left: 45px;
  padding-top: 17px;
`;
export default NeighborhoodPresenter;
