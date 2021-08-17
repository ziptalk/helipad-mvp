import React, { useContext, useEffect, useState } from "react";
import AssetCard from "./AssetCard";
import styled from "styled-components";
import { ReactComponent as ArrowUp } from "../../../../images/ic_down.svg";

import { ReactComponent as ArrowDown } from "../../../../images/ic_up.svg";
import GetAsset from "../../../../domain/GetAsset";
import Asset from "../../../../model/Asset";
import BuildingInformation from "../../../../model/BuildingInformation"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import GoogleMap from "../../../../shared/GoogleMap";
import Geocode from "react-geocode";
// import Marker from './Marker';
// import RangeSliders from "./RangeSlider";
import RangeSliders from "./PriceRangeSlider";
import DoubleRangeSlider from "./DoubleRangeSlider";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
import $ from "jquery";

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

// localStorage.setItem('xValue', '10000000');

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
  const [bbOption, setBBOption] = useState(false);
  const [roomState, setRoomState] = useState(-1);
  const [bathroomState, setBathroomState] = useState(-1);
  const roomNumber = [1, 2, 3, 4, 5];
  const [fullAsset, setFullAsset] = useState<Asset[]>([]);
  const [nowPrice, setNowPrice] = useState(100000000);
  const [searchValue, setSearchValue] = useState('');

  console.log(assets);

  useEffect(() => {
    setHeaderMode("");
    var auth = btoa("simplyrets:simplyrets");

    function main() {
      let assetStateList = [
        {
          assetId: "",
          assetAddress: "",
          assetLat: 1000,
          assetLng: 1000,
          assetLabel: "996K",
        },
      ];
      let tmpAsset: Asset[] = [];
      $.ajax({
        // make an AJAX request - this is the /properties endpoint
        url: "https://api.simplyrets.com/properties",
        type: "GET",
        dataType: "json",
        // authorize with the API credentials
        beforeSend: function (xhr) {
          xhr.setRequestHeader("Authorization", "Basic  " + auth);
        },
        success: async function (res) {
          // let nowPrice = localStorage.getItem('xValue')
          // let tmpPrice = 30000000
          // console.log(nowPrice)
          // if(nowPrice){
          //   tmpPrice = parseInt(nowPrice)
          // }
          // setNowPrice(tmpPrice)
          for (var i = 0; i < res.length; i++) {
            if((res[i].property.bedrooms >= roomState) && (res[i].address.full.indexOf(searchValue)!=-1)){
              let singleAsset: Asset;
              let singleBuildingInformation: BuildingInformation;
              singleBuildingInformation = {
                thumbnail: res[i].photos[0],
                address: res[i].address.full,
                street: res[i].address.streetName,
                nBedrooms: res[i].property.bedrooms,
                // nBathrooms: res[i].property.bathrooms,
                nBathrooms: 2,
                nRooms: 3,
                square: res[i].property.area,
                county: res[i].geo.county, //...state? ex)"texas"
                buildingName: 'Building Name',
                floor: res[i].property.stories, //stories로 넣었음.
                stories: res[i].property.stories,
                residences: 5, // 몇 명 거주할 수 있느냐..인가요? 일단 다 5로 함
                petPolicy: 'Pet Policy', //ㅁㄹ
                yearBuilt: res[i].property.yearBuilt,
                buildingAge: '', //이건 직접 계산 하면 되는 부분..?
                buildingType: res[i].property.style, //일단 스타일로 넣음
                virtualTour: res[i].virtualTourUrl, // 다 비어있긴 함.
              }

              let amenitiesTmp = res[i].association.amenities
              amenitiesTmp.split('/ ')

              singleAsset = {
                id: res[i].mlsId.toString(),
                agent: res[i].agent.contact.email, //agent에 대한 여러 정보 중 이메일을 넣음
                forInvestment: false, // 여부 확인할 방법 없음
                price: res[i].sales.closePrice, //listprice 가 있고 closeprice가 있는데 뭘로 해야하나요
                status: res[i].mls.status,
                daysOnMarket: res[i].mls.daysOnMarket,
                taxPerMonth: res[i].tax.taxYear/12, //taxYear만 있어서 나누기 12함.
                minDownPymt: res[i].property.area/res[i].property.stories, //몰라 안나옴. 그냥 area 나누기 층수 하겠음
                compassType: 'Compass Type', // ?
                mlsType: 'mls Type', // ?
                expectedMonthlyPayment: 0, //?
                information: '',
                amenities: amenitiesTmp,
                neighborhood: 'neighborhood', // ?
                lotSize: res[i].property.lotSize,
                hoaFee: res[i].association.fee, // home owners association fee => association fee
                buildingInformation: singleBuildingInformation
              }
              console.log(singleAsset)

              tmpAsset.push(singleAsset)

              $("#app").append("<p>" + res[i].address.full + "</p>");
              let price = res[i].sales.closePrice;
              price = price / 1000; //1000dollar -> 1Kdollar
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
                assetId: res[i].mlsId,
                assetAddress: res[i].address.full,
                assetLat: res[i].geo.lat,
                assetLng: res[i].geo.lng,
                assetLabel: priceLabel,
              });
            } 
              // console.log(assetStateList);
            }
            assetStateList.shift();
            console.log(tmpAsset);
            console.log(assetStateList);

            if(assetStateList[0]){
              setLocations(assetStateList);
            }else{
              setLocations(assetStateList);
              // let assetStateList2 = [
              //   {
              //     assetId: "23423",
              //     assetAddress: "sdfsd",
              //     assetLat: 30,
              //     assetLng: 30,
              //     assetLabel: "996K",
              //   },
              // ];
              // setLocations(assetStateList2)
            }
            setFullAsset(tmpAsset)
            setLocationsDone(true);
          },
      });
    }

    main();
  }, [roomState, searchValue]);

  // useEffect(() => {
  //   async function wholeFunction() {
  //     setHeaderMode("");
  //     GetAsset.getAssetListByNeighborhood(history.location.state).then(
  //       (value) => {
  //         console.log(history.location.state);
  //         setAssets(value);
  //         console.log("data", value);

  //         let assetStateList = [
  //           {
  //             assetId: "",
  //             assetAddress: "",
  //             assetLat: 1000,
  //             assetLng: 1000,
  //             // assetLabel: "1,234,567,890,001"
  //             assetLabel: "996K",
  //           },
  //         ];

  //         async function forSettingLocation() {
  //           // setLocationsDone(true);
  //           let id = 1;
  //           const listSetting = value.map(async function (asset) {
  //             let price = asset.price / 1000; //won -> dollar
  //             let priceLabel = "";
  //             if (10000 > price && price >= 0) {
  //               priceLabel =
  //                 price
  //                   .toFixed()
  //                   .toString()
  //                   .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "K";
  //             } else if (price >= 10000) {
  //               priceLabel =
  //                 (price / 1000)
  //                   .toFixed(1)
  //                   .toString()
  //                   .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "M";
  //             } else {
  //               priceLabel = price.toString();
  //             }
  //             assetStateList = assetStateList.concat({
  //               assetId: asset.id,
  //               assetAddress: asset.buildingInformation.address,
  //               assetLat: 0,
  //               assetLng: 0,
  //               assetLabel: priceLabel,
  //             });
  //             id++;
  //             console.log(assetStateList);
  //             return id;
  //           });

  //           await Promise.all(listSetting).then((res) => console.log(`${res}`));

  //           const GoogleMapLocate = async (
  //             currentAddr: string,
  //             index: number
  //           ) => {
  //             await Geocode.fromAddress(currentAddr)
  //               .then((response) => {
  //                 const { lat, lng } = response.results[0].geometry.location;
  //                 assetStateList[index].assetLat = lat;
  //                 assetStateList[index].assetLng = lng;
  //                 return { lat, lng };
  //               })
  //               .catch((err) => console.log(err));
  //           };

  //           const geoSetting = value.map(async function (asset, index) {
  //             await GoogleMapLocate(
  //               asset.buildingInformation.address,
  //               index + 1
  //             );
  //             return index;
  //           });

  //           await Promise.all(geoSetting).then((res) => console.log(`${res}`));

  //           await setLocations(assetStateList);
  //         }

  //         forSettingLocation();
  //       }
  //     );
  //   }
  //   wholeFunction();
  // }, []);

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
        <SearchBar>
          <SearchWindow value={searchValue} onChange={(e:any)=>(setSearchValue(e.target.value))} placeholder="Las Vegas, NV" />
          <SearchButton>Home Type</SearchButton>
          <SearchButton onClick={() => setBBOption(true)}>
            Bed & Baths
          </SearchButton>
          <SearchButton>More</SearchButton>
          <SearchButton>Save Search</SearchButton>
        </SearchBar>
        {bbOption ? (
          <BBOptionContainer>
            <NumberSelectContainer>
              <NumberButton style={{ borderLeft: "1px solid black" }}>
                방
              </NumberButton>
              {roomNumber.map((value, index) => (
                <>
                  {roomState == index ? (
                    <NumberButton
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      {value}+
                    </NumberButton>
                  ) : (
                    <NumberButton onClick={() => setRoomState(index)}>
                      {value}+
                    </NumberButton>
                  )}
                </>
              ))}
            </NumberSelectContainer>
            <NumberSelectContainer style={{ marginBottom: "18px" }}>
              <NumberButton style={{ borderLeft: "1px solid black" }}>
                화
              </NumberButton>
              {roomNumber.map((value, index) => (
                <>
                  {bathroomState == index ? (
                    <NumberButton
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      {value}+
                    </NumberButton>
                  ) : (
                    <NumberButton onClick={() => setBathroomState(index)}>
                      {value}+
                    </NumberButton>
                  )}
                </>
              ))}
            </NumberSelectContainer>
            <div style={{ width: "100%", float: "right", textAlign: "right" }}>
              <SaveButton onClick={() => setBBOption(false)}>Save</SaveButton>
            </div>
          </BBOptionContainer>
        ) : (
          <></>
        )}
        {locations[0]?
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
        ></GoogleMap>:<><div style={{margin:"50px"}}>검색 결과가 없습니다!</div></>}
      </MapContainer>
      <AssetContainer>
        <AssetTitle>Beverly Hills, CA Homes for Sale & Real Estate</AssetTitle>
        <PriceControl>
          <PriceTitle style={{ paddingTop: "20px", paddingLeft: "30px" }}>
            Purchase price
          </PriceTitle>
          {/* <RangeSliders /> */}
        </PriceControl>
        {fullAsset[0] ? <>
        {fullAsset[0].buildingInformation.address == '' ? <></> :
        <DoubleRangeSlider assetData={fullAsset} />}</>:<></>}
        {/* {assets.map((asset) => (
          <AssetCard data={asset} />
        ))} */}
      </AssetContainer>
    </Container>
  );
};

