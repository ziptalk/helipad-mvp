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
      {neighborhoodList.map((neighborhood, idx) => (
        <MainPresenter key={idx} order={idx} neighborhood={neighborhood} />
      ))}
      <ComingSoonPresenter />
      <ContactPresenter />
      <FooterPresenter />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: transparent;
`;
export default NeighborhoodPresenter;
