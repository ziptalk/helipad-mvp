import React from 'react';
import './AssetCard.css';
import Asset from '../../model/Asset';
import styled, { css } from 'styled-components';

type AssetCardProps = {
  data: Asset;
};

const AssetCard = ({ data }: AssetCardProps) => {
  return (
    <Container background={data.buildingInformation.thumbnail}>
      <ContainerGradient>
        <ContainerContent>
          <LeftSide>
            <PriceBlock>
              <PriceDollar>
                ($){(data.price * 1000).toLocaleString('en-US')}
              </PriceDollar>
              <PriceWon>(₩){data.price.toLocaleString('ko-KR')}</PriceWon>
            </PriceBlock>
            <PlaceInfoBlock>
              <StreetInfo>{data.buildingInformation.street}</StreetInfo>
              <AddressInfo>{data.buildingInformation.address}</AddressInfo>
            </PlaceInfoBlock>
          </LeftSide>
          <Divider />
          <RightSide>
            <RoomInfoBlock>
              <RoomInfo>
                {data.buildingInformation.nBedrooms} Bedrooms
              </RoomInfo>
              <RoomInfo>
                {data.buildingInformation.nBathrooms} Bathrooms
              </RoomInfo>
              <RoomInfo>{data.buildingInformation.square} Sq m</RoomInfo>
              <RoomInfo>
                {Math.round(data.buildingInformation.square / 3.3)} Pyung
              </RoomInfo>
            </RoomInfoBlock>
          </RightSide>
        </ContainerContent>
      </ContainerGradient>
    </Container>
  );
};

const Container: any = styled.div`
  width: 470px;
  height: 353px;

  background: url(${(props: any) => props.background});
  background-size: cover;
`;

const ContainerGradient = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(120, 120, 120, 0) 48.36%,
    rgba(0, 0, 0, 0.5) 64.52%,
    #000000 100%
  );
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

const ContainerContent = styled.div`
  color: #ffffff;
  font-weight: 600;
  font-size: 25px;
  display: flex;
  padding: 20px 20px;
`;
const LeftSide = styled.div`
  width: 60%;
`;
const PriceBlock = styled.div`
  font-size: 22px;
  font-weight: 600;
  padding-bottom: 10px;
`;
const PriceDollar = styled.div``;
const PriceWon = styled.div``;
const PlaceInfoBlock = styled.div`
  font-family: 'Helvetica Neue';
  font-size: 15px;
  font-weight: 500;
  padding: 8px 0;
`;
const StreetInfo = styled.div``;
const AddressInfo = styled.div``;

const Divider = styled.div`
  border-right: 1px solid #ffffff;
  margin: 0px 20px;
`;

const RightSide = styled.div`
  width: 35%;
`;
const RoomInfoBlock = styled.div`
  font-family: 'Helvetica Neue';
  font-size: 18px;
  font-weight: 400;
`;
const RoomInfo = styled.div`
  margin: 5px 0;
`;

export default AssetCard;