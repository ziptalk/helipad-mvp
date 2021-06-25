import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../images/Header/ic_logo.svg";
import { ReactComponent as UserSvg } from "../../images/Header/ic_user.svg";
import { ReactComponent as GlobalSvg } from "../../images/Header/ic_global.svg";
import { ReactComponent as SearchSvg } from "../../images/Header/ic_search.svg";
const HeaderPresenter = ({ authenticated }: any) => {
  return (
    <Container>
      <Link to="/asset/neighborhood">
        <Logo />
      </Link>
      <About>About us</About>
      <IconBlock>
        <User />
        <Global />

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
  background-color: black;
`;
const Logo = styled(LogoSvg)`
  margin-left: 60px;
`;
const About = styled.div`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0px;
  padding-right: 20px;
  color: white;
`;
const IconBlock = styled.div``;
const User = styled(UserSvg)`
  margin-right: 17px;
  padding-bottom: 3px;
`;
const Global = styled(GlobalSvg)`
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
