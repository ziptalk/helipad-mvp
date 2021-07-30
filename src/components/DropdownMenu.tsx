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
}
const DropdownMenu = ({
  account,
  mypageOrRegister,
  signOutOrSignIn,
  Component,
}: any) => {
  const history = useHistory();
  const onClick = (event: any) => {
    const clickedButton = event.target.innerText;
    switch (clickedButton) {
      case MenuName.ACCOUNT:
        history.push("/auth/account");
        break;
      case MenuName.MYPAGE:
        history.push("/asset/mypage");
        break;
      case MenuName.REGISTER:
        history.push("/auth/registerForm");
        break;
      case MenuName.SIGNOUT:
        history.push("/auth/logout");
        break;
      case MenuName.SIGNIN:
        history.push("/auth/login");
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
  z-index: 2;
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
