import * as React from "react";
import styled from "styled-components";
import LoginUseCase from "../../../../domain/LoginUseCase";
import {useHistory} from "react-router";

const Logout = () => {
    let history = useHistory();
    LoginUseCase.logout().then((result) => {
        console.log("logout result : " + result);
        setTimeout(() => history.push("/login"), 2000);
    });

    return (
        <Container>
            Successfully logout!
        </Container>
    );
}

const Container = styled.div`
  width: 460px;
`;

export default Logout;