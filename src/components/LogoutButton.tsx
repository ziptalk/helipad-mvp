import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../router/config/Provider/AuthProvider";
const LogoutButton = () => {
  const { authenticated } = useContext(AuthContext);
  console.log("authenticated", authenticated);
  return (
    <>
      {authenticated && (
        <LogoutButtonBlock>
          <Link to="/auth/logout">
            <LogoutBtn>LOGOUT 🚫</LogoutBtn>
          </Link>
        </LogoutButtonBlock>
      )}
    </>
  );
};

const LogoutButtonBlock = styled.div`
  position: fixed;
  right: 12px;
  bottom: 51px;
  z-index: 2;
`;
const LogoutBtn = styled.button`
  width: 95px;
  height: 30px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  border-color: #0b0b0b;
  color: #ebebeb;
  background-color: #0b0b0b;
`;
export default LogoutButton;
