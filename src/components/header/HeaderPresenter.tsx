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
  userIconCategory,
  globalIconCategory,
}: any) => {
  console.log("headerMode:", headerMode);
  return (
    <>
      <Container>
        <Link to="/asset/neighborhood">
          <BlackLogo color={headerMode} />
        </Link>
        <CategoryContainer>
          <Link to="/aboutUs">
            <About color={headerMode}>About us</About>
          </Link>
          <Link to="/asset/neighborhood">
            <Neighborhood color={headerMode}>Neighborhood</Neighborhood>
          </Link>
          <Link to="/faq">
            <FAQ color={headerMode}>FAQ</FAQ>
          </Link>
          <Link to="/contactUs">
            <ContactUs color={headerMode}>Contact us</ContactUs>
          </Link>
        </CategoryContainer>
        <BlackChatBot></BlackChatBot>
        <IconBlock>
          <DropDownContainer>
            <DropdownMenu
              Component={() => <BlackUser color={headerMode} />}
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
          <SearchButton>
            <Search />
          </SearchButton>
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

  /* background-color: ${(props: any) =>
    props.primary ? "black" : "white"}; */
`;
const CategoryContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
`;
const BlackLogo: any = styled(BlackLogoSvg)`
  margin-left: 60px;
  position: relative;
  z-index: 2;
  fill: ${(props: any) =>
    props.color === "white"
      ? "white"
      : props.color === "black"
      ? "black"
      : "black"};
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
  padding-right: 20px;

  color: ${(props: any) =>
    props.color === "white"
      ? "white"
      : props.color === "black"
      ? "black"
      : "black"};
  position: relative;
  z-index: 2;
`;
const Neighborhood: any = styled(About)``;
const FAQ: any = styled(About)``;
const ContactUs: any = styled(About)``;
const IconBlock = styled.div`
  display: flex;
  align-items: center;
`;
const DropDownContainer = styled.div``;
const BlackUser: any = styled(BlackUserSvg)`
  margin-right: 9px;
  position: relative;
  z-index: 2;
  stroke: ${(props: any) =>
    props.color === "white"
      ? "white"
      : props.color === "black"
      ? "black"
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
  z-index: 2;
  stroke: ${(props: any) =>
    props.color === "white"
      ? "white"
      : props.color === "black"
      ? "black"
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
  z-index: 2;
`;

export default HeaderPresenter;
