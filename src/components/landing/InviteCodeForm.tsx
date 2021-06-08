import React, { useState, useEffect, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";
import styled from "styled-components";
import { CheckInviteCode } from "../../domain/CheckInviteCode";
import { AuthContext } from "../../router/config/Provider/AuthProvider";
export const InviteCodeForm = () => {
  const [inviteCode, setInviteCode] = useState("");
  const {
    authenticated,
    loadingAuthState,
    inviteCodeValidation,
    setInviteCodeValidation,
  } = useContext(AuthContext);
  const history = useHistory();
  if (loadingAuthState) {
    return <></>;
  }
  const handleOnchange = (event: any) => {
    const inviteCode = event.target.value;
    setInviteCode(inviteCode);
    //<Redirect to="Registration Form" />; //예시
  };

  const checkInviteCode = async () => {
    let firebaseResult = await CheckInviteCode.checkInviteCode(inviteCode);
    if (firebaseResult) {
      setInviteCodeValidation(true);
      history.push("/auth/registerForm");
    } else {
      setInviteCodeValidation(false);
    }
  };
  console.log("authenticated", authenticated);
  return (
    <Container>
      {authenticated ? (
        <Redirect to="/home">ㅁㄴㅇ</Redirect>
      ) : (
        <>
          <Title>
            Welcome to Helipad. At this time, membership to Helipad is by
            invitation only. If you have an invitation code, please enter it
            below.
          </Title>
          <InputBlock>
            {inviteCodeValidation ? (
              <></>
            ) : (
              <ErrorMessage>Invalid invite code</ErrorMessage>
            )}

            <Input value={inviteCode} onChange={handleOnchange}></Input>

            <Button onClick={checkInviteCode}>Submit</Button>
          </InputBlock>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 28px;
  width: 600px;
`;
const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
const Input = styled.input.attrs({
  type: "text",
  id: "inviteCode",
  placeholder: "Please enter your invitation code",
})`
  width: 465px;
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
  width: 465px;
  height: 35px;
  padding: 5px 0px;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 10px;
  color: #e96e6e;
`;
