import HeaderPresenter from "./HeaderPresenter";
import MapPresenter from "./MapPresenter";
import PropertyPresenter from "./PropertyPresenter";
import FooterPresenter from "../../../../components/FooterPresenter";
import NeighborhoodItem from "../../../../model/NeighborhoodItem";
import styled from "styled-components";
type DetailPresenterProps = {
  regionInfo: NeighborhoodItem;
  onClickHomesForSale: (event: any) => void;
};
const NeighborhoodDetailPresenter = ({
  regionInfo,
  onClickHomesForSale,
}: DetailPresenterProps) => {
  return (
    <Container>
      <HeaderPresenter
        regionInfo={regionInfo}
        onClickHomesForSale={onClickHomesForSale}
      />
      <MapPresenter regionInfo={regionInfo} />
      <PropertyPresenter regionInfo={regionInfo} />
    </Container>
  );
};
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
export default NeighborhoodDetailPresenter;
