import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as WhiteLogoSvg } from "../../images/Header/ic_logo_white.svg";
import { ReactComponent as BlackLogoSvg } from "../../images/Header/ic_logo_black.svg";
import { ReactComponent as BlackUserSvg } from "../../images/Header/ic_blackUser.svg";
import { ReactComponent as WhiteUserSvg } from "../../images/Header/ic_whiteUser.svg";
import { ReactComponent as BlackGlobalSvg } from "../../images/Header/ic_blackGlobal.svg";
import { ReactComponent as WhiteGlobalSvg } from "../../images/Header/ic_whiteGlobal.svg";
import BlackChatBot from "../BlackChatBot";
import { ReactComponent as SearchSvg } from "../../images/Header/ic_search.svg";
import DropdownMenu from "../DropdownMenu";
const HeaderPresenter = ({
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
      case "neighborhoodList":
        return <></>;
      default:
        return (
          <CategoryContainer>
            <Link to="/aboutUs">
              <About color={headerMode}>About us</About>
            </Link>
            <Link to="/asset/neighborhood">
              <Neighborhood color={headerMode}>Neighborhood</Neighborhood>
            </Link>
          </CategoryContainer>
        );
    }
  };
  return (
    <>
      <Container color={headerMode} isLandingPage={isLandingPage}>
        <Link to="/asset/neighborhood">
          <BlackLogo color={headerMode} />
        </Link>
        {renderByHeaderMode()}
        <BlackChatBot></BlackChatBot>
        <IconBlock>
          {authenticated ? (
            <IconBlock>
              <DropDownContainer>
                <DropdownMenu
                  Component={() => <BlackUser color={headerMode} />}
                  account={userIconCategory.account}
                  mypageOrRegister={userIconCategory.mypageOrRegister}
                  signOutOrSignIn={userIconCategory.signOutOrSignIn}
                />
              </DropDownContainer>
              <DropDownContainer>
                <DropdownMenu
                  Component={() => <BlackGlobal color={headerMode} />}
                  mypageOrRegister={globalIconCategory.korean}
                  signOutOrSignIn={globalIconCategory.english}
                />
              </DropDownContainer>
            </IconBlock>
          ) : (
            <IconBlock>
              <DropDownContainer>
                <DropdownMenu
                  Component={() => <BlackUser color={headerMode} />}
                  userInfo={userInfo}
                  mypageOrRegister={userIconCategory.mypageOrRegister}
                  signOutOrSignIn={userIconCategory.signOutOrSignIn}
                />
              </DropDownContainer>
              <DropDownContainer>
                <DropdownMenu
                  Component={() => <BlackGlobal color={headerMode} />}
                  mypageOrRegister={globalIconCategory.korean}
                  signOutOrSignIn={globalIconCategory.english}
                />
              </DropDownContainer>
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
  width: 100%;

  background-color: ${(props: any) =>
    (props.color === "inviteCodeForm" || props.color === "neighborhoodList") &&
    "transparent"};
  position: ${(props: any) =>
    (props.color === "inviteCodeForm" || props.color === "neighborhoodList") &&
    "fixed"};
  top: ${(props: any) =>
    (props.color === "inviteCodeForm" || props.color === "neighborhoodList") &&
    "0px"};
  z-index: ${(props: any) =>
    (props.color === "inviteCodeForm" || props.color === "neighborhoodList") &&
    1};
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
    props.color === "inviteCodeForm"
      ? "white"
      : props.color === "neighborhoodList"
      ? "black"
      : "black"};

  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    margin-left: 30px;
  }
`;
const About: any = styled.div`
  min-width: 145px;
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0px;

  color: ${(props: any) =>
    props.color === "inviteCodeForm"
      ? "white"
      : props.color === "neighborhoodList"
      ? "black"
      : "black"};
  position: relative;
  z-index: 1;
`;
const Neighborhood: any = styled(About)``;
const FAQ: any = styled(About)``;
const ContactUs: any = styled(About)``;
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
      : props.color === "neighborhoodList"
      ? "white"
      : "black"};

  transform: scale 1s ease-in;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const BlackGlobal: any = styled(BlackGlobalSvg)`
  margin-left: 9px;
  margin-right: 34px;
  position: relative;
  z-index: 1;
  stroke: ${(props: any) =>
    props.color === "inviteCodeForm"
      ? "white"
      : props.color === "neighborhoodList"
      ? "white"
      : "black"};
  transform: scale 1s ease-in;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
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
