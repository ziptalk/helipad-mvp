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
                floor: res[i].property.stories, //stories??? ?????????.
                stories: res[i].property.stories,
                residences: 5, // ??? ??? ????????? ??? ?????????..?????????? ?????? ??? 5??? ???
                petPolicy: 'Pet Policy', //??????
                yearBuilt: res[i].property.yearBuilt,
                buildingAge: '', //?????? ?????? ?????? ?????? ?????? ??????..?
                buildingType: res[i].property.style, //?????? ???????????? ??????
                virtualTour: res[i].virtualTourUrl, // ??? ???????????? ???.
              }

              let amenitiesTmp = res[i].association.amenities
              amenitiesTmp = amenitiesTmp.split("/")
              console.log(amenitiesTmp)
              console.log(amenitiesTmp[0])

              singleAsset = {
                id: res[i].mlsId.toString(),
                agent: res[i].agent.contact.email, //agent??? ?????? ?????? ?????? ??? ???????????? ??????
                forInvestment: false, // ?????? ????????? ?????? ??????
                price: res[i].sales.closePrice, //listprice ??? ?????? closeprice??? ????????? ?????? ???????????????
                status: res[i].mls.status,
                daysOnMarket: res[i].mls.daysOnMarket,
                taxPerMonth: res[i].tax.taxYear/12, //taxYear??? ????????? ????????? 12???.
                minDownPymt: res[i].property.area/res[i].property.stories, //?????? ?????????. ?????? area ????????? ?????? ?????????
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
