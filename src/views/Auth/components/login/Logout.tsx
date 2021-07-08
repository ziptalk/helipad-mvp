import React, { useEffect, useContext } from "react";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
import styled from "styled-components";
import LoginUseCase from "../../../../domain/LoginUseCase";
import { useHistory } from "react-router";

const Logout = () => {
  let history = useHistory();
  let { setInviteCodeValidation, setUser, setHeaderMode } =
    useContext(AuthContext);
  useEffect(() => {
    LoginUseCase.logout().then((result) => {
      console.log("logout result : " + result);
      setUser(null);
      setHeaderMode("black");
      setInviteCodeValidation(true);
      setTimeout(() => history.push("/"), 2000);
    });
  });

  return <Container>Successfully logout!</Container>;
};

const Container = styled.div`
  width: 460px;
`;

export default Logout;
