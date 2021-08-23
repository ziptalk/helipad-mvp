import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as WhiteLogoSvg } from "../../images/Header/ic_logo_white.svg";
import { ReactComponent as BlackLogoSvg } from "../../images/Header/ic_logo_black.svg";
import { ReactComponent as BlackUserSvg } from "../../images/Header/ic_blackUser.svg";
import { ReactComponent as WhiteUserSvg } from "../../images/Header/ic_whiteUser.svg";
import { ReactComponent as BlackGlobalSvg } from "../../images/Header/ic_blackGlobal.svg";
import { ReactComponent as WhiteGlobalSvg } from "../../images/Header/ic_whiteGlobal.svg";
import { ReactComponent as ContactUsSvg } from "../../images/Header/ic_contactUs.svg";
import BlackChatBot from "../BlackChatBot";
import { ReactComponent as SearchSvg } from "../../images/Header/ic_search.svg";
import DropdownMenu from "../DropdownMenu";
import { useTranslation } from "react-i18next";
import { Languages, languages } from "../../Locales/i18n";
import { useState, useEffect, useContext } from "react";

enum DropDownMenu {
  ACCOUNT = "Account",
  MYPAGE = "My Page",
  SIGNOUT = "Sign Out",
  REGISTER = "Register",
  SIGNIN = "Sign In",
  KOREAN = "KOR",
  ENGLISH = "ENG",
}
const HeaderPresenter = ({
  scrollMove,
  headerMode,
  authenticated,
  isLandingPage,
  userIconCategory,
  globalIconCategory,
  setGlobalIconCategory,
  dashboardPage,
  userInfo,
}: any) => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    function checkLanguage() {
      let currentLanguage = localStorage.getItem("language");
      console.log(currentLanguage);

      if (currentLanguage == "en" || currentLanguage == "ko") {
        handleChangeLanguage(currentLanguage);
      }
    }

    window.addEventListener("storage", checkLanguage);

    return () => {
      window.removeEventListener("storage", checkLanguage);
    };
  }, []);

  console.log("header username:", userInfo);
  console.log("header mode:", headerMode);
  console.log("authenticated:", authenticated);
  const renderByHeaderMode = () => {
    switch (headerMode) {
      default:
        return (
          <CategoryContainer authenticated={authenticated}>
            <StyledLink to="/asset/assetList">
              <CategoryName primary scrollMove={scrollMove} color={headerMode}>
                {t("navigation_1")}
              </CategoryName>
            </StyledLink>
            <StyledLink to="/sellpage">
              <CategoryName primary scrollMove={scrollMove} color={headerMode}>
                {t("navigation_2")}
              </CategoryName>
            </StyledLink>
            <StyledLink to="/propertyManagement">
              {t("navigation_3") == "임대 관리" ? (
                <>
                  <CategoryName scrollMove={scrollMove} color={headerMode}>
                    {t("navigation_3")}
                  </CategoryName>
                </>
              ) : (
                <>
                  <CategoryName
                    scrollMove={scrollMove}
                    color={headerMode}
                  >
                    {t("navigation_3")}
                  </CategoryName>
                </>
              )}
            </StyledLink>
            <StyledLink to="/asset/assetList">
              <CategoryName scrollMove={scrollMove} color={headerMode}>
                {t("navigation_4")}
              </CategoryName>
            </StyledLink>
            <StyledLink to="/aboutus">
              <CategoryName scrollMove={scrollMove} color={headerMode}>
                {t("navigation_5")}
              </CategoryName>
            </StyledLink>
          </CategoryContainer>
        );
    }
  };
  return (
    <Container
      dashboardPage={dashboardPage}
      scrollMove={scrollMove}
      color={headerMode}
      isLandingPage={isLandingPage}
    >
      <ContentContainer
        scrollMove={scrollMove}
        color={headerMode}
        isLandingPage={isLandingPage}
      >
        <Link to="/">
          <BlackLogo scrollMove={scrollMove} color={headerMode} />
        </Link>
        <MenuBlock>
          {renderByHeaderMode()}
          {/* <BlackChatBot></BlackChatBot> */}
          {authenticated ? (
            <Link to="/auth/logout">
              <LoginButton onClick={() => console.log("signout")}>
                SIGN OUT
              </LoginButton>
            </Link>
          ) : (
            <Link to="/auth/login">
              <LoginButton onClick={() => console.log("signin")}>
                SIGN IN
              </LoginButton>
            </Link>
          )}

          <IconBlock>
            {authenticated ? (
              <IconBlock>
                <DropDownContainer>
                  <DropdownMenu
                    Component={() => (
                      <BlackUser scrollMove={scrollMove} color={headerMode} />
                    )}
                    account={userIconCategory.account}
                    mypageOrRegister={userIconCategory.mypageOrRegister}
                    signOutOrSignIn={userIconCategory.signOutOrSignIn}
                  />
                  <Username
                    scrollMove={scrollMove}
                    color={headerMode}
                  >{`${userInfo.firstName} ${userInfo.lastName}`}</Username>
                </DropDownContainer>
                <DropDownContainer>
                  <DropdownMenu
                    Component={() => (
                      <BlackGlobal scrollMove={scrollMove} color={headerMode} />
                    )}
                    setGlobalIconCategory={setGlobalIconCategory}
                    mypageOrRegister={DropDownMenu.KOREAN}
                    signOutOrSignIn={DropDownMenu.ENGLISH}
                  />
                  <Language scrollMove={scrollMove} color={headerMode}>
                    {globalIconCategory}
                  </Language>
                </DropDownContainer>
                <Link to="/auth/contact">
                  <ContactUs
                    style={{ marginTop: "10px" }}
                    scrollMove={scrollMove}
                    color={headerMode}
                  />
                </Link>
              </IconBlock>
            ) : (
              <IconBlock>
                <DropDownContainer>
                  <DropdownMenu
                    Component={() => (
                      <BlackUser scrollMove={scrollMove} color={headerMode} />
                    )}
                    userInfo={userInfo}
                    mypageOrRegister={userIconCategory.mypageOrRegister}
                    signOutOrSignIn={userIconCategory.signOutOrSignIn}
                  />
                </DropDownContainer>
                <DropDownContainer>
                  <DropdownMenu
                    Component={() => (
                      <BlackGlobal scrollMove={scrollMove} color={headerMode} />
                    )}
                    setGlobalIconCategory={setGlobalIconCategory}
                    mypageOrRegister={DropDownMenu.KOREAN}
                    signOutOrSignIn={DropDownMenu.ENGLISH}
                  />
                  <Language scrollMove={scrollMove} color={headerMode}>
                    {globalIconCategory}
                  </Language>
                </DropDownContainer>
                <Link to="/auth/contact">
                  <ContactUs
                    style={{ marginTop: "10px" }}
                    scrollMove={scrollMove}
                    color={headerMode}
                  />
                </Link>
              </IconBlock>
            )}
          </IconBlock>
        </MenuBlock>
      </ContentContainer>
    </Container>
  );
};
const Container: any = styled.div`
  display: ${(props: any) => props.dashboardPage && "none"};
  height: 112px;
  width: 100vw;
  z-index: 3;
  background-color: white;
  background-color: ${(props: any) =>
    (props.color === "inviteCodeForm" ||
      props.color === "neighborhoodList" ||
      props.color === "contactForm") &&
    "transparent"};

  background-color: ${(props: any) => props.color === "homepage" && "black"};
  position: ${(props: any) =>
    (props.color === "inviteCodeForm" ||
      props.color === "homepage" ||
      props.color === "neighborhoodList" ||
      props.color === "contactForm") &&
    "fixed"};
  top: ${(props: any) =>
    (props.color === "inviteCodeForm" ||
      props.color === "homepage" ||
      props.color === "neighborhoodList" ||
      props.color === "contactForm") &&
    "0px"};
  text-align: ${(props: any) =>
    (props.color === "inviteCodeForm" ||
      props.color === "homepage" ||
      props.color === "neighborhoodList" ||
      props.color === "contactForm") &&
    "center"};
  z-index: ${(props: any) =>
    (props.color === "inviteCodeForm" ||
      props.color === "homepage" ||
      props.color === "neighborhoodList" ||
      props.color === "contactForm") &&
    3};
  /* max-width: ${(props: any) =>
    (props.color === "inviteCodeForm" ||
      props.color === "neighborhoodList" ||
      props.color === "contactForm") &&
    "1904px"}; */

  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    height: 80px;
  }

  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    height: 80px;
  }

  background-color: ${(props: any) => props.scrollMove && "white"};
  color: ${(props: any) => props.scrollMove && "#212121"};
  position: ${(props: any) => props.scrollMove && "fixed"};
  top: ${(props: any) => props.scrollMove && "0px"};
  transition: all ease-in-out 0.5s;
  border: none;
`;
const ContentContainer: any = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 112px;
  width: 100vw; */
  /* margin: 0 auto; */
  max-width: 1904px;
  position: relative;
  top: 0px;
  /* z-index: 3; */
  background-color: white;
  margin: 0 auto;
  height: 100%;
  background-color: ${(props: any) =>
    (props.color === "inviteCodeForm" ||
      props.color === "neighborhoodList" ||
      props.color === "contactForm") &&
    "transparent"};
  background-color: ${(props: any) => props.color === "homepage" && "black"};
  background-color: ${(props: any) => props.scrollMove && "white"};
  transition: all ease-in-out 0.5s;
  border: none;
