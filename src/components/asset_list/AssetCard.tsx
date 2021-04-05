import React from 'react';
import './AssetCard.css';
import Asset from '../../model/Asset';
import styled from 'styled-components';

type AssetCardProps = {
  data: Asset;
};

const AssetCard: React.FC<any> = ({ asset }) => {
  let url = asset.thumbnailUrl;
  return (
    <Container abc="abc">
      <ContainerGradient>
        <LeftSide>
          <PriceBlock>
            <PriceDollar>($){asset.price}</PriceDollar>
            <PriceWon>(₩){asset.price}</PriceWon>
          </PriceBlock>
          <PlaceInfoBlock>
            <StreetInfo>{asset.street}</StreetInfo>
            <AddressInfo>{asset.street}</AddressInfo>
          </PlaceInfoBlock>
        </LeftSide>
        <Divider></Divider>
        <RightSide>
          <RoomInfoBlock>
            <RoomInfo>{asset.nBedrooms} Bedrooms</RoomInfo>
            <RoomInfo>{asset.nBathrooms} Bathrooms</RoomInfo>
            <RoomInfo>{asset.square} Sq m</RoomInfo>
            <RoomInfo>{Math.round(asset.square / 3.3)} Pyung</RoomInfo>
          </RoomInfoBlock>
        </RightSide>
      </ContainerGradient>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid black;
  width: 470px;
  height: 353px;

  background: url(${(props) => props.abc});
  background: url('../../images/example_background1.svg');
  border: 1px solid #000000;
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

const LeftSide = styled.div`
  border: 1px solid black;
`;
const PriceBlock = styled.div``;
const PriceDollar = styled.div``;
const PriceWon = styled.div``;
const PlaceInfoBlock = styled.div``;
const StreetInfo = styled.div``;
const AddressInfo = styled.div``;

const Divider = styled.div`
  border: 1px solid black;
`;

const RightSide = styled.div`
  border: 1px solid black;
`;
const RoomInfoBlock = styled.div``;
const RoomInfo = styled.div``;
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
