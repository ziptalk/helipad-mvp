import { useState, useEffect, useContext } from "react";
import GenNeighborhoodList from "../../../../domain/GetNeighborhoodList";
import NeighborhoodPresenter from "./NeighborhoodPresenter";
import NeighborhoodItem from "../../../../model/NeighborhoodItem";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
const NeighborhoodContainer = () => {
  const [neighborhoodList, setNeighborhoodList] = useState<NeighborhoodItem[]>(
    []
  );
  const { setHeaderMode } = useContext(AuthContext);

  useEffect(() => {
    setHeaderMode("neighborhoodList");
    const newNeighborhoodList = GenNeighborhoodList.get();
    setNeighborhoodList([...neighborhoodList, ...newNeighborhoodList]);
  }, []);

  if (neighborhoodList.length === 0) {
    return <div>Loading...</div>;
  }

  return <NeighborhoodPresenter neighborhoodList={neighborhoodList} />;
};

export default NeighborhoodContainer;