`;

const CategoryContainer: any = styled.div`
  /* width: 12%; */
  max-width: 600px;
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-right: 40px;
  gap: 30px;
  /* margin-right: ${(props: any) => props.authenticated && "100px"}; */
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    width: 80%;
  }
`;
const StyledLink = styled(Link)`
  width: 100%;
`;
const MenuBlock = styled.div`
  display: flex;
  align-items: center;
`;
const BlackLogo: any = styled(BlackLogoSvg)`
  margin-left: 1vw;
  position: relative;
  z-index: 1;
  fill: ${(props: any) =>
    props.color === "contactForm" || props.color === "homepage"
      ? "white"
      : props.color === "neighborhoodList"
      ? "black"
      : "black"};
  fill: ${(props: any) => props.scrollMove && "black"};

  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    margin-left: 4vw;
    width: 150px;
  }
`;
const CategoryName: any = styled.div`
  min-width: 100px;
  text-align: center;
  font-size: 18px;
  font-size: clamp(14px, 1.1vw, 22px);
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0px;

  color: ${(props: any) =>
    props.color === "homepage"
      ? "white"
      : props.color === "neighborhoodList" || props.color === "contactForm"
      ? "white"
      : "black"};
  color: ${(props: any) => props.scrollMove && "#212121"};
  position: relative;
  z-index: 1;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 15px;
  }
  min-width: ${(props: any) => props.primary && "60px"};
