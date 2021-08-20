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
      setHeaderMode("homepage");
      setInviteCodeValidation("default");
      history.push("/", 2000);
      // setTimeout(() => history.push("/"), 2000);
    });
  });

  return <Container>Successfully logout!</Container>;
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default Logout;
