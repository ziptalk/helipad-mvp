import styled from 'styled-components';
import React from 'react';
import Asset from '../../model/Asset';
import Contact from './Contact';
import Amenities from './Amenties';
import Location from './Location';
import BuildingInfo from './BuiildingInfo';
import InvestmentProfile from './InvestmentProfile';
import SchoolNearby from './SchoolNearby';
import IDontKnow from './IDontKnow';
import Neighborhood from './Neighborhood';
import Footer from '../Footer';

type DetailProps = {
  data: Asset;
};

const Detail: React.FC<DetailProps> = ({ data }) => {
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
          <Thumbnail />
          <Information>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            ligula sapien, rutrum sed vestibulum eget, rhoncus ac erat. Aliquam
            erat volutpat. Sed convallis scelerisque enim at fermentum. Aliquam
            consectetur, est ac auctor iaculis, odio mi bibendum leo, in congue
            neque velit vel enim. Nullam vitae justo at mauris sodales feugiat.
            Praesent pellentesque ipsum eget tellus imperdiet ultrices. Sed
            ultricies nisi nec diam sodales fringilla. Quisque adipiscing cursus
            porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam bibendum scelerisque elit, eu pharetra dui pulvinar eget.
            Nam mollis mauris id tellus ultricies at porttitor neque vulputate.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </Information>
          <Amenities data={data.amenities} />
          <Location address={data.buildingInformation.street} />
          <BuildingInfo buildingInformation={data.buildingInformation} />
          <InvestmentProfile />
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
              {/* <StatusItem>
                <StatusCategory>Taxes</StatusCategory>
                <StatusContent>${data.taxPerMonth} / month</StatusContent>
              </StatusItem> */}
              <StatusItem>
                <StatusCategory>Common Charges</StatusCategory>
                <StatusContent>
                  ${data.commonChargePerMonth} / month
                </StatusContent>
              </StatusItem>
              <StatusItem>
                <StatusCategory>Estimated Property Tax</StatusCategory>
                <StatusContent>
                  {data.commonChargePerMonth} / month
                </StatusContent>
              </StatusItem>
              <StatusItem>
                <StatusCategory>HOA Fees</StatusCategory>
                <StatusContent></StatusContent>
              </StatusItem>
              <StatusItem>
                <StatusCategory>Lot Size</StatusCategory>
                <StatusContent></StatusContent>
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
              <StatusItem>
                <StatusCategory>Expected monthly rent</StatusCategory>
                <StatusContent>${data.expectedMonthlyRent}</StatusContent>
              </StatusItem>
            </Status>
          </StatusContainer>
          <Contact />
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

const Thumbnail = styled.img.attrs((props) => ({
  src:
    'https://d3mi7e2vp4lzjl.cloudfront.net/LISTING_EDITOR/putImages/a556ec7f-d697-459a-85ee-943a77acc8be/33410b94-f019-49a3-a74e-375586a4fa51/1500x1000.jpg',
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
