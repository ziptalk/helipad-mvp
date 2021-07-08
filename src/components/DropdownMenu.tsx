import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "react-dropdown/style.css";
import styled from "styled-components";
import UnopDropdown from "unop-react-dropdown";
type DropdownMenuProps = {
  param1: string;
  param2: string;
};
// 로그인 상태에 따라 userIcon의 메뉴를 다르게 보여줘야함
// authenticate => true이면 [My Page, Sign out], false이면 [Register, Sign in]
const DropdownMenu = ({ param1, param2, Component }: any) => {
  const history = useHistory();
  const onClick = (event: any) => {
    const clickedButton = event.target.innerText;
    switch (clickedButton) {
      case "My Page":
        break;
      case "Register":
        history.push("/auth/registerForm");
        break;
      case "Sign out":
        history.push("/auth/logout");
        break;
      case "Sign in":
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
          <Item onClick={onClick}>{param1}</Item>
          <Divider />
          <Item onClick={onClick}>{param2}</Item>
        </ItemContainer>
      </UnopDropdown>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  z-index: 2;
`;

const ItemContainer = styled.div`
  width: 111px;
  height: 71px;
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
