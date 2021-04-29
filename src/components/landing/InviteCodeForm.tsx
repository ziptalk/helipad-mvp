import React, { useState, MouseEventHandler } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
export const InviteCodeForm = () => {
  const [inviteCode, setInviteCode] = useState('');
  const handleClick = (event: any) => {
    const code = event.target.value;
    // validateCode(code)
    //   .then((result: any) => console.log('ok'))
    //   .catch((error: any) => console.log(error));
  };
  const handleOnchange = (event: any) => {
    const code = event.target.value;
    setInviteCode(code);
    <Redirect to="Registration Form" />; //예시
  };

  return (
    <Container>
      <InputBlock>
        <Input value={inviteCode} onChange={handleOnchange}></Input>
        <Button onClick={handleClick}>Submit</Button>
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
`;
const Input = styled.input.attrs({
  type: 'text',
  id: 'inviteCode',
  placeholder: 'Please enter your invite',
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
