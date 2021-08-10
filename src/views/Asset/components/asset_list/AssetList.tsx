import React, { useContext, useEffect, useState } from "react";
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
// import RangeSliders from "./RangeSlider";
import RangeSliders from "./PriceRangeSlider";
import DoubleRangeSlider from "./DoubleRangeSlider";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";

Geocode.setApiKey("AIzaSyAHHYSWgQGMPHXYRqCMMUSlxTvqrDepyeA");
Geocode.setLanguage("en");
Geocode.setRegion("es");
Geocode.enableDebug();

type AssetListProperties = {};

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

enum Definition {
  FOR_INVESTMENT = 0,
  FOR_LIVING = 1,
}

const AssetList: React.FC<AssetListProperties> = ({ history }: any) => {
  const [definition, setDefinition] = useState<Definition>(
    Definition.FOR_INVESTMENT
  );
  const [ascend, setAscend] = useState(true);
  const { user, setHeaderMode } = useContext(AuthContext);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [locations, setLocations] = useState([
    {
      assetId: "",
      assetAddress: "",
      assetLat: 1000,
      assetLng: 1000,
      assetLabel: "1,234,567,890,001",
    },
  ]);
  const [locationsDone, setLocationsDone] = useState(false);

  console.log(assets);

  useEffect(() => {
    async function wholeFunction() {
      setHeaderMode("");
      GetAsset.getAssetListByNeighborhood(history.location.state).then(
        (value) => {
          console.log(history.location.state);
          setAssets(value);
          console.log("data", value);

          let assetStateList = [
            {
              assetId: "",
              assetAddress: "",
              assetLat: 1000,
              assetLng: 1000,
              // assetLabel: "1,234,567,890,001"
              assetLabel: "996K",
            },
          ];

          async function forSettingLocation() {
            // setLocationsDone(true);
            let id = 1;
            const listSetting = value.map(async function (asset) {
              let price = asset.price / 1000; //won -> dollar
              let priceLabel = "";
              if (10000 > price && price >= 0) {
                priceLabel =
                  price
                    .toFixed()
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "K";
              } else if (price >= 10000) {
                priceLabel =
                  (price / 1000)
                    .toFixed(1)
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "M";
              } else {
                priceLabel = price.toString();
              }
              assetStateList = assetStateList.concat({
                assetId: asset.id,
                assetAddress: asset.buildingInformation.address,
                assetLat: 0,
                assetLng: 0,
                assetLabel: priceLabel,
              });
              id++;
              console.log(assetStateList);
              return id;
            });

            await Promise.all(listSetting).then((res) => console.log(`${res}`));

            const GoogleMapLocate = async (
              currentAddr: string,
              index: number
            ) => {
              await Geocode.fromAddress(currentAddr)
                .then((response) => {
                  const { lat, lng } = response.results[0].geometry.location;
                  assetStateList[index].assetLat = lat;
                  assetStateList[index].assetLng = lng;
                  return { lat, lng };
                })
                .catch((err) => console.log(err));
            };

            const geoSetting = value.map(async function (asset, index) {
              await GoogleMapLocate(
                asset.buildingInformation.address,
                index + 1
              );
              return index;
            });

            await Promise.all(geoSetting).then((res) => console.log(`${res}`));

            await setLocations(assetStateList);
          }

          forSettingLocation();
        }
      );
    }
    wholeFunction();
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
          defaultCenter={{
            lat: locations[0].assetLat,
            lng: locations[0].assetLng,
          }}
          // data={assets}
          data={locations}
          // data = {assets}
        ></GoogleMap>
      </MapContainer>
      <AssetContainer>
        <AssetTitle>Beverly Hills, CA Homes for Sale & Real Estate</AssetTitle>
        <PriceControl>
          <PriceTitle style={{ paddingTop: "20px", paddingLeft: "30px" }}>
            Purchase price
          </PriceTitle>
          {/* <RangeSliders /> */}
        </PriceControl>
        <DoubleRangeSlider history={history.location.state} />
        {/* {assets.map((asset) => (
          <AssetCard data={asset} />
        ))} */}
      </AssetContainer>
    </Container>
  );
};

const Container = styled.div`
  // width: 100vw;
  // width: 100%;
  // margin-top: 112px;
  /* max-width: 1904px; */
  width: 100vw;
  height: 100%;
  display: grid;
  grid-template-columns: 1.5fr minmax(auto, 800px);
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    grid-template-columns: 1.3fr 1.2fr;
  }
`;

const MapContainer = styled.div`
  /* width: calc(100% - 40%); */
  width: 100%;

  // width: 60%;
`;

const AssetContainer = styled.div`
  width: 100%;
  // width: 900px;
  // width: 40%;
  // background-color: #61dafb;
  justify-self: end;
  /* background-color: #f4f4f4; */
  background-color: white;
  overflow-y: scroll;
  z-index: 0;
`;

const AssetTitle = styled.div`
  width: 100%;
  height: 50px;
  font-size: 25px;
  background-color: black;
  color: white;
  text-align: center;
  padding-top: 10px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 18px;
  }
`;
const PriceTitle = styled.div`
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 16px;
  }
`;
const PriceControl = styled.div`
  width: 100%;

  background-color: white;
  color: black;
  font-size: 22px;
  // padding: 20px;
  // padding-left: 30px;
`;

export default AssetList;
