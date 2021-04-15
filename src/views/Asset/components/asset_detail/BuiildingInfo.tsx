import styled from 'styled-components';
import React from "react";
import BuildingInformation from "../../../../model/BuildingInformation";

type BuildingInformationProps = {
    buildingInformation: BuildingInformation;
}

const BuildingInfo: React.FC<BuildingInformationProps> = ({buildingInformation}) => {
    return (
        <Container>
            <Title>Building Information for {}</Title>
            <Grid>
                <GridItem>
                    <Category>Building/Complex</Category>
                    <Item>{buildingInformation.buildingName}</Item>
                </GridItem>
                <GridItem>
                    <Category>Floor</Category>
                    <Item>{buildingInformation.floor}</Item>
                </GridItem>
                <GridItem>
                    <Category>Stories</Category>
                    <Item>{buildingInformation.stories}</Item>
                </GridItem>
                <GridItem>
                    <Category>Residences</Category>
                    <Item>{buildingInformation.residences}</Item>
                </GridItem>
                <GridItem>
                    <Category>Pet Policy</Category>
                    <Item>{buildingInformation.petPolicy}</Item>
                </GridItem>
                <GridItem>
                    <Category>Year Built</Category>
                    <Item>{buildingInformation.yearBuilt}</Item>
                </GridItem>
                <GridItem>
                    <Category>Building Age</Category>
                    <Item>{buildingInformation.buildingAge}</Item>
                </GridItem>
                <GridItem>
                    <Category>Building Type</Category>
                    <Item>{buildingInformation.buildingType}</Item>
                </GridItem>
            </Grid>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const GridItem = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #E9E9E9;
  padding-top: 15px;
  padding-bottom: 15px;
`

const Category = styled.div`
  width: 50%;
  font-size: 18px;
`;

const Item = styled.div`
  width: 50%;
  font-size: 18px;
  font-weight: bold;
`

export default BuildingInfo;