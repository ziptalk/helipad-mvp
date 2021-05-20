import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import GetNeighborhoodList from '../../../domain/GetNeighborhoodList';
import NeighborhoodCard from './NeighborhoodCard';

const Neighborhood = ({ match }: RouteComponentProps) => {
  console.log('neighborhood url: ', match.url);
  console.log('Neighborhood');
  const neighborhoodList = GetNeighborhoodList.get();
  console.log('neighborhood : ' + neighborhoodList);

  return (
    <Container>
      <Grid>
        {neighborhoodList.map((item, idx) => (
          <NeighborhoodCard key={idx} data={item} />
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 48px;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 470px 470px 470px;
  grid-gap: 15px;
`;

export default Neighborhood;
