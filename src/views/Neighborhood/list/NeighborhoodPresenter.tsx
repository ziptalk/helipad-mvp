import styled from "styled-components";
import NeighborhoodHeaderPresenter from "./NeighborhoodHeaderPresenter";
import NeighborhoodMainPresenter from "./NeighborhoodMainPresenter";
import NeighborhoodComingSoonPresenter from "./NeighborhoodComingSoonPresenter";
import NeighborhoodContactPresenter from "./NeighborhoodContactPresenter";
import NeighborhoodFooter from "./NeighborhoodFooter";
import NeighborhoodItem from "../../../model/NeighborhoodItem";

type NeighborhoodProps = {
  neighborhoodList: NeighborhoodItem[];
};
const NeighborhoodPresenter = ({ neighborhoodList }: NeighborhoodProps) => {
  return (
    <Container>
      <NeighborhoodHeaderPresenter />
      {neighborhoodList.map((neighborhood, idx) => (
        <NeighborhoodMainPresenter
          key={idx}
          order={idx}
          neighborhood={neighborhood}
        />
      ))}
      <NeighborhoodComingSoonPresenter />
      <NeighborhoodContactPresenter />
      <NeighborhoodFooter />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export default NeighborhoodPresenter;
