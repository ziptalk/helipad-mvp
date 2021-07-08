import PotentialPresenter from "./PotentialPresenter";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../router/config/Provider/AuthProvider";
const PotentialContainer = () => {
  const { setHeaderMode } = useContext(AuthContext);
  useEffect(() => {
    setHeaderMode("black");
  });
  const onClick = (event: any) => {
    console.log(event.target.parentNode.classList.contains("check"));
    if (event.target.parentNode.classList.contains("check")) {
      event.target.parentNode.classList.remove("check");
    } else {
      event.target.parentNode.classList.add("check");
    }
  };
  return <PotentialPresenter onClick={onClick} />;
};

export default PotentialContainer;
