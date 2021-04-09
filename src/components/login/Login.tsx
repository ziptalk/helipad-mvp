import * as React from 'react';
import styled from 'styled-components';
import LoginForm from "./LoginForm";

const Login = () => {
    return (
        <Container>
            <Row>
                <LoginTitle>LOGIN</LoginTitle>
            </Row>
            <Divider />
            <Row>
                <LoginForm />
            </Row>
        </Container>
    );
}

const Container = styled.div`
  width: 460px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Divider = styled.div`
  border: 1px solid #000000;
`;

const LoginTitle = styled.div`
  width: 100%;
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;

export default Login;