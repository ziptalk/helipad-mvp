import React from 'react';
import styled from 'styled-components';
/**
 *
 *  Neighborhood maps and transit Component
 */

type FakeData = {
  name: string;
  checked: boolean;
  distance: number;
  time: number;
};
const placeInfo: FakeData[] = [
  {
    name: 'Bedford Av',
    checked: false,
    time: 7.74,
    distance: 0.1,
  },
  {
    name: 'Marcy Av',
    checked: false,
    time: 7.74,
    distance: 0.1,
  },
  {
    name: 'Metropolitan Av',
    checked: false,
    time: 7.74,
    distance: 0.1,
  },
];
type Neighborhood = {};
const Neighborhood: React.FC<any> = ({ Neighborhood }) => {
  return (
    <Container>
      <Title>Neighborhood maps and transit</Title>
      <MapContainer>
        <MapBlock>Map</MapBlock>
        <PlaceBlock>
          {placeInfo.map((place, idx) => (
            <Place key={idx}>
              <Divider>
                <PlaceName>{place.name}</PlaceName>
                <PlaceCheckButtonBlock>
                  <PlaceCheckButton>{place.checked}</PlaceCheckButton>
                </PlaceCheckButtonBlock>
              </Divider>
              <Divider>
                <PlaceTime>{place.time}min</PlaceTime>
                <PlaceDistance>{place.distance}mi</PlaceDistance>
              </Divider>
            </Place>
          ))}
        </PlaceBlock>
      </MapContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 83px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 33px;
`;
const MapContainer = styled.div`
  display: flex;
`;
const MapBlock = styled.div`
  border: 1px solid black;
  width: 710px;
  height: 253px;
  background-color: #f0f0f0;
  padding: 114px;
  box-sizing: border-box;
  text-align: center;
`;

const PlaceBlock = styled.div`
  margin-left: 20px;

  width: 236px;
`;
const Place = styled.div`
  margin-bottom: 25px;
`;

const Divider = styled.div`
  display: flex;
`;
const PlaceName = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 24.33px;

  margin-right: 10px;
`;

const PlaceCheckButtonBlock = styled.div`
  padding: 3px 0px;
`;
const PlaceCheckButton = styled.button`
  width: 15px;
  height: 15px;
  border: none;
  border-radius: 50%;
  background-color: #c4c4c4;
  text-decoration: none;
  &:hover {
    border: 1px solid aqua;
    outline: 0;
  }
`;

const PlaceTime = styled.div`
  color: #626262;
  margin-right: 10px;
`;

const PlaceDistance = styled.div`
  color: #626262;
`;
export default Neighborhood;
