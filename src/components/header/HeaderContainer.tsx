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
  const [scrollMove, setScrollMove] = useState(false);

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
  const handleScroll = () => {
    // console.log("Scroll event");
    // console.log("window.scrollY", window.scrollY);
    // console.log("window.pageYOffset", window.pageYOffset);
    if (window.scrollY > 10) {
      setScrollMove(true);
      console.log("fix");
    } else {
      setScrollMove(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (scrollMove) {
    console.log("scroll");
  }
  const onClickUserIcon = () => {};
  return (
    <HeaderPresenter
      scrollMove={scrollMove}
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
