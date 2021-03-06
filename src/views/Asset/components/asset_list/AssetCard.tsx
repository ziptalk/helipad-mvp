import React, { useState, useContext, useEffect } from "react";
import { Link, RouteComponentProps, useHistory } from "react-router-dom";
import "./AssetCard.css";
import Asset from "../../../../model/Asset";
import styled from "styled-components";
import { FaHelicopter } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
import { userStore } from "../../../../shared/Firebase";

type AssetCardProps = {
  data: Asset;
};

const AssetCard = ({ data }: AssetCardProps) => {
  const [mouseOver, setMouseOver] = useState(false);
  const [heart, setHeart] = useState(false);
  const [onGoing, setOnGoing] = useState(false);
  const [isAgent, setIsAgent] = useState(false);
  const { user } = useContext(AuthContext);

  async function getUserInfo() {
    if (user) {
      let contacts = await userStore.doc(user.uid.toString()).get();
      console.log(contacts);
      if (!contacts) {
        console.log("No such document!");
      } else {
        let dataResult = contacts.data();
        if (dataResult) {
          if (dataResult.isAgent != undefined) {
            console.log(dataResult.isAgent);
            setIsAgent(dataResult.isAgent);
          }
        }
        console.log("Document data:", contacts.data());
      }
    }
  }

  useEffect(() => {
    if (user) {
      getUserInfo();
    }
  }, []);

  const handlerMouseOver = (event: Event) => {
    if (mouseOver == false) {
      setMouseOver(true);
    }
  };

  const handlerMouseOut = (event: Event) => {
    if (mouseOver == true) {
      setMouseOver(false);
    }
  };

  const heartOnClick = () => {
    setHeart(!heart);
  };

  const onGoingOnClick = () => {
    setOnGoing(!onGoing);
  };

  return (
    <Container
      background={data.buildingInformation.thumbnail}
      onMouseEnter={handlerMouseOver}
      onMouseLeave={handlerMouseOut}
    >
      {mouseOver ? (
        <>
          <div
            style={{
              width: "100%",
              height: "100%",
              // marginTop: "-21px",
              //! marginTop: "5px",
              //! paddingTop: "0px",
              // background: "black",
            }}
          >
            <ContainerContent2>
              {/* <div style={{width:"100%", height:"30px"}}></div> */}

              <div
                style={{
                  // flex: "1",
                  display: "flex",
                  // alignItems: "right",
                  width: "100%",
                  // background: "red",
                  marginTop: "0px",

                  // height: "30px",
                }}
              >
                {isAgent ? (
                  <></>
                ) : (
                  <>
                    {heart ? (
                      <button
                        onClick={heartOnClick}
                        style={{
                          width: "32px",
                          height: "32px",
                          backgroundColor: "black",
                          borderRadius: "16px",
                          textAlign: "center",
                          alignItems: "center",
                          paddingTop: "6px",
                          marginLeft: "70%",
                          border: 0,
                        }}
                      >
                        <AiFillHeart
                          style={{ fontSize: "20px", color: "#EBB136" }}
                        />
                      </button>
                    ) : (
                      <button
                        onClick={heartOnClick}
                        style={{
                          width: "32px",
                          height: "32px",
                          backgroundColor: "black",
                          borderRadius: "16px",
                          textAlign: "center",
                          alignItems: "center",
                          paddingTop: "6px",
                          marginLeft: "70%",
                          border: 0,
                        }}
                      >
                        <AiFillHeart
                          style={{ fontSize: "20px", color: "white" }}
                        />
                      </button>
                    )}
                    {onGoing ? (
                      <button
                        onClick={onGoingOnClick}
                        style={{
                          width: "32px",
                          height: "32px",

                          borderRadius: "16px",
                          textAlign: "center",
                          alignItems: "center",
                          paddingTop: "6px",
                          marginLeft: "6px",
                          border: 0,
                        }}
                      >
                        <FaHelicopter
                          style={{ fontSize: "20px", color: "#EBB136" }}
                        />
                      </button>
                    ) : (
                      <button
                        onClick={onGoingOnClick}
                        style={{
                          width: "32px",
                          height: "32px",
                          backgroundColor: "black",
                          borderRadius: "16px",
                          textAlign: "center",
                          alignItems: "center",
                          paddingTop: "6px",
                          marginLeft: "6px",
                          border: 0,
                        }}
                      >
                        <FaHelicopter
                          style={{ fontSize: "20px", color: "white" }}
                        />
                      </button>
                    )}
                  </>
                )}
              </div>

              <Link
                to={`/asset/assetList/${data.id}`}
                style={{
                  textDecoration: "none",
                  // position: "relative",
                  // bottom: "50px",
                  // flex: "2",
                  // backgroundColor: "red",
                  height: "60%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    // position: "relative",
                    justifyContent: "space-between",
                    width: "100%",
                    // backgroundColor: "blue",
                    // height: "100%",
                    // maxHeight: "100%",
                    // marginTop: "-50px",
                    // marginTop: "50px",
                    // paddingTop: "30px",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      fontSize: "20px",
                      fontWeight: 800,
                      border: "0",
                    }}
                  >
                    ???
                  </button>

                  <button
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      fontSize: "20px",
                      fontWeight: 800,
                      border: "0",
                    }}
                  >
                    ???
                  </button>
                </div>
                <div
                  style={{
                    width: "100%",
                    // position: "absolute",
                    alignItems: "center",
                    textAlign: "center",
                    // background: "green",

                    // paddingTop: "30px",
                    // height: "50%",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontSize: "12px",
                      width: "72px",
                      height: "22px",
                      alignItems: "center",
                      textAlign: "center",
                      margin: "0 auto",
                      backgroundColor: "rgba( 0, 0, 0, 0.5 )",

                      // opacity: "0.5",
                      // marginBottom: "0px",
                      // paddingTop: "30px",
                    }}
                  >
                    01 of 01
                  </div>
                </div>
              </Link>
            </ContainerContent2>
          </div>
        </>
      ) : (
        <Link
          to={`/asset/assetList/${data.id}`}
          style={{ textDecoration: "none" }}
        >
          <ContainerGradient>
            <div>
              <ContainerContent>
                <LeftSide>
                  <PriceBlock>
                    <PriceDollar>
                      ${data.price.toLocaleString("en-US")}
                    </PriceDollar>
                  </PriceBlock>
                  <PlaceInfoBlock>
                    <StreetInfo>{data.buildingInformation.street}</StreetInfo>
                    <AddressInfo>
                      {data.buildingInformation.address}
                    </AddressInfo>
                  </PlaceInfoBlock>
                </LeftSide>
                <Divider />
                <RightSide>
                  <RoomInfoBlock>
                    <RoomInfo>
                      <RoomInfoNum>
                        {data.buildingInformation.nBedrooms}
                      </RoomInfoNum>
                      <div>Beds</div>
                    </RoomInfo>
                    <RoomInfo>
                      <RoomInfoNum>
                        {data.buildingInformation.nBathrooms}{" "}
                      </RoomInfoNum>
                      <div>Bath</div>
                    </RoomInfo>
                    <RoomInfo>
                      <RoomInfoNum>
                        {data.buildingInformation.square}
                      </RoomInfoNum>
                      <div>Sq m</div>
                    </RoomInfo>
                    <RoomInfo>
                      <RoomInfoNum>
                        {Math.round(data.buildingInformation.square / 3.3)}
                      </RoomInfoNum>
                      Pyung
                    </RoomInfo>
                  </RoomInfoBlock>
                </RightSide>
              </ContainerContent>
            </div>
          </ContainerGradient>
        </Link>
      )}
    </Container>
  );
};

