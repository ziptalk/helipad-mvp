import React from 'react';
import './AssetCard.css';
import Asset from '../../model/Asset';
import styled, { css } from 'styled-components';

type AssetCardProps = {
  data: Asset;
};

const AssetCard = ({ asset }: any) => {
  let url = asset.buildingInformation.thumbnailUrl;

  return (
    <Container background={url}>
      <ContainerGradient>
        <ContainerContent>
          <LeftSide>
            <PriceBlock>
              <PriceDollar>
                ($){(asset.price * 1000).toLocaleString('en-US')}
              </PriceDollar>
              <PriceWon>(₩){asset.price.toLocaleString('ko-KR')}</PriceWon>
            </PriceBlock>
            <PlaceInfoBlock>
              <StreetInfo>{asset.buildingInformation.street}</StreetInfo>
              <AddressInfo>{asset.buildingInformation.address}</AddressInfo>
            </PlaceInfoBlock>
          </LeftSide>
          <Divider />
          <RightSide>
            <RoomInfoBlock>
              <RoomInfo>
                {asset.buildingInformation.nBedrooms} Bedrooms
              </RoomInfo>
              <RoomInfo>
                {asset.buildingInformation.nBathrooms} Bathrooms
              </RoomInfo>
              <RoomInfo>{asset.buildingInformation.square} Sq m</RoomInfo>
              <RoomInfo>
                {Math.round(asset.buildingInformation.square / 3.3)} Pyung
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

// export default class AssetCard extends React.Component<any, any> {
//     render() {
//         return (
//             <div className="assetCardWrapper">
//                 <div className="assetCardGradient">
//                     <div className="assetCardContent">
//                         <div className="assetCardMainInfo">
//                             <div className="assetCardPrice">
//                                 <div className="assetCardDollar">
//                                     $ 12,345,000
//                                 </div>
//                                 <div className="assetCardWon">
//                                     ₩ 12,345,000,000
//                                 </div>
//                             </div>
//                             <div className="assetCardAddress">
//                                 446 Kent Avenue, Unit 12C<br />
//                                 Williamsburg
//                             </div>
//                         </div>
//                         <div className="assetCardDivider" />
//                         <div className="assetCardRoomInfo">
//                             <div>00 Bedrooms</div>
//                             <div>00 Bathrooms</div>
//                             <div>00 Sq m</div>
//                             <div>00 Pyung</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
