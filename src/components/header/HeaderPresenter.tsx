import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as WhiteLogoSvg } from "../../images/Header/ic_logo_white.svg";
import { ReactComponent as BlackLogoSvg } from "../../images/Header/ic_logo_black.svg";
import { ReactComponent as BlackUserSvg } from "../../images/Header/ic_blackUser.svg";
import { ReactComponent as WhiteUserSvg } from "../../images/Header/ic_whiteUser.svg";
import { ReactComponent as BlackGlobalSvg } from "../../images/Header/ic_blackGlobal.svg";
import { ReactComponent as WhiteGlobalSvg } from "../../images/Header/ic_whiteGlobal.svg";
import Logout from "../LogoutButton";
import BlackChatBot from "../BlackChatBot";
import { ReactComponent as SearchSvg } from "../../images/Header/ic_search.svg";
const HeaderPresenter = ({ authenticated, inviteCodeValidation }: any) => {
  console.log("inviteCodeValidation", inviteCodeValidation);
  return (
    <>
      {authenticated ? (
        <Container>
          <Link to="/asset/neighborhood">
            <BlackLogo />
          </Link>
          <About primary>About us</About>
          <BlackChatBot></BlackChatBot>
          <LogoutButton></LogoutButton>
          <IconBlock>
            <WhiteUser />
            <WhiteGlobal />
            <SearchButton>
              <Search />
            </SearchButton>
          </IconBlock>
        </Container>
      ) : (
        <Container primary>
          <Link to="/asset/neighborhood">
            <WhiteLogo />
          </Link>
          <About>About us</About>

          <IconBlock>
            <BlackUser />
            <BlackGlobal />
            <SearchButton>
              <Search />
            </SearchButton>
          </IconBlock>
        </Container>
      )}
    </>
  );
};

const Container: any = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* background-color: black; */
  width: 100%;
  position: absolute;
  top: 0px;

  background-color: ${(props: any) => (props.primary ? "black" : "white")};
`;

const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* background-color: black; */
  width: 100%;
  position: absolute;
  top: 0px;
  z-index: 1;
  margin-bottom: 112px;
`;
const WhiteLogo = styled(WhiteLogoSvg)`
  margin-left: 60px;
  position: relative;
  z-index: 2;
`;
const BlackLogo = styled(BlackLogoSvg)`
  margin-left: 60px;
  position: relative;
  z-index: 2;
`;
const About: any = styled.div`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0px;
  padding-right: 20px;
  color: black;
  color: ${(props: any) => (props.primary ? "black" : "white")};
  position: relative;
  z-index: 2;
`;
const IconBlock = styled.div``;
const WhiteUser: any = styled(WhiteUserSvg)`
  margin-right: 17px;
  padding-bottom: 3px;
`;
const WhiteGlobal: any = styled(WhiteGlobalSvg)`
  margin-right: 39px;
  padding-bottom: 3px;
`;
const BlackUser: any = styled(BlackUserSvg)`
  margin-right: 17px;
  padding-bottom: 3px;
  position: relative;
  z-index: 2;
`;
const BlackGlobal: any = styled(BlackGlobalSvg)`
  margin-right: 39px;
  padding-bottom: 3px;
  position: relative;
  z-index: 2;
`;
const Search = styled(SearchSvg)``;
const SearchButton = styled.button`
  width: 112px;
  height: 112px;
  background-color: #b69142;
  position: relative;
  z-index: 2;
`;

const LogoutBlock = styled.div``;
const LogoutButton = styled(Logout)``;
export default HeaderPresenter;
