import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../router/config/Provider/AuthProvider";
import HeaderPresenter from "./HeaderPresenter";

enum DropDownMenu {
  ACCOUNT = "Account",
  MYPAGE = "My Page",
  SIGNOUT = "Sign Out",
  REGISTER = "Register",
  SIGNIN = "Sign In",
  KOREAN = "KOR",
  ENGLISH = "ENG",
}
const HeaderContainer = ({ isLandingPage }: any) => {
  const { headerMode, authenticated, userInfo } = useContext(AuthContext);
  const [userIconCategory, setUserIconCategory] = useState({
    account: "",
    mypageOrRegister: "",
    signOutOrSignIn: "",
  });
  const [globalIconCategory, setGlobalIconCategory] = useState({
    korean: DropDownMenu.KOREAN,
    english: DropDownMenu.ENGLISH,
  });

  useEffect(() => {
    if (authenticated) {
      setUserIconCategory({
        ...userIconCategory,
        account: DropDownMenu.ACCOUNT,
        mypageOrRegister: DropDownMenu.MYPAGE,
        signOutOrSignIn: DropDownMenu.SIGNOUT,
      });
    } else {
      setUserIconCategory({
        ...userIconCategory,
        mypageOrRegister: DropDownMenu.REGISTER,
        signOutOrSignIn: DropDownMenu.SIGNIN,
      });
    }
  }, [authenticated]);
  const onClickUserIcon = () => {};
  return (
    <HeaderPresenter
      userInfo={userInfo}
      authenticated={authenticated}
      headerMode={headerMode}
      isLandingPage={isLandingPage}
      userIconCategory={userIconCategory}
      globalIconCategory={globalIconCategory}
      onClickUserIcon={onClickUserIcon}
    />
  );
};

export default HeaderContainer;
