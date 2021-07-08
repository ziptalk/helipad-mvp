import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../router/config/Provider/AuthProvider";
import HeaderPresenter from "./HeaderPresenter";

enum DropDownMenu {
  mypage = "MY Page",
  signout = "Sign Out",
  register = "Register",
  signin = "Sign In",
  korean = "KOR",
  english = "ENG",
}
const HeaderContainer = () => {
  const { headerMode, authenticated } = useContext(AuthContext);
  const [userIconCategory, setUserIconCategory] = useState({
    mypageOrRegister: "",
    signOutOrSignIn: "",
  });
  const [globalIconCategory, setGlobalIconCategory] = useState({
    korean: DropDownMenu.korean,
    english: DropDownMenu.english,
  });

  useEffect(() => {
    if (authenticated) {
      setUserIconCategory({
        ...userIconCategory,
        mypageOrRegister: DropDownMenu.mypage,
        signOutOrSignIn: DropDownMenu.signout,
      });
    } else {
      setUserIconCategory({
        ...userIconCategory,
        mypageOrRegister: DropDownMenu.register,
        signOutOrSignIn: DropDownMenu.signin,
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
