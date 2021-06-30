import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as WhiteLogoSvg } from "../../images/Header/ic_logo_white.svg";
import { ReactComponent as BlackLogoSvg } from "../../images/Header/ic_logo_black.svg";
import { ReactComponent as BlackUserSvg } from "../../images/Header/ic_blackUser.svg";
import { ReactComponent as WhiteUserSvg } from "../../images/Header/ic_whiteUser.svg";
import { ReactComponent as BlackGlobalSvg } from "../../images/Header/ic_blackGlobal.svg";
import { ReactComponent as WhiteGlobalSvg } from "../../images/Header/ic_whiteGlobal.svg";

import { ReactComponent as SearchSvg } from "../../images/Header/ic_search.svg";
const HeaderPresenter = ({ authenticated, currentUrl }: any) => {
  // switch (currentUrl) {
  //   case "/":
  //     return (
  //       <Container>
  //         <Link to="/asset/neighborhood">
  //           <WhiteLogo />
  //         </Link>
  //         <About>About us</About>
  //         <IconBlock>
  //           <WhiteUserSvg />
  //           <WhiteGlobalSvg />
  //           <SearchButton>
  //             <Search />
  //           </SearchButton>
  //         </IconBlock>
  //       </Container>
  //     );

  //   case "/asset/neighborhood":
  //     return (
  //       <Container>
  //         <Link to="/asset/neighborhood">
  //           <BlackLogo />
  //         </Link>
  //         <About>About us</About>
  //         <IconBlock>
  //           <BlackUserSvg />
  //           <BlackGlobalSvg />
  //           <SearchButton>
  //             <Search />
  //           </SearchButton>
  //         </IconBlock>
  //       </Container>
  //     );

  //   default:
  //     return (
  //       <Container>
  //         <Link to="/asset/neighborhood">
  //           <BlackLogo />
  //         </Link>
  //         <About primary={true}>About us</About>
  //         <IconBlock>
  //           <BlackUserSvg />
  //           <BlackGlobalSvg />
  //           <SearchButton>
  //             <Search />
  //           </SearchButton>
  //         </IconBlock>
  //       </Container>
  //     );
  // }
  return (
    <Container>
      <Link to="/asset/neighborhood">
        <BlackLogo />
      </Link>
      <About>About us</About>
      <IconBlock>
        <User />
        <Global />
        {/* <BlackUserSvg />
        <BlackGlobalSvg /> */}
        <SearchButton>
          <Search />
        </SearchButton>
      </IconBlock>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* background-color: black; */
  width: 100%;
  position: absolute;
  top: 0px;
  z-index: 1;
`;

const WhiteLogo = styled(WhiteLogoSvg)`
  margin-left: 60px;
`;
const BlackLogo = styled(BlackLogoSvg)`
  margin-left: 60px;
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
  /* color: ${(props: any) => (props.primary ? "black" : "white")}; */
`;
const IconBlock = styled.div``;
const User: any = styled(WhiteUserSvg)`
  margin-right: 17px;
  padding-bottom: 3px;
`;
const Global: any = styled(WhiteUserSvg)`
  margin-right: 39px;
  padding-bottom: 3px;
`;
const Search = styled(SearchSvg)``;
const SearchButton = styled.button`
  width: 112px;
  height: 112px;
  background-color: #b69142;
`;
export default HeaderPresenter;
