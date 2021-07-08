import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import Asset from "../../../../model/Asset";
import Contact from "./Contact";
import Amenities from "./Amenties";
import Location from "./Location";
import BuildingInfo from "./BuiildingInfo";
import InvestmentProfile from "./InvestmentProfile";
import SchoolNearby from "./SchoolNearby";
import SchoolNearBy2 from "./SchoolNearBy/SchoolNearBy2";
import IDontKnow from "./IDontKnow";
import Neighborhood from "./Neighborhood";
import Footer from "../../../../components/Footer";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsGrid, BsMap } from "react-icons/bs";
import { BiStreetView } from "react-icons/bi";
import Modal from "./modal";

type DetailProps = {
  data: Asset;
};

const Detail: React.FC<DetailProps> = ({ data }) => {
  const [categoryClick, setCategoryClick] = useState(0)
  const [viewallOpen, setViewallOpen] = useState(false)
  const [popupClick, setPopupClick] = useState(0)

  console.log("data :", data);
  const virtualTourLink = data.buildingInformation.virtualTour;

  const categoryOnClick = (state: number) => {
    setCategoryClick(state);
  }

  const popupOnClick = (state: number) => {
    setPopupClick(state)
    setViewallOpen(true);
    console.log(data);
  }

  const closeViewall = () => {
    setViewallOpen(false);
  }

  const openViewall = () => {
    setViewallOpen(true);
  }
  return (
    <Container>
      <Body>
        <LeftBody>
          <Category>
          <CategoryTitle>
            {categoryClick == 0 ? <CategoryItem  style={{boxShadow:"inset 0px -3px 0px #B69142", color:"black"}} onClick={()=>categoryOnClick(0)} >Location</CategoryItem>:<CategoryItem onClick={()=>categoryOnClick(0)} >Location</CategoryItem>}
            {categoryClick == 1 ? <CategoryItem  style={{boxShadow:"inset 0px -3px 0px #B69142", color:"black"}} onClick={()=>categoryOnClick(1)} >Schools</CategoryItem>:<CategoryItem onClick={()=>categoryOnClick(1)} >Schools</CategoryItem>}
            {categoryClick == 2 ? <CategoryItem  style={{boxShadow:"inset 0px -3px 0px #B69142", color:"black"}} onClick={()=>categoryOnClick(2)} >Similar Homes</CategoryItem>:<CategoryItem onClick={()=>categoryOnClick(2)} >Similar Homes</CategoryItem>}
          </CategoryTitle>
          {/* <InformationTitle>
            Information
          </InformationTitle> */}
        </Category>
          <Thumbnail src={data.buildingInformation.thumbnail} />
          {virtualTourLink && (
            <VirtualTourButton href={virtualTourLink}>
              <AiOutlinePlayCircle
                style={{ paddingRight: "10", fontSize: "32" }}
              />
              Virtual Tour
            </VirtualTourButton>
          )}
          <UnderBarContainer>
            <ImageContainer>
              <button style={{border: "0", width:"5%", fontSize:"20px", fontWeight:700, backgroundColor:"transparent"}}>〈</button>
              <button style={{backgroundImage:`url("${data.buildingInformation.thumbnail}")`, width:"15%", backgroundSize:"100% 100%", border:"0"}}>
                {/* <div style={{width:"100%", height:"100%",backdropFilter:"brightness(1.3)"}}/> */}
              </button>
              <button style={{backgroundImage:`url("${data.buildingInformation.thumbnail}")`, width:"15%", backgroundSize:"100% 100%", border:"0", filter:"brightness(0.7)"}}></button>
              <button style={{backgroundImage:`url("${data.buildingInformation.thumbnail}")`, width:"15%", backgroundSize:"100% 100%", border:"0", filter:"brightness(0.7)"}}></button>
              <button style={{backgroundImage:`url("${data.buildingInformation.thumbnail}")`, width:"15%", backgroundSize:"100% 100%", border:"0", filter:"brightness(0.7)"}}></button>
              <button style={{backgroundImage:`url("${data.buildingInformation.thumbnail}")`, width:"15%", backgroundSize:"100% 100%", border:"0", filter:"brightness(0.7)"}}></button>
              <button style={{border: "0", width:"5%", fontSize:"20px", fontWeight:700, backgroundColor:"transparent"}}>〉</button>
            </ImageContainer>
            <ButtonContainer style={{border:"1px solid #EAEAEA"}}>
              <button onClick={()=>popupOnClick(0)} style={{width:"30%", border:"0", backgroundColor:"transparent"}}>
                <BsGrid style={{width:"20px", height:"20px"}}/>
                <div>View All</div>
              </button>
              <button onClick={()=>popupOnClick(1)} style={{width:"30%", border:"0", backgroundColor:"transparent"}}>
                <BsMap style={{width:"20px", height:"20px"}}/>
                <div>Map</div>
              </button>
              <button onClick={()=>popupOnClick(2)} style={{width:"30%", border:"0", backgroundColor:"transparent"}}>
                <BiStreetView style={{width:"20px", height:"20px"}}/>
                <div>Street View</div>
              </button>
            </ButtonContainer>
          </UnderBarContainer>
          <Modal 
            open={viewallOpen} 
            close={closeViewall}
            header={
              <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
              <PopupCategoryContainer>
                {popupClick == 0 ? <PopupCategoryButton style={{backgroundColor:"white", color:"#212121"}}>View all</PopupCategoryButton> : <PopupCategoryButton>View all</PopupCategoryButton>}
                {popupClick == 1 ? <PopupCategoryButton style={{backgroundColor:"white", color:"#212121"}}>Map</PopupCategoryButton> : <PopupCategoryButton>Map</PopupCategoryButton>}
                {popupClick == 2 ? <PopupCategoryButton style={{backgroundColor:"white", color:"#212121"}}>Street View</PopupCategoryButton> : <PopupCategoryButton>Street View</PopupCategoryButton>}
              </PopupCategoryContainer>
              </div>
            }>
            <div style={{width:"100%"}}>
              {popupClick == 0 ? 
              <div style={{marginLeft:"30px"}}>
                <div style={{display:"flex"}}>
                  <div>{data.buildingInformation.address}</div>
                  <div style={{marginLeft:"20px"}}>${data.price}</div>
                  <div style={{marginLeft:"20px"}}>{data.buildingInformation.nBedrooms} Beds</div>
                  <div style={{marginLeft:"20px"}}>{data.buildingInformation.nBathrooms} Baths</div>
                  <div style={{marginLeft:"20px"}}>{data.buildingInformation.square} Square</div>
                </div>

                <div >
                  <img src={data.buildingInformation.thumbnail} style={{width:"500px", margin:"30px 30px 0 0"}}/>
                  <img src={data.buildingInformation.thumbnail} style={{width:"500px", margin:"30px 30px 0 0"}}/>
                  <img src={data.buildingInformation.thumbnail} style={{width:"500px", margin:"30px 30px 0 0"}}/>
                  <img src={data.buildingInformation.thumbnail} style={{width:"500px", margin:"30px 30px 0 0"}}/>
                  <img src={data.buildingInformation.thumbnail} style={{width:"500px", margin:"30px 30px 0 0"}}/>
                  <img src={data.buildingInformation.thumbnail} style={{width:"500px", margin:"30px 30px 0 0"}}/>
                </div>
              </div>
              :<><div>서비스 준비중입니다.</div></>}
            </div>
          </Modal>
          <Information>{data.information}</Information>
          <Amenities data={data.amenities} />
          <Location address={data.buildingInformation.street} />
          <BuildingInfo buildingInformation={data.buildingInformation} />
          <InvestmentProfile data={data} />
          <SchoolNearby />

          <IDontKnow />
          <Neighborhood />
        </LeftBody>
        <RightBody>
          <Category>
            <div style={{fontSize:"20px", fontWeight:700, paddingTop:"10px"}}>
              Information
            </div>
          </Category>
          <StatusContainer>
            <Status>
              <StatusItem>
                <StatusCategory>Status</StatusCategory>
                <StatusContent>{data.status}</StatusContent>
              </StatusItem>
              <StatusItem>
                <StatusCategory>Days on Market</StatusCategory>
                <StatusContent>{data.daysOnMarket}</StatusContent>
              </StatusItem>

              <StatusItem>
                <StatusCategory>Estimated Property Tax</StatusCategory>
                <StatusContent>{data.taxPerMonth}</StatusContent>
              </StatusItem>
              <StatusItem>
                <StatusCategory>HOA Fees</StatusCategory>
                <StatusContent>{data.hoaFee} / month</StatusContent>
              </StatusItem>
              <StatusItem>
                <StatusCategory>Lot Size</StatusCategory>
                <StatusContent>{data.lotSize} SF</StatusContent>
              </StatusItem>
              <StatusItem>
                <StatusCategory>MLS Type</StatusCategory>
                <StatusContent>{data.mlsType}</StatusContent>
              </StatusItem>
              <StatusItem>
                <StatusCategory>Year Built</StatusCategory>
                <StatusContent>
                  {data.buildingInformation.yearBuilt}
                </StatusContent>
              </StatusItem>
              {/* <StatusItem>
                <StatusCategory>Country</StatusCategory>
                <StatusContent>
                  {data.buildingInformation.country}
                </StatusContent>
              </StatusItem> */}
              {/* <StatusItem>
                <StatusCategory>Expected monthly payment</StatusCategory>
                <StatusContent>${data.expectedMonthlyPayment}</StatusContent>
              </StatusItem> */}
            </Status>
          </StatusContainer>
          <Contact agent={data.agent} assetId={data.id} />
        </RightBody>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Category = styled.div`
  // width: 1092px;
  width: 100%;
  // margin-left: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const CategoryTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const CategoryItem = styled.button`
  font-size: 18px;
  width: 100%;
  height: 50px;
  border: 0;
  background-color: transparent;
  box-shadow: inset 0px -3px 0px #CFD4DA;
  color: #CFD4DA;
`;

const CategoryDivider = styled.div`
  border: 1px solid #000000;
`;

const InformationTitle = styled.div`
  width: 45%;
`

const Body = styled.div`
  display: grid;
  grid-template-columns: 954px 471px;
  grid-gap: 25px;
  margin-top: 35px;
`;

const LeftBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const VirtualTourButton = styled.a`
  margin-top: 20px;
  width: 150px;
  height: 50px;
  color: black;
  border: 1px solid lightgray;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Thumbnail = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 624px;
`;

const Information = styled.div`
  margin-top: 25px;
`;

const RightBody = styled.div``;

const StatusContainer = styled.div`
  margin-bottom: 62px;
`;

const Status = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatusItem = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  border-bottom: 1px solid #e9e9e9;
  padding-top: 7px;
  padding-bottom: 7px;
`;

const StatusCategory = styled.div`
  // font-weight: bold;
  width: 260px;
`;

const StatusContent = styled.div`
  font-weight: 500;
`;

const UnderBarContainer = styled.div`
  width:100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
`

const ImageContainer = styled.div`
  width: 70%;
  height: 60px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`
const ButtonContainer = styled.div`
  width: 30%;
  height: 60px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`

const PopupCategoryContainer = styled.div`
  width: 50%;
  height: 35px;
  margin-top: 15px;
  display: flex;
  // font-size: 15px;
  text-align: center;
  align-items: center;
`

const PopupCategoryButton = styled.div`
  width: 30%;
  color: #A3A3A3;
  height: 100%;
  text-align: center;
  align-items: center;
  padding-top: 10px;
`

export default Detail;
