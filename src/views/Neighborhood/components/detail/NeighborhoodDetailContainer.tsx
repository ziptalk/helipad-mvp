import { useState, useContext, useEffect } from "react";
import NeighborhoodItem from "../../../../model/NeighborhoodItem";
import { RouteComponentProps } from "react-router";
import { useHistory } from "react-router-dom";
import GetNeighborhoodList from "../../../../domain/GetNeighborhoodList";
import NeighborhoodDetailPresenter from "./NeighborhoodDetailPresenter";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
type MatchParams = {
  regionName: string;
};
const NeighborhoodDetailContainer = ({
  match,
}: RouteComponentProps<MatchParams>) => {
  let regionName = match.params.regionName;
  const history = useHistory();
  const [regionInfo, setRegionInfo] = useState<NeighborhoodItem>();
  const { setHeaderMode } = useContext(AuthContext);
  useEffect(() => {
    setHeaderMode("");
    let getResult = GetNeighborhoodList.getById(regionName)[0];
    setRegionInfo(getResult);
  }, []);

  const onClickHomesForSale = (event: any) => {
    event.preventDefault();
    setHeaderMode("");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    history.push("/asset/assetList", regionName);
  };
  if (!regionInfo) {
    return <div>Loading...</div>;
  }

  return (
    <NeighborhoodDetailPresenter
      regionInfo={regionInfo}
      onClickHomesForSale={onClickHomesForSale}
    />
  );
};

export default NeighborhoodDetailContainer;