const SearchBar = styled.div`
  display: flex;
  width: 100%;
  height: 66px;
  background-color: white;
  padding-left: 33px;
  padding-top: 17px;
  padding-bottom: 17px;
  font-family: Poppins;
`;

const SearchWindow = styled.input`
  width: 307px;
  height: 32px;
  padding-left: 18px;
  font-size: 12px;
  color: #9a9292;
`;

const SearchButton = styled.button`
  border: 1px solid black;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 12px;
  color: black;
  margin-left: 22px;
  font-weight: 500;
  background-color: white;
`;

const BBOptionContainer = styled.div`
  position: fixed;
  z-index: 10;
  left: 470px;
  width: 285px;
  height: 185px;
  background-color: #e9e9e9;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 27px;
  font-size: 14px;
  font-weight: 700;
`;

const NumberSelectContainer = styled.div`
  height: 42px;
  width: auto;
  display: flex;
  margin-bottom: 20px;
`;

const NumberButton = styled.button`
  width: 42px;
  height: 42px;
  border: 1px solid black;
  border-left: 0;
  background-color: white;
`;

const SaveButton = styled.button`
  width: 81px;
  height: 25px;
  background-color: black;
  color: white;
  font-weight: bold;
  border: 0;
  border-radius: 5px;
  align-items: right;
`;

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
