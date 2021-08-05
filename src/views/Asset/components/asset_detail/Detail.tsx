import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import Asset from "../../../../model/Asset";
import Contact from "./Contact";
import Amenities from "./Amenties";
import Location from "./Location";
import BuildingInfo from "./BuiildingInfo";
import InvestmentProfile from "./InvestmentProfile";
import SchoolNearby from "./SchoolNearby";
import SchoolNearBy2 from "./SchoolNearBy/SchoolNearBy2";
import IDontKnow from "./IDontKnow";
import Neighborhood from "./Neighborhood";
import Footer from "../../../../components/Footer";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
import {
  AiOutlinePlayCircle,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { BsGrid, BsMap } from "react-icons/bs";
import { BiArrowToLeft, BiArrowToRight, BiStreetView } from "react-icons/bi";
import { Md3DRotation } from "react-icons/md";
import Modal from "./modal";
import GoogleMap from "../../../../shared/GoogleMapPrivate";
import Geocode from "react-geocode";
import User from "../../../../model/User";
type DetailProps = {
  data: Asset;
};
// type User = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   isAgent: boolean;
// };
const Detail: React.FC<DetailProps> = ({ data }) => {
  const { userInfo } = useContext(AuthContext);
  console.log(userInfo?.isAgent);
  const [categoryClick, setCategoryClick] = useState(0);
  const [viewallOpen, setViewallOpen] = useState(false);
  const [popupClick, setPopupClick] = useState(0);
  const [clickImage, setClickImage] = useState(-1);
  const [locations, setLocations] = useState({
    assetId: "",
    assetAddress: "",
    assetLat: 1000,
    assetLng: 1000,
    assetLabel: "1,234,567,890,001",
  });

  const tmpImages = [
    data.buildingInformation.thumbnail,
    data.buildingInformation.thumbnail,
    data.buildingInformation.thumbnail,
    data.buildingInformation.thumbnail,
    data.buildingInformation.thumbnail,
    data.buildingInformation.thumbnail,
  ];

  console.log("data :", data);
  const virtualTourLink = data.buildingInformation.virtualTour;

  useEffect(() => {
    var tmpPart = [0, 1];

    async function innerFunction() {
      async function wholeFunction() {
        var tmpMap = [1, 2];
        let assetState = {
          assetId: "",
          assetAddress: "",
          assetLat: 1000,
          assetLng: 1000,
          // assetLabel: "1,234,567,890,001"
          assetLabel: "996K",
        };

        async function forSettingLocation() {
          let priceLabel = "";
          let price = data.price / 1000; //won -> dollar
          if (1000000 > price && price >= 1000) {
            priceLabel =
              (price / 1000)
                .toFixed(0)
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "K";
          } else if (price >= 1000000) {
            priceLabel =
              (price / 1000000)
                .toFixed(1)
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "M";
          } else {
            priceLabel = price.toString();
          }
          assetState = {
            assetId: data.id,
            assetAddress: data.buildingInformation.address,
            assetLat: 0,
            assetLng: 0,
            assetLabel: priceLabel,
          };
          console.log("hello");

          const GoogleMapLocate = async (currentAddr: string) => {
            await Geocode.fromAddress(currentAddr)
              .then((response) => {
                const { lat, lng } = response.results[0].geometry.location;
                assetState.assetLat = lat;
                assetState.assetLng = lng;
                console.log(lat);
                console.log(lng);
                return { lat, lng };
              })
              .catch((err) => console.log(err));
          };

          // GoogleMapLocate(
          //   data.buildingInformation.address
          // );

          const geoSetting = tmpMap.map(async function (asset, index) {
            await GoogleMapLocate(data.buildingInformation.address);
            return assetState;
          });
          await Promise.all(geoSetting).then((res) => console.log(`${res}`));

          await setLocations(assetState);
          // await Promise.all(listSetting).then((res) => console.log(`${res}`));
        }

        forSettingLocation();
      }

      const wholePart = tmpPart.map((tmp) => {
        wholeFunction();
      });
      await Promise.all(wholePart).then((res) => console.log(`${res}`));
    }
    innerFunction();
  }, [popupClick]);

  const mapPopupOnClick = () => {
    var tmpPart = [0, 1];

    async function innerFunction() {
      async function wholeFunction() {
        var tmpMap = [1, 2];
        let assetState = {
          assetId: "",
          assetAddress: "",
          assetLat: 1000,
          assetLng: 1000,
          // assetLabel: "1,234,567,890,001"
          assetLabel: "996K",
        };

        async function forSettingLocation() {
          let priceLabel = "";
          assetState = {
            assetId: data.id,
            assetAddress: data.buildingInformation.address,
            assetLat: 0,
            assetLng: 0,
            assetLabel: priceLabel,
          };
          console.log("hello");

          const GoogleMapLocate = async (currentAddr: string) => {
            await Geocode.fromAddress(currentAddr)
              .then((response) => {
                const { lat, lng } = response.results[0].geometry.location;
                assetState.assetLat = lat;
                assetState.assetLng = lng;
                console.log(lat);
                console.log(lng);
                return { lat, lng };
              })
              .catch((err) => console.log(err));
          };

          // GoogleMapLocate(
          //   data.buildingInformation.address
          // );

          const geoSetting = tmpMap.map(async function (asset, index) {
            await GoogleMapLocate(data.buildingInformation.address);
            return assetState;
          });
          await Promise.all(geoSetting).then((res) => console.log(`${res}`));

          await setLocations(assetState);
          // await Promise.all(listSetting).then((res) => console.log(`${res}`));
        }

        forSettingLocation();
      }

      const wholePart = tmpPart.map((tmp) => {
        wholeFunction();
      });
      await Promise.all(wholePart).then((res) => console.log(`${res}`));
    }
    innerFunction();
  };

  const categoryOnClick = (state: number) => {
    setCategoryClick(state);
  };

  const popupOnClick = (state: number) => {
    setPopupClick(state);
    setViewallOpen(true);
    console.log(data);
  };

  const closeViewall = () => {
    setViewallOpen(false);
  };

  const openViewall = () => {
    setViewallOpen(true);
  };
  return (
    <Container>
      <Body>
        <LeftBody>
          <Category>
            <CategoryTitle>
              {categoryClick == 0 ? (
                <CategoryItem
                  style={{
                    boxShadow: "inset 0px -3px 0px #B69142",
                    color: "black",
                  }}
                  onClick={() => categoryOnClick(0)}
                >
                  Location
                </CategoryItem>
              ) : (
                <CategoryItem onClick={() => categoryOnClick(0)}>
                  Location
                </CategoryItem>
              )}
              {categoryClick == 1 ? (
                <CategoryItem
                  style={{
                    boxShadow: "inset 0px -3px 0px #B69142",
                    color: "black",
                  }}
                  onClick={() => categoryOnClick(1)}
                >
                  Schools
                </CategoryItem>
              ) : (
                <CategoryItem onClick={() => categoryOnClick(1)}>
                  Schools
                </CategoryItem>
              )}
              {categoryClick == 2 ? (
                <CategoryItem
                  style={{
                    boxShadow: "inset 0px -3px 0px #B69142",
                    color: "black",
                  }}
                  onClick={() => categoryOnClick(2)}
                >
                  Similar Homes
                </CategoryItem>
              ) : (
                <CategoryItem onClick={() => categoryOnClick(2)}>
                  Similar Homes
                </CategoryItem>
              )}
            </CategoryTitle>
            {/* <InformationTitle>
            Information
          </InformationTitle> */}
          </Category>
          <Thumbnail src={data.buildingInformation.thumbnail} />
          {virtualTourLink && (
            <VirtualTourButton href={virtualTourLink}>
              <AiOutlinePlayCircle
                style={{ paddingRight: "10", fontSize: "32" }}
              />
              Virtual Tour
            </VirtualTourButton>
          )}
          <UnderBarContainer>
            <ImageContainer>
              <button
                style={{
                  border: "0",
                  width: "5%",
                  fontSize: "20px",
                  fontWeight: 700,
                  backgroundColor: "transparent",
                }}
              >
                〈
              </button>
              <button
                style={{
                  backgroundImage: `url("${data.buildingInformation.thumbnail}")`,
                  width: "18%",
                  backgroundSize: "100% 100%",
                  border: "0",
                }}
              >
                {/* <div style={{width:"100%", height:"100%",backdropFilter:"brightness(1.3)"}}/> */}
              </button>
              <button
                style={{
                  backgroundImage: `url("${data.buildingInformation.thumbnail}")`,
                  width: "18%",
                  backgroundSize: "100% 100%",
                  border: "0",
                  filter: "brightness(0.7)",
                }}
              ></button>
              <button
                style={{
                  backgroundImage: `url("${data.buildingInformation.thumbnail}")`,
                  width: "18%",
                  backgroundSize: "100% 100%",
                  border: "0",
                  filter: "brightness(0.7)",
                }}
              ></button>
              <button
                style={{
                  backgroundImage: `url("${data.buildingInformation.thumbnail}")`,
                  width: "18%",
                  backgroundSize: "100% 100%",
                  border: "0",
                  filter: "brightness(0.7)",
                }}
              ></button>
              <button
                style={{
                  border: "0",
                  width: "5%",
                  fontSize: "20px",
                  fontWeight: 700,
                  backgroundColor: "transparent",
                }}
              >
                〉
              </button>
            </ImageContainer>
            <ButtonContainer style={{ border: "1px solid #EAEAEA" }}>
              <button
                onClick={() => popupOnClick(0)}
                style={{
                  width: "23%",
                  border: "0",
                  backgroundColor: "transparent",
                }}
              >
                <BsGrid style={{ width: "20px", height: "20px" }} />
                <div>View All</div>
              </button>
              <button
                onClick={() => popupOnClick(1)}
                style={{
                  width: "23%",
                  border: "0",
                  backgroundColor: "transparent",
                }}
              >
                <BsMap style={{ width: "20px", height: "20px" }} />
                <div>Map</div>
              </button>
              <button
                onClick={() => popupOnClick(2)}
                style={{
                  width: "23%",
                  border: "0",
                  backgroundColor: "transparent",
                }}
              >
                <BiStreetView style={{ width: "20px", height: "20px" }} />
                <div>Street View</div>
              </button>
              <button
                onClick={() => popupOnClick(3)}
                style={{
                  width: "23%",
                  border: "0",
                  backgroundColor: "transparent",
                }}
              >
                <Md3DRotation style={{ width: "20px", height: "20px" }} />
                <div>Virtual Tour</div>
              </button>
            </ButtonContainer>
          </UnderBarContainer>
          <Modal
            open={viewallOpen}
            close={closeViewall}
            header={
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <PopupCategoryContainer>
                  {popupClick == 0 ? (
                    <PopupCategoryButton
                      style={{ backgroundColor: "white", color: "#212121" }}
                    >
                      View all
                    </PopupCategoryButton>
                  ) : (
                    <PopupCategoryButton
                      onClick={() => {
                        setPopupClick(0);
                      }}
                    >
                      View all
                    </PopupCategoryButton>
                  )}
                  {popupClick == 1 ? (
                    <PopupCategoryButton
                      style={{ backgroundColor: "white", color: "#212121" }}
                    >
                      Map
                    </PopupCategoryButton>
                  ) : (
                    <PopupCategoryButton
                      onClick={() => {
                        setPopupClick(1);
                      }}
                    >
                      Map
                    </PopupCategoryButton>
                  )}
                  {popupClick == 2 ? (
                    <PopupCategoryButton
                      style={{ backgroundColor: "white", color: "#212121" }}
                    >
                      Street View
                    </PopupCategoryButton>
                  ) : (
                    <PopupCategoryButton
                      onClick={() => {
                        setPopupClick(2);
                      }}
                    >
                      Street View
                    </PopupCategoryButton>
                  )}
                  {popupClick == 3 ? (
                    <PopupCategoryButton
                      style={{ backgroundColor: "white", color: "#212121" }}
                    >
                      Virtual Tour
                    </PopupCategoryButton>
                  ) : (
                    <PopupCategoryButton
                      onClick={() => {
                        setPopupClick(3);
                      }}
                    >
                      Virtual Tour
                    </PopupCategoryButton>
                  )}
                </PopupCategoryContainer>
              </div>
            }
          >
            <div style={{ width: "100%" }}>
              {popupClick == 0 ? (
                <div style={{ marginLeft: "30px" }}>
                  <div style={{ display: "flex" }}>
                    <div>{data.buildingInformation.address}</div>
                    <div style={{ marginLeft: "20px" }}>${data.price}</div>
                    <div style={{ marginLeft: "20px" }}>
                      {data.buildingInformation.nBedrooms} Beds
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                      {data.buildingInformation.nBathrooms} Baths
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                      {data.buildingInformation.square} Square
                    </div>
                  </div>

                  <div>
                    {clickImage == -1 ? (
                      <>
                        {tmpImages.map((tmpImage, index) => (
                          <img
                            onClick={() => {
                              setClickImage(index);
                            }}
                            src={tmpImage}
                            style={{ width: "500px", margin: "30px 30px 0 0" }}
                          />
                        ))}{" "}
                      </>
                    ) : (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <ArrowButton
                            onClick={() => {
                              if (clickImage > 0) {
                                var tmpClick = clickImage - 1;
                                setClickImage(tmpClick);
                              }
                            }}
                          >
                            <AiOutlineArrowLeft />
                          </ArrowButton>
                          <BigPicture src={tmpImages[clickImage]} />
                          <ArrowButton
                            onClick={() => {
                              if (clickImage < 5) {
                                var tmpClick = clickImage + 1;
                                setClickImage(tmpClick);
                              }
                            }}
                          >
                            <AiOutlineArrowRight />
                          </ArrowButton>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <ImageContainer2>
                            <button
                              style={{
                                border: "0",
                                width: "5%",
                                fontSize: "20px",
                                fontWeight: 700,
                                backgroundColor: "transparent",
                              }}
                            >
                              〈
                            </button>
                            {tmpImages.map((tmpImage, index) => (
                              <>
                                {index == clickImage ? (
                                  <button
                                    onClick={() => {
                                      setClickImage(index);
                                    }}
                                    style={{
                                      backgroundImage: `url("${tmpImage}")`,
                                      width: "12%",
                                      backgroundSize: "100% 100%",
                                      border: "0",
                                    }}
                                  ></button>
                                ) : (
                                  <button
                                    onClick={() => {
                                      setClickImage(index);
                                    }}
                                    style={{
                                      backgroundImage: `url("${tmpImage}")`,
                                      width: "12%",
                                      backgroundSize: "100% 100%",
                                      border: "0",
                                      filter: "brightness(0.5)",
                                    }}
                                  ></button>
                                )}
                              </>
                            ))}
                            <button
                              style={{
                                border: "0",
                                width: "5%",
                                fontSize: "20px",
                                fontWeight: 700,
                                backgroundColor: "transparent",
                              }}
                            >
                              〉
                            </button>
                          </ImageContainer2>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "30px",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "20px",
                              color: "#B69142",
                              marginRight: "5px",
                            }}
                          >
                            {clickImage + 1}
                          </div>
                          <div style={{ fontSize: "18px", color: "#A3A3A3" }}>
                            of
                          </div>
                          <div
                            style={{
                              fontSize: "20px",
                              color: "#212121",
                              marginLeft: "5px",
                            }}
                          >
                            {tmpImages.length}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  {popupClick == 1 ? (
                    <div>
                      <MapContainer>
                        <GoogleMap
                          bootstrapURLKeys={{
                            key: "AIzaSyAHHYSWgQGMPHXYRqCMMUSlxTvqrDepyeA",
                          }}
                          defaultZoom={15}
                          defaultCenter={{ lat: 0, lng: 0 }}
                          // data={assets}
                          data={locations}
                          // data = {assets}
                        ></GoogleMap>
                      </MapContainer>
                    </div>
                  ) : (
                    <>
                      <div>Preparing the service.</div>
                    </>
                  )}
                </>
              )}
            </div>
          </Modal>
          <Information>{data.information}</Information>
          <Amenities data={data.amenities} />
          <Location address={data.buildingInformation.street} data={data} />
          <BuildingInfo buildingInformation={data.buildingInformation} />
          <InvestmentProfile data={data} />
          <SchoolNearby />

          <IDontKnow />
          <Neighborhood />
        </LeftBody>
        {userInfo?.isAgent === false && (
          <RightBody>
            <Category>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  paddingTop: "10px",
                  color: "#212121",
                }}
              >
                Information
              </div>
            </Category>
            <StatusContainer>
              <Status>
                <StatusItem>
                  <StatusCategory>Status</StatusCategory>
                  <StatusContent>{data.status}</StatusContent>
                </StatusItem>
                <StatusItem>
                  <StatusCategory>Days on Market</StatusCategory>
                  <StatusContent>{data.daysOnMarket}</StatusContent>
                </StatusItem>

                <StatusItem>
                  <StatusCategory>Estimated Property Tax</StatusCategory>
                  <StatusContent>{data.taxPerMonth}</StatusContent>
                </StatusItem>
                <StatusItem>
                  <StatusCategory>HOA Fees</StatusCategory>
                  <StatusContent>{data.hoaFee} / month</StatusContent>
                </StatusItem>
                <StatusItem>
                  <StatusCategory>Lot Size</StatusCategory>
                  <StatusContent>{data.lotSize} SF</StatusContent>
                </StatusItem>
                <StatusItem>
                  <StatusCategory>MLS Type</StatusCategory>
                  <StatusContent>{data.mlsType}</StatusContent>
                </StatusItem>
                <StatusItem>
                  <StatusCategory>Year Built</StatusCategory>
                  <StatusContent>
                    {data.buildingInformation.yearBuilt}
                  </StatusContent>
                </StatusItem>
                {/* <StatusItem>
                <StatusCategory>Country</StatusCategory>
                <StatusContent>
                  {data.buildingInformation.country}
                </StatusContent>
              </StatusItem> */}
                {/* <StatusItem>
                <StatusCategory>Expected monthly payment</StatusCategory>
                <StatusContent>${data.expectedMonthlyPayment}</StatusContent>
              </StatusItem> */}
              </Status>
            </StatusContainer>
            <Contact
              agent={data.agent}
              assetId={data.id}
              buildingInformation={data}
            />
          </RightBody>
        )}
      </Body>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 1904px;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Category = styled.div`
  // width: 1092px;
  width: 100%;
  // margin-left: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const CategoryTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CategoryItem = styled.button`
  font-size: 18px;
  width: 100%;
  height: 50px;
  border: 0;
  background-color: transparent;
  box-shadow: inset 0px -3px 0px #cfd4da;
  color: #cfd4da;
`;

const CategoryDivider = styled.div`
  border: 1px solid #000000;
`;

const InformationTitle = styled.div`
  width: 45%;
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
`;

const LeftBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const VirtualTourButton = styled.a`
  margin-top: 20px;
  width: 150px;
  height: 50px;
  color: black;
  border: 1px solid lightgray;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Thumbnail = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 624px;
`;

const Information = styled.div`
  margin-top: 25px;
`;

const RightBody = styled.div``;

const StatusContainer = styled.div`
  margin-bottom: 62px;
`;

const Status = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatusItem = styled.div`
  display: flex;
  flex-direction: row;

  font-size: 14px;
  border-bottom: 1px solid #e9e9e9;
  padding-top: 7px;
  padding-bottom: 7px;
`;

const StatusCategory = styled.div`
  // font-weight: bold;
  width: 260px;
  flex: 2.5;
`;

const StatusContent = styled.div`
  font-weight: 500;
  flex: 2.5;
`;

const UnderBarContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  width: 60%;
  height: 60px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const ImageContainer2 = styled.div`
  width: 900px;
  // height: 100%;
  height: 80px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  width: 40%;
  height: 60px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const PopupCategoryContainer = styled.div`
  width: 50%;
  height: 35px;
  margin-top: 15px;
  display: flex;
  // font-size: 15px;
  text-align: center;
  align-items: center;
`;

const PopupCategoryButton = styled.div`
  width: 23%;
  color: #a3a3a3;
  height: 100%;
  text-align: center;
  align-items: center;
  padding-top: 10px;
`;
const ArrowButton = styled.button`
  width: 10%;
  font-size: 50px;
  color: #777777;
  background-color: transparent;
  border: 0;
`;

const BigPicture = styled.img`
  width: 900px;
  margin-top: 30px;
`;

const MapContainer = styled.div`
  width: 80%;
  align-items: right;
  margin-left: 0px;
  // width: 60%;
  height: 100vh;
`;

export default Detail;
