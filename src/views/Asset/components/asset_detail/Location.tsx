import * as React from 'react';
import styled from 'styled-components';
import { Header } from '../../../../components/header/Header';

type LocationProps = {
  address: string;
};

const Location: React.FC<LocationProps> = ({ address }) => {
  return (
    <Container>
      <TitleWrapper>
        <Title>Location</Title>
        <Address>{address}</Address>
      </TitleWrapper>
      <Map />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

const Title = styled.div`
  width: 300px;
  font-size: 18px;
  font-weight: bold;
`;

const Address = styled.div``;

const Map = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid #000000;
`;

export default Location;
