import styled from 'styled-components';
import React from 'react';
import Asset from '../../../../model/Asset';
import SaveImage from '../../../../images/ic_save.svg';
import ContactImage from '../../../../images/ic_contact.svg';

type SummaryProps = {
  data: Asset;
};

const Summary: React.FC<SummaryProps> = ({ data }) => {
  return (
    <Container>
      <AddressWrapper>
        <Street>{data.buildingInformation.street}</Street>
        <Address>
          {/* <Company>{data.buildingInformation.buildingName}</Company> */}
          <City>{data.buildingInformation.address}</City>
        </Address>
      </AddressWrapper>
      <Price>
        <Dollar>${data.price.toLocaleString('en-US')}</Dollar>
        <Won>₩{data.price.toLocaleString('ko-KR')}</Won>
      </Price>
      <Divider />
      <Rooms>
        <RoomInfo>
          <RoomInfoContent>
            {data.buildingInformation.nBedrooms}
          </RoomInfoContent>
          <RoomInfoTitle>Beds</RoomInfoTitle>
        </RoomInfo>
        <RoomInfo>
          <RoomInfoContent>
            {data.buildingInformation.nBathrooms}
          </RoomInfoContent>
          <RoomInfoTitle>Baths</RoomInfoTitle>
        </RoomInfo>
        <RoomInfo>
          <RoomInfoContent>{data.buildingInformation.square}</RoomInfoContent>
          <RoomInfoTitle>Square</RoomInfoTitle>
        </RoomInfo>
        <RoomInfo>
          <RoomInfoContent>
            {Math.floor(data.buildingInformation.square / 3.3)}
          </RoomInfoContent>
          <RoomInfoTitle>Pyung</RoomInfoTitle>
        </RoomInfo>
        <RoomInfo>
          <RoomInfoContent>
            <Save />
          </RoomInfoContent>
          <RoomInfoTitle>Save</RoomInfoTitle>
        </RoomInfo>
        <RoomInfo>
          <RoomInfoContent>
            <Contact />
          </RoomInfoContent>
          <RoomInfoTitle>Contact</RoomInfoTitle>
          <RoomInfoTitle>Helipad</RoomInfoTitle>
        </RoomInfo>
      </Rooms>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 1452px;
  justify-content: space-between;
`;

const AddressWrapper = styled.div`
  width: 464px;
  display: flex;
  flex-direction: column;
`;

const Street = styled.div`
  color: #4542e2;
  font-size: 30px;
`;
const Address = styled.div`
  display: flex;
  flex-direction: row;
`;

const Company = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const City = styled.div`
  font-size: 18px;
`;

const Dollar = styled.div``;
const Won = styled.div``;

const Price = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${Dollar}, ${Won} {
    font-size: 20px;
    font-weight: 600;
    line-height: 28.8px;
  }
`;

const Divider = styled.div`
  border: 1px solid #000000;
`;

const Rooms = styled.div`
  width: 558px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RoomInfoTitle = styled.div`
  font-size: 14px;
`;

const RoomInfoContent = styled.div`
  font-size: 28px;
`;

const Save = styled.div`
  width: 30px;
  height: 33px;
  background-image: url(${SaveImage});
`;

const Contact = styled.div`
  width: 32px;
  height: 33px;
  background-image: url(${ContactImage});
`;

export default Summary;
