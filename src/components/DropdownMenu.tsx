import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "react-dropdown/style.css";
import styled from "styled-components";
import UnopDropdown from "unop-react-dropdown";
import User from "../model/User";
type DropdownMenuProps = {
  mypageOrRegister: string;
  signOutOrSignIn: string;
  userInfo: User;
};

enum MenuName {
  ACCOUNT = "Account",
  MYPAGE = "My Page",
  REGISTER = "Register",
  SIGNOUT = "Sign Out",
  SIGNIN = "Sign In",
  KOREAN = "KOR",
  ENGLISH = "ENG",
}
const DropdownMenu = ({
  account,
  mypageOrRegister,
  signOutOrSignIn,
  Component,
  setGlobalIconCategory,
}: any) => {
  const history = useHistory();
  const onClick = (event: any) => {
    const clickedButton = event.target.innerText;
    switch (clickedButton) {
      case MenuName.ACCOUNT:
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        history.push("/auth/account");
        break;
      case MenuName.MYPAGE:
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        history.push("/asset/mypage");
        break;
      case MenuName.REGISTER:
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        history.push("/auth/registerForm");
        break;
      case MenuName.SIGNOUT:
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        history.push("/auth/logout");
        break;
      case MenuName.SIGNIN:
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        history.push("/auth/login");
        break;
      case MenuName.KOREAN:
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setGlobalIconCategory(MenuName.KOREAN);
        break;
      case MenuName.ENGLISH:
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setGlobalIconCategory(MenuName.ENGLISH);
        break;
      default:
        console.log("default");
    }
  };
  return (
    <Container>
      <UnopDropdown hover trigger={<Component />}>
        <ItemContainer>
          {account && (
            <>
              <Item onClick={onClick}>{account}</Item> <Divider />
            </>
          )}
          <Item onClick={onClick}>{mypageOrRegister}</Item>
          <Divider />
          <Item onClick={onClick}>{signOutOrSignIn}</Item>
        </ItemContainer>
      </UnopDropdown>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  z-index: 5;
  padding-top: 7px;
`;

const ItemContainer = styled.div`
  width: 111px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  &::before {
    content: "";
    position: absolute;
    bottom: 100%;
    display: block;
    left: 87px;
    border: 8px solid transparent;
    border-bottom-color: #ffffff;
  }
`;
const Item = styled.div`
  width: 103px;
  height: 31px;
  text-align: center;
  position: relative;
  padding: 5px;
  &:hover {
    color: #b69142;
    background-color: #f3f3f3;
  }
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f3f3f3;
`;
export default DropdownMenu;