const Container: any = styled.div`
  display: inline-block;
  justify-content: space-between;
  // width: 512px;
  // height: 353px;
  margin: 19px;
  width: 90%;
  height: 80%;
  // width: 100%;
  // max-width: 300px;

  background: url(${(props: any) => props.background});
  background-size: cover;
  background-repeat: no-repeat;

  text-decoration: none;
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
  // display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

const ContainerContent = styled.div`
  color: #ffffff;
  font-weight: 600;
  // font-size: 25px;
  font-size: 8px;
  display: flex;
  padding: 20px 20px;
  vertical-align: bottom;
  // position: relative;
  // top:100px;
  // margin-top:60px;
  padding-top: 140px;
  // padding-bottom:20px;
`;
const ContainerContent2 = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  color: #ffffff;
  height: 100%;
  width: 100%;
  font-weight: 600;
  // font-size: 25px;
  font-size: 8px;
  padding: 20px 20px;
  // padding-top:17px;
`;
const LeftSide = styled.div`
  width: 60%;
`;
const PriceBlock = styled.div`
  // font-size: 22px;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 2px;
`;
const PriceDollar = styled.div`
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 16px;
  }
`;
const PriceWon = styled.div``;
const PlaceInfoBlock = styled.div`
  // font-size: 15px;
  font-size: 10px;
  // -webkit-transform:scale(0.9);
  font-weight: 500;
  padding: 0px 0;
`;
const StreetInfo = styled.div`
  font-size: 12px;
  font-weight: 400;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 10px;
  }
`;
const AddressInfo = styled.div`
  font-size: 12px;
  font-weight: 400;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 10px;
  }
`;

const Divider = styled.div`
  border-right: 0px solid #ffffff;
  margin: 0px 20px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    margin: 5px;
  }
`;

const RightSide = styled.div`
  width: 35%;
`;
const RoomInfoBlock = styled.div`
  // font-size: 18px;
  font-size: 9px;
  font-weight: 400;
`;
const RoomInfo = styled.div`
  margin: 5px 0;
  text-decoration: none;
  display: flex;
  font-weight: 300;
  font-size: 10px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    margin: 3px 0px;
  }
`;

const RoomInfoNum = styled.div`
  width: 30px;
  font-size: 10px;
  font-weight: 500;
`;

export default AssetCard;
