import React, { useEffect, useState } from "react";
import AssetCard from "./AssetCard";
import styled from "styled-components";
import { ReactComponent as ArrowUp } from "../../../../images/ic_down.svg";
import { ReactComponent as ArrowDown } from "../../../../images/ic_up.svg";
import GetAsset from "../../../../domain/GetAsset";
import Asset from "../../../../model/Asset";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import GoogleMap from "../../../../shared/GoogleMap";

type AssetListProperties = {};

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

  // useEffect(() => {
  //   GetAsset.getAssetList().then((value) => {
  //     setAssets(value);
  //     console.log("data", value);
  //   });
  // }, []);
  useEffect(() => {
    GetAsset.getAssetListByNeighborhood(history.location.state).then(
      (value) => {
        setAssets(value);
        console.log("data", value);
      }
    );
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
          bootstrapURLKeys={{ key: "AIzaSyAHHYSWgQGMPHXYRqCMMUSlxTvqrDepyeA" }}
          defaultZoom={15}
          defaultCenter={{ lat: 37.5, lng: 127 }}
        />
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
