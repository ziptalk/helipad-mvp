import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import Asset from "../../../../model/Asset";
import UnsavedFlag from "../../../../images/ic_unsaved_flag.svg";
import SavedFlag from "../../../../images/ic_saved_flag.svg";
import ContactImage from "../../../../images/ic_contact.svg";
import SaveAsset from "../../../../domain/SaveAsset";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
import { FaHelicopter } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";

type SummaryProps = {
  data: Asset;
};

const Summary: React.FC<SummaryProps> = ({ data }) => {
  const { user } = useContext(AuthContext);
  const [isSavedAsset, setSavedAsset] = useState<boolean>(false);

  if (user != null && data.id !== "test_id") {
    SaveAsset.isSaved(data.id, user.uid).then((result) => {
      setSavedAsset(result);
    });
  }

  const onClickSave = async (e: any) => {
    if (user != null) {
      await SaveAsset.saveOrUnSaveAsset(data.id, user.uid);
      setSavedAsset(!isSavedAsset);
    }
  };

  return (
    <Container
      style={{
        backgroundColor: "black",
        color: "white",
        width: "100%",
        padding: "20px 100px 20px 100px",
      }}
    >
      <AddressWrapper>
        <Street>{data.buildingInformation.street}</Street>
        <Address>
          {/* <Company>{data.buildingInformation.buildingName}</Company> */}
          <City>{data.buildingInformation.address}</City>
        </Address>
      </AddressWrapper>
      <RoomInfo>
        <RoomInfoContent>
          <Dollar>${data.price.toLocaleString("en-US")}</Dollar>
        </RoomInfoContent>
        <RoomInfoTitle>Price</RoomInfoTitle>
      </RoomInfo>
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
        <ClickableRoomInfo onClick={onClickSave}>
          <RoomInfoContent>
            {/* {isSavedAsset ? <SavedFlagImage /> : <UnSavedFlagImage />} */}
            {isSavedAsset ? <AiFillHeart /> : <AiOutlineHeart />}
          </RoomInfoContent>
          <RoomInfoTitle>Favorite</RoomInfoTitle>
        </ClickableRoomInfo>
        <ClickableRoomInfo>
          <RoomInfoContent>
            <FaHelicopter />
          </RoomInfoContent>
          <RoomInfoTitle>Ongoing</RoomInfoTitle>
        </ClickableRoomInfo>
        <ClickableRoomInfo>
          <RoomInfoContent>
            <FaShareAlt />
          </RoomInfoContent>
          <RoomInfoTitle>Share</RoomInfoTitle>
        </ClickableRoomInfo>
      </Rooms>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  // width: 1452px;
  width: 100%;
  justify-content: space-between;
  // margin-top: 112px;
`;

const AddressWrapper = styled.div`
  width: 464px;
  display: flex;
  flex-direction: column;
`;

const Street = styled.div`
  // color: #4542e2;
  color: white;
  font-size: 30px;
`;
const Address = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 200;
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

const ClickableRoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const RoomInfoTitle = styled.div`
  font-size: 14px;
  font-weight: 200;
`;

const RoomInfoContent = styled.div`
  font-size: 28px;
`;

const UnSavedFlagImage = styled.div`
  width: 30px;
  height: 33px;
  background-image: url(${UnsavedFlag});
`;

const SavedFlagImage = styled.div`
  width: 30px;
  height: 33px;
  background-image: url(${SavedFlag});
`;

const Contact = styled.div`
  width: 32px;
  height: 33px;
  background-image: url(${ContactImage});
`;

export default Summary;
