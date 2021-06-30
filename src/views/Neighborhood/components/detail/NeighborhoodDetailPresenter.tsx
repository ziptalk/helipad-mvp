import HeaderPresenter from "./HeaderPresenter";
import MapPresenter from "./MapPresenter";
import PropertyPresenter from "./PropertyPresenter";
import FooterPresenter from "../common/FooterPresenter";
import NeighborhoodItem from "../../../../model/NeighborhoodItem";
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
    <>
      <HeaderPresenter
        regionInfo={regionInfo}
        onClickHomesForSale={onClickHomesForSale}
      />
      <MapPresenter regionInfo={regionInfo} />
      <PropertyPresenter regionInfo={regionInfo} />
      <FooterPresenter />
    </>
  );
};
export default NeighborhoodDetailPresenter;
