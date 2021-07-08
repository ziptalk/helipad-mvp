import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../router/config/Provider/AuthProvider";
import HeaderPresenter from "./HeaderPresenter";
import { useHistory } from "react-router-dom";
const HeaderContainer = () => {
  const { headerMode, authenticated } = useContext(AuthContext);
  const history = useHistory();
  const [userIconCategory, setUserIconCategory] = useState({
    param1: "",
    param2: "",
  });
  const [globalIconCategory, setGlobalIconCategory] = useState({
    param1: "KOR",
    param2: "ENG",
  });

  useEffect(() => {
    if (authenticated) {
      setUserIconCategory({
        ...userIconCategory,
        param1: "My Page",
        param2: "Sign out",
      });
    } else {
      setUserIconCategory({
        ...userIconCategory,
        param1: "Register",
        param2: "Sign in",
      });
    }
  }, [authenticated]);
  const onClickUserIcon = () => {};
  return (
    <HeaderPresenter
      headerMode={headerMode}
      userIconCategory={userIconCategory}
      globalIconCategory={globalIconCategory}
      onClickUserIcon={onClickUserIcon}
    />
  );
};

export default HeaderContainer;
