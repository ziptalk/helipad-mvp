import React, {useState} from "react";
import styled from 'styled-components';
import SignUpUseCase, {ErrorCode} from "../../../../domain/SignUpUseCase";
import {InputField, InputType} from "./InputField";

const SignUp = () => {
    const [lastName, setLastName] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");

    const handleSignUpError = (error: any) => {
        console.log("error code: ", error.code);
        console.log("error message: ", error.message);

        switch (error.code) {
            case ErrorCode.EMAIL_ALREADY_IN_USE:
                alert("This email is already in-use. Please use other account.");
                break;
            default:
                break;
        }
    }

    const handleSignUp = (e: any) => {
        console.log("handleSignUp");
        e.preventDefault();

        if (password !== passwordConfirm) {
            alert("Password != PasswordConfirmation");
            return;
        }
        SignUpUseCase.withEmail(email, password).then(value => {
            console.log(value);
        }).catch((error) => handleSignUpError(error));
    }

    return (
        <Container>
            <form>
                <Title>Sign up</Title>
                <Divider />
                <Name>
                    <InputField type={InputType.TEXT} title="last name" onChange={(name: string) => setLastName(name)} />
                    <InputField type={InputType.TEXT} title="first name" onChange={(name: string) => setFirstName(name)} />
                </Name>
                <InputField type={InputType.EMAIL} title="email" onChange={(email: string) => setEmail(email)} />
                <InputField type={InputType.PASSWORD} title="password" onChange={(password: string) => {
                    setPassword(password);
                }} />
                <InputField type={InputType.PASSWORD} title="password confirmation" onChange={(password: string) => setPasswordConfirm(password)} />
                <Agent>
                    <AgentText>I'm a private banker of real estate agent</AgentText>
                    <AgentCheckBox type="checkbox" />
                </Agent>
                <Button onClick={handleSignUp}>SIGN UP</Button>
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
