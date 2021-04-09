import React from "react";
import styled from 'styled-components';
import InputField from "./InputField";

const SignUp = () => {
    return (
        <Container>
            <Title>Sign up</Title>
            <Divider />
            <Name>
                <InputField title="last name" />
                <InputField title="first name" />
            </Name>
            <InputField title="email" />
            <InputField title="password" />
            <InputField title="password confirmation" />
            <Agent>
                <AgentText>I'm a private banker of real estate agent</AgentText>
                <AgentCheckBox type="checkbox" />
            </Agent>
            <Button type="submit">SIGN UP</Button>
        </Container>
    );
}

const Container = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;

const Divider = styled.div`
  width: 100%;
  border: 1px solid #000000;
`

const Name = styled.div`
  display: grid;
  grid-template-columns: 220px 220px;
  grid-gap: 24px;
`;

const Agent = styled.div`
  margin-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: row;
  background: #ebebeb;
  border: 1px solid #d7d7d7;
  height: 45px;
  align-items: center;
  justify-content: space-between;
`;

const AgentText = styled.div`
  font-size: 20px;
  color: #4542e2;
`;

const AgentCheckBox = styled.input`
  width: 20px;
  height: 20px;
`;

const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 45px;
  background-color: #4542e2;
  color: #ffffff;
  font-size: 20px;
`;

export default SignUp;
