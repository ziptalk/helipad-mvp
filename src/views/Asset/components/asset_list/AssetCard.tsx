import React, { useState } from "react";
import { Link, RouteComponentProps, useHistory } from "react-router-dom";
import "./AssetCard.css";
import Asset from "../../../../model/Asset";
import styled from "styled-components";

type AssetCardProps = {
  data: Asset;
};

const AssetCard = ({ data }: AssetCardProps) => {
  const [mouseOver, setMouseOver] = useState(false);

  const handlerMouseOver = (event:Event) => {
    setMouseOver(true)
  }

  const handlerMouseOut = (event:Event) => {
    setMouseOver(false)
  }

  return (
    <Link to={`/asset/assetList/${data.id}`} style={{ textDecoration: "none" }}>
      <Container 
        background={data.buildingInformation.thumbnail} 
        onMouseOver={handlerMouseOver}
        onMouseOut={handlerMouseOut}>
        <ContainerGradient>
          {mouseOver ? 
          <>
          <ContainerContent2 style={{position:"relative"}}>
            <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
              <button style={{backgroundColor:"transparent", color:"white", fontSize:"20px", fontWeight:800, border:"0"}}>〈</button>
              <button style={{backgroundColor:"transparent", color:"white", fontSize:"20px", fontWeight:800, border:"0"}}>〉</button>
            </div>
            <div style={{width:"100%", position:"absolute", alignItems:"center", textAlign:"center"}}>
              <div style={{backgroundColor:"black",marginLeft:"55px", marginTop:"30px",color:"white", fontSize:"12px", width:"100px", height:"20px",alignItems:"center", textAlign:"center"}}>
                01 of 01
              </div>
            </div>
          </ContainerContent2>
          </>
          :
          <ContainerContent>
            <LeftSide>
              <PriceBlock>
                <PriceDollar>
                  ($){data.price.toLocaleString("en-US")}
                </PriceDollar>
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
                  {data.buildingInformation.nBedrooms} Beds
                </RoomInfo>
                <RoomInfo>
                  {data.buildingInformation.nBathrooms} Bath
                </RoomInfo>
                <RoomInfo>{data.buildingInformation.square} Sq m</RoomInfo>
                <RoomInfo>
                  {Math.round(data.buildingInformation.square / 3.3)} Pyung
                </RoomInfo>
              </RoomInfoBlock>
            </RightSide>
          </ContainerContent>
        }
        </ContainerGradient>
      </Container>
    </Link>
  );
};

const Container: any = styled.div`
  display: inline-block;
  justify-content: space-between;
  // width: 512px;
  // height: 353px;
  margin: 12px;
  width: 250px;
  height: 175px;
  // width: 100%;
  // max-width: 300px;

  background: url(${(props: any) => props.background});
  background-size: cover;
  text-decoration: none;
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
  // display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

const ContainerContent = styled.div`
  color: #ffffff;
  font-weight: 600;
  // font-size: 25px;
  font-size: 8px;
  display: flex;
  padding: 20px 20px;
  padding-top:70px;
`;
const ContainerContent2 = styled.div`
  color: #ffffff;
  font-weight: 600;
  // font-size: 25px;
  font-size; 8px;
  padding: 20px 20px;
  padding-top:70px;
`;
const LeftSide = styled.div`
  width: 60%;
`;
const PriceBlock = styled.div`
  // font-size: 22px;
  font-size: 15px;
  font-weight: 800;
  padding-bottom: 10px;
`;
const PriceDollar = styled.div``;
const PriceWon = styled.div``;
const PlaceInfoBlock = styled.div`
  font-family: "Helvetica Neue";
  // font-size: 15px;
  font-size: 10px;
  // -webkit-transform:scale(0.9);
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
  font-family: "Helvetica Neue";
  // font-size: 18px;
  font-size: 9px;
  font-weight: 400;
`;
const RoomInfo = styled.div`
  margin: 5px 0;
  text-decoration: none;
`;

export default AssetCard;
