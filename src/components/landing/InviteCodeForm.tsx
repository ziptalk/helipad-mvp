import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { CheckInviteCode } from "../../domain/CheckInviteCode";
import { AuthContext } from "../../router/config/Provider/AuthProvider";
export const InviteCodeForm = () => {
  const [inviteCode, setInviteCode] = useState("");
  const { inviteCodeValidation, setInviteCodeValidation } =
    useContext(AuthContext);
  const history = useHistory();
  const handleOnchange = (event: any) => {
    const inviteCode = event.target.value;
    setInviteCode(inviteCode);
    //<Redirect to="Registration Form" />; //예시
  };

  const checkInviteCode = async () => {
    let firebaseResult = await CheckInviteCode.checkInviteCode(inviteCode);
    console.log("firebaseResult :", firebaseResult);
    if (firebaseResult) {
      setInviteCodeValidation(true);
      // history.push('/login');
      history.push("/auth/registerForm");
    } else {
      setInviteCodeValidation(false);
    }
  };

  return (
    <Container>
      <InputBlock>
        {inviteCodeValidation ? (
          <></>
        ) : (
          <ErrorMessage>Invalid invite code</ErrorMessage>
        )}
        <Input value={inviteCode} onChange={handleOnchange}></Input>

        <Button onClick={checkInviteCode}>Submit</Button>
      </InputBlock>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
`;
const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  justify-content: center;
`;
const Input = styled.input.attrs({
  type: "text",
  id: "inviteCode",
  placeholder: "Please enter your invite",
})`
  height: 45px;
  font-size: 20px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  width: 465px;
  height: 50px;
  font-size: 20px;
  background: #4542e2;
  color: #ffffff;
  text-align: center;
`;

const ErrorMessage = styled.div`
  display: inline-block;
  background-color: #fff2f4;
  border-color: rgba(227, 0, 0, 0.4);
  font-size: 20px;
  font-weight: 500;
  width: auto;
  height: auto;
  padding: 10px 0px;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 8px;
  color: #202020;
`;
