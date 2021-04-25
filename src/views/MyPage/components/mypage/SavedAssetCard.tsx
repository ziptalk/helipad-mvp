import React from 'react';
import Asset from '../../../../model/Asset';
import styled, { css } from 'styled-components';
import { ReactComponent as LikeFlag } from '../../../../images/ic_saved_flag.svg';
import { Link } from 'react-router-dom';

type AssetCardProps = {
  data: Asset;
};

const SavedAssetCard = ({ asset }: any) => {
  let url = asset.buildingInformation.thumbnail;
  const { price, buildingInformation } = asset;
  const {
    street,
    address,
    nBedrooms,
    nBathrooms,
    square,
  } = buildingInformation;

  return (
    <Link to={`/asset/${asset.id}`}>
      <Container background={url}>
        <LikeFlag className="flag" />
        <ContainerGradient>
          <ContainerContent>
            <LeftSide>
              <PriceBlock>
                <PriceDollar>
                  ($){(price * 1000).toLocaleString('en-US')}
                </PriceDollar>
                <PriceWon>(₩){price.toLocaleString('ko-KR')}</PriceWon>
              </PriceBlock>
              <PlaceInfoBlock>
                <StreetInfo>{street}</StreetInfo>
                <AddressInfo>{address}</AddressInfo>
              </PlaceInfoBlock>
            </LeftSide>
            <Divider />
            <RightSide>
              <RoomInfoBlock>
                <RoomInfo>{nBedrooms} Bedrooms</RoomInfo>
                <RoomInfo>{nBathrooms} Bathrooms</RoomInfo>
                <RoomInfo>{square} Sq m</RoomInfo>
                <RoomInfo>{Math.round(square / 3.3)} Pyung</RoomInfo>
              </RoomInfoBlock>
            </RightSide>
          </ContainerContent>
        </ContainerGradient>
      </Container>
    </Link>
  );
};

const Container: any = styled.div`
  position: relative;
  width: 470px;
  height: 353px;

  background: url(${(props: any) => props.background});
  background-size: cover;

  .flag {
    position: absolute;
    top: 10px;
    right: 10px;
  }
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

// In case no asset
SavedAssetCard.defaultProps = {
  asset: [],
};
export default SavedAssetCard;

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
