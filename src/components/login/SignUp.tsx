import React, {useState} from "react";
import styled from 'styled-components';
import {InputField, InputType} from "./InputField";
import SignUpUseCase from "../../domain/SignUpUseCase";

const SignUp = () => {
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const handleSignUp = () => {
        console.log("handleSignUp");
        SignUpUseCase.withEmail(email, password).then(value => {
            console.log(value);
        });
    }

    return (
        <Container>
            <form>
                <Title>Sign up</Title>
                <Divider />
                <Name>
                    <InputField type={InputType.TEXT} title="last name" onChange={(name) => setLastName(name)} />
                    <InputField type={InputType.TEXT} title="first name" onChange={(name) => setFirstName(name)} />
                </Name>
                <InputField type={InputType.EMAIL} title="email" onChange={(email) => setEmail(email)} />
                <InputField type={InputType.PASSWORD} title="password" onChange={(password) => {
                    setPassword(password);
                }} />
                <InputField type={InputType.PASSWORD} title="password confirmation" onChange={(password) => setPasswordConfirm(password)} />
                <Agent>
                    <AgentText>I'm a private banker of real estate agent</AgentText>
                    <AgentCheckBox type="checkbox" />
                </Agent>
                <Button type="submit" onClick={handleSignUp}>SIGN UP</Button>
            </form>
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
