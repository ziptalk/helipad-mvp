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
const HeaderPresenter = ({
  scrollMove,
  headerMode,
  authenticated,
  isLandingPage,
  userIconCategory,
  globalIconCategory,
  userInfo,
}: any) => {
  const renderByHeaderMode = () => {
    switch (headerMode) {
      case "inviteCodeForm":
        return <></>;
      default:
        return (
          <CategoryContainer>
            <Link to="/aboutUs">
              <About scrollMove={scrollMove} color={headerMode}>
                About us
              </About>
            </Link>
            <Link to="/asset/neighborhood">
              <Neighborhood scrollMove={scrollMove} color={headerMode}>
                Neighborhood
              </Neighborhood>
            </Link>
          </CategoryContainer>
        );
    }
  };
  return (
    <>
      <Container
        scrollMove={scrollMove}
        color={headerMode}
        isLandingPage={isLandingPage}
      >
        <Link to="/asset/neighborhood">
          <BlackLogo scrollMove={scrollMove} color={headerMode} />
        </Link>
        {renderByHeaderMode()}
        <BlackChatBot></BlackChatBot>
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
              </DropDownContainer>
              <DropDownContainer>
                <DropdownMenu
                  Component={() => (
                    <BlackGlobal scrollMove={scrollMove} color={headerMode} />
                  )}
                  mypageOrRegister={globalIconCategory.korean}
                  signOutOrSignIn={globalIconCategory.english}
                />
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
                  mypageOrRegister={globalIconCategory.korean}
                  signOutOrSignIn={globalIconCategory.english}
                />
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
      </Container>
    </>
  );
};

const Container: any = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 112px;
  width: 100vw;
  margin: 0 auto;
  max-width: 1904px;
  position: relative;
  top: 0px;
  z-index: 3;
  background-color: white;

  background-color: ${(props: any) =>
    (props.color === "inviteCodeForm" ||
      props.color === "neighborhoodList" ||
      props.color === "contactForm") &&
    "transparent"};
  position: ${(props: any) =>
    (props.color === "inviteCodeForm" ||
      props.color === "neighborhoodList" ||
      props.color === "contactForm") &&
    "fixed"};
  top: ${(props: any) =>
    (props.color === "inviteCodeForm" ||
      props.color === "neighborhoodList" ||
      props.color === "contactForm") &&
    "0px"};
  text-align: ${(props: any) =>
    (props.color === "inviteCodeForm" ||
      props.color === "neighborhoodList" ||
      props.color === "contactForm") &&
    "center"};
  z-index: ${(props: any) =>
    (props.color === "inviteCodeForm" ||
      props.color === "neighborhoodList" ||
      props.color === "contactForm") &&
    3};
  max-width: ${(props: any) =>
    (props.color === "inviteCodeForm" ||
      props.color === "neighborhoodList" ||
      props.color === "contactForm") &&
    "1904px"};

  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    height: 80px;
  }

  background-color: ${(props: any) => props.scrollMove && "white"};
  color: ${(props: any) => props.scrollMove && "#212121"};
  position: ${(props: any) => props.scrollMove && "fixed"};
  top: ${(props: any) => props.scrollMove && "0px"};
  transition: all ease-in-out 0.5s;
`;

const CategoryContainer = styled.div`
  width: 12%;
  display: flex;
  justify-content: space-between;
  margin-right: 120px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    width: 18%;
  }
`;
const BlackLogo: any = styled(BlackLogoSvg)`
  margin-left: 60px;
  position: relative;
  z-index: 1;
  fill: ${(props: any) =>
    props.color === "inviteCodeForm" || props.color === "contactForm"
      ? "white"
      : props.color === "neighborhoodList"
      ? "black"
      : "black"};
  fill: ${(props: any) => props.scrollMove && "black"};

  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    margin-left: 30px;
    width: 150px;
  }
`;
const About: any = styled.div`
  min-width: 145px;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0px;

  color: ${(props: any) =>
    props.color === "inviteCodeForm"
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
`;
const Neighborhood: any = styled(About)``;
const FAQ: any = styled(About)``;

const IconBlock = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;
const DropDownContainer = styled.div``;
const BlackUser: any = styled(BlackUserSvg)`
  margin-right: 9px;
  position: relative;
  z-index: 1;
  stroke: ${(props: any) =>
    props.color === "inviteCodeForm"
      ? "white"
      : props.color === "neighborhoodList" || props.color === "contactForm"
      ? "white"
      : "black"};
  stroke: ${(props: any) => props.scrollMove && "#212121"};
  transform: scale 1s ease-in;
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
  margin-right: 15px;
  position: relative;
  z-index: 1;
  stroke: ${(props: any) =>
    props.color === "inviteCodeForm"
      ? "white"
      : props.color === "neighborhoodList" || props.color === "contactForm"
      ? "white"
      : "black"};
  stroke: ${(props: any) => props.scrollMove && "#212121"};
  transform: scale 1s ease-in;
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
    props.color === "inviteCodeForm"
      ? "white"
      : props.color === "neighborhoodList" || props.color === "contactForm"
      ? "white"
      : "black"};
  stroke: ${(props: any) => props.scrollMove && "#212121"};
  transform: scale 1s ease-in;
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

export default HeaderPresenter;
