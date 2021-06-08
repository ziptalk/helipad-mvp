import React from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import GetNeighborhoodList from "../../../domain/GetNeighborhoodList";
import NeighborhoodCard from "./NeighborhoodCard";

const Neighborhood = ({ match }: RouteComponentProps) => {
  const neighborhoodList = GetNeighborhoodList.get();

  return (
    <Container>
      <Title>We are currently in the following markets</Title>
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
  font-size: 40px;
  margin-bottom: 30px;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 470px 470px 470px;
  grid-gap: 15px;
`;

export default Neighborhood;
