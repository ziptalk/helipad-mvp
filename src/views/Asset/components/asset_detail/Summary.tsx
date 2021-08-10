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
  const [scrollMove, setScrollMove] = useState(false);
  if (user != null && data.id !== "test_id") {
    SaveAsset.isSaved(data.id, user.uid).then((result) => {
      setSavedAsset(result);
    });
  }
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrollMove(true);
    } else {
      setScrollMove(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const onClickSave = async (e: any) => {
    if (user != null) {
      await SaveAsset.saveOrUnSaveAsset(data.id, user.uid);
      setSavedAsset(!isSavedAsset);
    }
  };

  return (
    <Container scrollMove={scrollMove}>
      <ContentBlock>
        <AddressWrapper>
          <Street>{data.buildingInformation.street}</Street>
          <Address>
            {/* <Company>{data.buildingInformation.buildingName}</Company> */}
            <City>{data.buildingInformation.address}</City>
          </Address>
        </AddressWrapper>
        <RoomWrapper>
          <Rooms>
            <RoomInfo>
              <RoomInfoContent>
                <Dollar>${data.price.toLocaleString("en-US")}</Dollar>
              </RoomInfoContent>
              <RoomInfoTitle>Price</RoomInfoTitle>
            </RoomInfo>
            <Divider />
            <RoomInfo>
              <RoomInfoContent>
                {data.buildingInformation.nBedrooms}
              </RoomInfoContent>
              <RoomInfoTitle>Beds</RoomInfoTitle>
            </RoomInfo>
            <Divider />
            <RoomInfo>
              <RoomInfoContent>
                {data.buildingInformation.nBathrooms}
              </RoomInfoContent>
              <RoomInfoTitle>Baths</RoomInfoTitle>
            </RoomInfo>
            <Divider />
            <RoomInfo>
              <RoomInfoContent>
                {data.buildingInformation.square}
              </RoomInfoContent>
              <RoomInfoTitle>Square</RoomInfoTitle>
            </RoomInfo>
            <Divider />
            <RoomInfo>
              <RoomInfoContent>
                {Math.floor(data.buildingInformation.square / 3.3)}
              </RoomInfoContent>
              <RoomInfoTitle>Pyung</RoomInfoTitle>
            </RoomInfo>
            <Divider />
            <ClickableRoomInfo onClick={onClickSave}>
              <RoomInfoContent>
                {/* {isSavedAsset ? <SavedFlagImage /> : <UnSavedFlagImage />} */}
                {isSavedAsset ? <AiFillHeart /> : <AiOutlineHeart />}
              </RoomInfoContent>
              <RoomInfoTitle>Favorite</RoomInfoTitle>
            </ClickableRoomInfo>
            <Divider />
            <ClickableRoomInfo>
              <RoomInfoContent>
                <FaHelicopter />
              </RoomInfoContent>
              <RoomInfoTitle>Ongoing</RoomInfoTitle>
            </ClickableRoomInfo>
            <Divider />
            <ClickableRoomInfo>
              <RoomInfoContent>
                <FaShareAlt />
              </RoomInfoContent>
              <RoomInfoTitle>Share</RoomInfoTitle>
            </ClickableRoomInfo>
            <Divider />
          </Rooms>
        </RoomWrapper>
      </ContentBlock>
    </Container>
  );
};

const Container: any = styled.div`
  position: relative;
  max-width: 100vw;
  width: 100%;
  background-color: black;
  color: white;
  padding: 20px;
  height: 98px;
  background-color: ${(props: any) => props.scrollMove && "black"};
  position: ${(props: any) => props.scrollMove && "fixed"};
  top: ${(props: any) => props.scrollMove && "112px"};
  z-index: ${(props: any) => props.scrollMove && 3};
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    top: ${(props: any) => props.scrollMove && "80px"};
  }
  transition: background-color ease-in-out 0.3s;
`;
const ContentBlock = styled.div`
  display: flex;
  align-items: center;
  width: 88%;
  /* max-width:  */
  color: white;
  margin: 0 auto;
  max-width: 1904px;
`;
const AddressWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const RoomWrapper = styled.div`
  flex: 1;
  display: flex;
`;

const Street = styled.div`
  // color: #4542e2;
  color: white;
  font-size: 23px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 20px;
  }
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
  font-size: 14px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 12px;
  }
`;

const Dollar = styled.div`
  font-size: 21px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 18px;
  }
`;

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
  border-right: 1px solid #a6a6a6;
`;

const Rooms = styled.div`
  /* width: 558px; */
  min-width: 530px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  color: #a6a6a6;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 12px;
  }
`;

const RoomInfoContent = styled.div`
  font-size: 21px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 18px;
  }
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
