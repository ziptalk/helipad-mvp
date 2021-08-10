import styled from "styled-components";
import React from "react";
import Asset from "../../../../model/Asset";

type AmenitiesProps = {
  data: string[];
};

const Amenities: React.FC<AmenitiesProps> = ({ data }) => {
  console.log("Amenities data:", data);
  return (
    <Container>
      <Title>Amenities</Title>
      <Grid>
        {data.map((str, idx) => (
          <>
            <GridItem key={idx}>{str}</GridItem>
          </>
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const GridItem = styled.div`
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export default Amenities;
