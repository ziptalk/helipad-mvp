import React, { useEffect, useState } from "react";
import AssetCard from "./AssetCard";
import styled from "styled-components";
import { ReactComponent as ArrowUp } from "../../../../images/ic_down.svg";
import { ReactComponent as ArrowDown } from "../../../../images/ic_up.svg";
import GetAsset from "../../../../domain/GetAsset";
import Asset from "../../../../model/Asset";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import GoogleMap from "../../../../shared/GoogleMap";
import Geocode from "react-geocode";
// import Marker from './Marker';

type AssetListProperties = {};

const AnyReactComponent = ({text}: any) => <div>{text}</div>;

enum Definition {
  FOR_INVESTMENT = 0,
  FOR_LIVING = 1,
}

const AssetList: React.FC<AssetListProperties> = ({ history }: any) => {
  const [definition, setDefinition] = useState<Definition>(
    Definition.FOR_INVESTMENT
  );
  const [ascend, setAscend] = useState(true);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [locations, setLocations] = useState([
    {
        assetId: 0,
        assetAddress : "",
        assetLat : 40.7164377,
        assetLng : -73.9644072,
        assetLabel: "1,234,567,890,001"
    },
]);

  // useEffect(() => {
  //   GetAsset.getAssetList().then((value) => {
  //     setAssets(value);
  //     console.log("data", value);
  //   });
  // }, []);
  useEffect(() => {
    GetAsset.getAssetList().then((value) => {
      setAssets(value);
      console.log('data', value);
    });

    let assetStateList = [
        {
            assetId: 0,
            assetAddress : "",
            assetLat : 40.7164377,
            assetLng : -73.9644072,
            assetLabel: "1,234,567,890,001"
        },
    ]

    let id = 1;

    const GoogleMapLocate2 = async (currentAddr: string, index: number) => {
      await Geocode.fromAddress(currentAddr)
        .then( response => {
          const { lat, lng } = response.results[0].geometry.location;               
          
          assetStateList[index].assetLat = lat;
          assetStateList[index].assetLng= lng;
          
          return {lat, lng}
        })
        .catch(err => console.log(err))
    }

    assets.map(function(asset){
        assetStateList = assetStateList.concat({
            assetId: id,
            assetAddress: asset.buildingInformation.address,
            assetLat: 0,
            assetLng: 0,
            assetLabel: (asset.price*1000).toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        })
        id++;
    })
    
    assets.map((asset, index) => GoogleMapLocate2(asset.buildingInformation.address, index + 1))

    setLocations(assetStateList);
    console.log(locations);

  }, []);

  const getInvestmentList = () => {
    setDefinition(Definition.FOR_INVESTMENT);
  };

  const getLivingList = () => {
    setDefinition(Definition.FOR_LIVING);
  };

  const setAscending = () => {
    setAscend(true);
  };

  const setDescending = () => {
    setAscend(false);
  };

  return (
    <Container>
      <MapContainer>
        <GoogleMap
            bootstrapURLKeys = {{ key: 'AIzaSyAHHYSWgQGMPHXYRqCMMUSlxTvqrDepyeA' }}
            defaultZoom={15}
            defaultCenter={{ lat: 0, lng: 0 }}
            // data={assets}
            data = {locations}
        >
        </GoogleMap>
      </MapContainer>
      <AssetContainer>
        {assets.map((asset) => (
          <AssetCard data={asset} />
        ))}
      </AssetContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: row;
`;

const MapContainer = styled.div`
  width: calc(100vw - 512px);
  height: 100vh;
`;

const AssetContainer = styled.div`
  width: 512px;
  height: 100vh;
  background-color: #61dafb;
  overflow-y: scroll;
  z-index: 0;
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 300;
  font-size: 24px;
`;
const InvestmentBlock = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 0 100px;
  font-size: 24px;
  font-weight: 300;
  line-height: 30.29px;
  cursor: pointer;
`;

const Selected = styled.div`
  font-weight: bold;
`;
const Unselected = styled.div`
  font-weight: 300;
`;

const Divider = styled.div``;
const LivingBlock = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 0 100px;
  font-size: 24px;
  font-weight: 300;
  line-height: 30.29px;
  cursor: pointer;
  &:focus {
    font-weight: bold;
  }
`;

const SortBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
`;
const ArrowTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 22.71px;
  margin-right: 10px;
`;
const ArrowBlock = styled.div`
  padding: 5px 0;

  &:focus {
    color: red;
  }
`;

const AssetListGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 470px 470px 470px;
  grid-gap: 15px;
`;

export default AssetList;
