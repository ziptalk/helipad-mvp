import React, { useContext } from 'react';
import { AuthContext } from '../../../../router/config/Provider/AuthProvider';
import styled from 'styled-components';
import LoginUseCase from '../../../../domain/LoginUseCase';
import { useHistory } from 'react-router';

const Logout = () => {
  let history = useHistory();
  let { inviteCodeValidation, setInviteCodeValidation } =
    useContext(AuthContext);
  LoginUseCase.logout().then((result) => {
    console.log('logout result : ' + result);
    setInviteCodeValidation(true);
    setTimeout(() => history.push('/inviteCodeForm'), 2000);
  });

  return <Container>Successfully logout!</Container>;
};

const Container = styled.div`
  width: 460px;
`;

export default Logout;
