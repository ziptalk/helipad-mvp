// import * as React from 'react';
import React, { useContext, useEffect, useState } from "react";
import styled from 'styled-components';
import { Header } from '../../../../components/header/Header';
import GoogleMap from "../../../../shared/GoogleMapAsset";
import Geocode from "react-geocode";
import Asset from "../../../../model/Asset";

type LocationProps = {
  address: string;
  data: Asset;
};

const Location: React.FC<LocationProps> = ({ address, data }) => {
  const [locations, setLocations] = useState(
    {
      assetId: "",
      assetAddress: "",
      assetLat: 1000,
      assetLng: 1000,
      assetLabel: "1,234,567,890,001",
    }
  );
  const [effectDone, setEffectDone] = useState(false);

  useEffect(() => {
    var tmpPart = [0, 1]

    console.log(address)
    
    async function innerFunction(){
    async function wholeFunction(){
          var tmpMap = [1, 2]
          let assetState = 
            {
              assetId: "",
              assetAddress: "",
              assetLat: 1000,
              assetLng: 1000,
              // assetLabel: "1,234,567,890,001"
              assetLabel: "996K",
            }

          async function forSettingLocation() {
            let priceLabel = "H";
            assetState = {
              assetId: data.id,
              assetAddress: data.buildingInformation.address,
              assetLat: 0,
              assetLng: 0,
              assetLabel: priceLabel,
            }
            console.log("hello")

            const GoogleMapLocate = async (
              currentAddr: string
            ) => {
              await Geocode.fromAddress(currentAddr)
                .then((response) => {
                  const { lat, lng } = response.results[0].geometry.location;
                  assetState.assetLat = lat;
                  assetState.assetLng = lng;
                  console.log(lat) 
                  console.log(lng)
                  return { lat, lng };
                })
                .catch((err) => console.log(err));
            };

            const geoSetting = tmpMap.map(async function (asset, index) {
              await GoogleMapLocate(
                address
              );
              return address;
            });
            await Promise.all(geoSetting).then((res) => console.log(`${res}`));

            await setLocations(assetState);
            // await Promise.all(listSetting).then((res) => console.log(`${res}`));
          }

          forSettingLocation();
        }

          const wholePart = tmpPart.map(tmp => {
            wholeFunction()
          })
          await Promise.all(wholePart).then((res) =>  console.log(`${res}`));
    }
    innerFunction();
    setEffectDone(true)
  }, [address]);

  return (
    <Container>
      <TitleWrapper>
        <Title>Location</Title>
        <Address>{address}</Address>
      </TitleWrapper>
      <Map>
        <GoogleMap
          bootstrapURLKeys={{ key: "AIzaSyAHHYSWgQGMPHXYRqCMMUSlxTvqrDepyeA" }}
          defaultZoom={15}
          defaultCenter={{ lat: 0, lng: 0 }}
          // data={assets}
          data={locations}
          // data = {assets}
        ></GoogleMap>
      </Map>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

const Title = styled.div`
  width: 300px;
  font-size: 18px;
  font-weight: bold;
`;

const Address = styled.div``;

const Map = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid #000000;
`;

export default Location;
