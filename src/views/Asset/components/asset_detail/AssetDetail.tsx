import * as React from "react";
import styled from "styled-components";
import Summary from "./Summary";
import Asset from "../../../../model/Asset";
import BuildingInformation from "../../../../model/BuildingInformation"
import Detail from "./Detail";
import { RouteComponentProps } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import GetAsset from "../../../../domain/GetAsset";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
import ContactUseCase from "../../../../domain/ContactUseCase";
import $ from "jquery";

interface MatchParams {
  assetId: string;
}

const AssetDetail = ({ match }: RouteComponentProps<MatchParams>) => {
  console.log(match.params)
  let id = match.params.assetId;
  const { user, setHeaderMode } = useContext(AuthContext);
  const [asset, setAsset] = useState<Asset>(Asset.emptyAsset());

  useEffect(() => {
    setHeaderMode("black");

    // GetAsset.getAsset(id).then((value) => {
    //   setAsset(value);
    //   if (user != null) {
    //     ContactUseCase.getContactHistory(user.uid, value.agent).then(
    //       (value) => {
    //         console.log("get contact history");
    //       }
    //     );
    //   }
    //   window.scroll({ top: 0 });
    // });

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
          for (var i = 0; i < res.length; i++) {
            if(res[i].mlsId.toString() == match.params.assetId.toString()){
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
              amenitiesTmp = amenitiesTmp.split("/")
              console.log(amenitiesTmp)
              console.log(amenitiesTmp[0])

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
              if (1000 > price && price >= 0) {
                priceLabel =
                  price
                    .toFixed()
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "K";
              } else if (price >= 1000) {
                priceLabel =
                  (price / 1000)
                    .toFixed(1)
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "M";
              } else {
                priceLabel = price.toString();
              }
              setAsset(singleAsset)
            }
          }
        },
      });
    }

    main();



  }, []);

  return (
    <Container>
      {asset.amenities.length == 0 ? <></> : <>
      <Summary data={asset} />
      {/* <Divider /> */}
      <Detail data={asset} />
      </>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 1904px; */
  width: 100%;
`;

const Divider = styled.div`
  border: 1px solid #000000;
  // margin-top: 40px;
  margin-bottom: 40px;
`;

export default AssetDetail;
