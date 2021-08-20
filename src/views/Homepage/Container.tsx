import HomePagePresenter from "./Presenter";
import { AuthContext } from "../../router/config/Provider/AuthProvider";
import { useEffect, useContext } from "react";

const HomePageContainer = () => {
  const { setHeaderMode } = useContext(AuthContext);
  useEffect(() => {
    setHeaderMode("homepage");
  }, []);
  return <HomePagePresenter />;
};

export default HomePageContainer;
