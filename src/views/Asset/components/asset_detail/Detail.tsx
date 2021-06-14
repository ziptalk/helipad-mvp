import styled from "styled-components";
import React from "react";
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
type DetailProps = {
  data: Asset;
};

const Detail: React.FC<DetailProps> = ({ data }) => {
  console.log("data :", data);
  const virtualTourLink = data.buildingInformation.virtualTour;
  return (
    <Container>
      <Category>
        <CategoryItem>Location</CategoryItem>
        <CategoryDivider />
        <CategoryItem>Schools</CategoryItem>
        <CategoryDivider />
        <CategoryItem>Neighborhood</CategoryItem>
      </Category>
      <Body>
        <LeftBody>
          <Thumbnail src={data.buildingInformation.thumbnail} />
          {virtualTourLink && (
            <VirtualTourButton href={virtualTourLink}>
              <AiOutlinePlayCircle
                style={{ paddingRight: "10", fontSize: "32" }}
              />
              Virtual Tour
            </VirtualTourButton>
          )}

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
  width: 1092px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CategoryItem = styled.div`
  font-size: 18px;
`;

const CategoryDivider = styled.div`
  border: 1px solid #000000;
`;

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
  padding-top: 15px;
  padding-bottom: 15px;
`;

const StatusCategory = styled.div`
  font-weight: bold;
  width: 260px;
`;

const StatusContent = styled.div``;

export default Detail;
