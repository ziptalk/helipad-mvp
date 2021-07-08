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
  console.log("regionInfo:", regionInfo);
  return (
    <Container>
      <HeaderPresenter
        regionInfo={regionInfo}
        onClickHomesForSale={onClickHomesForSale}
      />
      <MapPresenter regionInfo={regionInfo} />
      <PropertyPresenter regionInfo={regionInfo} />
      <FooterPresenter />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
`;
export default NeighborhoodDetailPresenter;
