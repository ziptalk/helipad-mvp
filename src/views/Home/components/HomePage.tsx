import styled from "styled-components";
import React from "react";
import { useHistory } from "react-router";

const HomePage = () => {
  const history = useHistory();
  const onClickBuy = () => {
    history.push({ pathname: "/asset/neighborhood" });
  };

  const onClickPropertyManagement = () => {};

  const onClickFAQ = () => {
    history.push({ pathname: "/asset/faq" });
  };

  return (
    <Container>
      <Title>Congratulations on joining Helipad!</Title>
      <ButtonHolder>
        <Button onClick={onClickBuy}>Buy a Home</Button>
        <Button onClick={onClickPropertyManagement}>Property Management</Button>
        <Button onClick={onClickFAQ}>Frequently Asked Question</Button>
      </ButtonHolder>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 36px;
`;

const ButtonHolder = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 100px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
`;

export default HomePage;
