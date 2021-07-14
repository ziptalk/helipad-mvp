import PotentialPresenter from "./PotentialPresenter";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../router/config/Provider/AuthProvider";
const PotentialContainer = () => {
  const [clickedPotential, setClickedPotential] = useState(true);
  const { setHeaderMode } = useContext(AuthContext);
  useEffect(() => {
    setHeaderMode("black");
  });
  const onClick = (event: any) => {
    if (event.target.parentNode.classList.contains("check")) {
      event.target.parentNode.classList.remove("check");
    } else {
      event.target.parentNode.classList.add("check");
    }
  };
  const selectTitle = () => {};
  return (
    <>
      {clickedPotential ? (
        <PotentialPresenter onClick={onClick}></PotentialPresenter>
      ) : (
        <PotentialPresenter onClick={onClick}></PotentialPresenter>
      )}
    </>
  );
};

export default PotentialContainer;