`;
const Neighborhood: any = styled(CategoryName)``;
const FAQ: any = styled(CategoryName)``;

const IconBlock = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;
const DropDownContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Username: any = styled.div`
  padding-top: 2px;
  font-size: 12px;
  color: white;
  color: ${(props: any) =>
    props.color === "homepage"
      ? "white"
      : props.color === "neighborhoodList" || props.color === "contactForm"
      ? "white"
      : "black"};
  color: ${(props: any) => props.scrollMove && "#212121"};
`;
const Language: any = styled(Username)``;
const BlackUser: any = styled(BlackUserSvg)`
  margin-right: 9px;
  position: relative;
  z-index: 1;
  stroke: ${(props: any) =>
    props.color === "homepage"
      ? "white"
      : props.color === "neighborhoodList" || props.color === "contactForm"
      ? "white"
      : "black"};
  stroke: ${(props: any) => props.scrollMove && "#212121"};

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    width: 30px;
  }
`;
const BlackGlobal: any = styled(BlackGlobalSvg)`
  margin-left: 9px;
  margin-right: 5px;
  position: relative;
  z-index: 1;
  stroke: ${(props: any) =>
    props.color === "homepage"
      ? "white"
      : props.color === "neighborhoodList" || props.color === "contactForm"
      ? "white"
      : "black"};
  stroke: ${(props: any) => props.scrollMove && "#212121"};

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    width: 30px;
  }
`;
const ContactUs: any = styled(ContactUsSvg)`
  margin-left: 9px;
  margin-right: 34px;
  position: relative;
  z-index: 1;
  stroke: ${(props: any) =>
    props.color === "homepage"
      ? "white"
      : props.color === "neighborhoodList" || props.color === "contactForm"
      ? "white"
      : "black"};
  stroke: ${(props: any) => props.scrollMove && "#212121"};

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    width: 22px;
  }
`;

const Search = styled(SearchSvg)``;
const SearchButton = styled.button`
  width: 112px;
  height: 112px;
  background-color: #b69142;
  position: relative;
  z-index: 1;
`;

const LoginButton = styled.button`
  width: 151px;
  height: 48px;
  background: #ac7602;
  border-radius: 50px;

  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0px;
  color: #ffffff;
  margin-right: 40px;
  border: none;
  cursor: pointer;
`;

export default HeaderPresenter;
