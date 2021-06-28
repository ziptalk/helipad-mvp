import { useState, useEffect } from "react";
import GenNeighborhoodList from "../../../domain/GetNeighborhoodList";
import NeighborhoodPresenter from "./NeighborhoodPresenter";
import NeighborhoodItem from "../../../model/NeighborhoodItem";
const NeighborhoodContainer = () => {
  const [neighborhoodList, setNeighborhoodList] = useState<NeighborhoodItem[]>(
    []
  );

  useEffect(() => {
    const newNeighborhoodList = GenNeighborhoodList.get();
    setNeighborhoodList([...neighborhoodList, ...newNeighborhoodList]);
  }, []);

  if (neighborhoodList.length === 0) {
    return <div>Loading...</div>;
  }

  return <NeighborhoodPresenter neighborhoodList={neighborhoodList} />;
};

export default NeighborhoodContainer;
