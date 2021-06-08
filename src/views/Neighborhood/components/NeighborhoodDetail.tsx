import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NeighborhoodItem from "../../../model/NeighborhoodItem";
import GetNeighborhoodList from "../../../domain/GetNeighborhoodList";
import { RouteComponentProps, useHistory } from "react-router";

interface MatchParams {
  regionName: string;
}

const NeighborhoodDetail = ({ match }: RouteComponentProps<MatchParams>) => {
  const [neighborhoodItem, setNeighborhoodItem] = useState<NeighborhoodItem>();
  const history = useHistory();
  console.log("match.params:", match.params.regionName);
  const onClickGoToSaleButton = (e: any) => {
    if (e) e.preventDefault();

    // history.push('/asset/assetList');
    history.push("/asset/assetList", match.params.regionName);
  };
  useEffect(() => {
    let regionName = match.params.regionName;
    let item = GetNeighborhoodList.getById(regionName)[0];
    setNeighborhoodItem(item);
  }, []);

  return (
    <Container>
      <State>{neighborhoodItem?.state}</State>
      <RegionName>{neighborhoodItem?.regionName}</RegionName>
      <ImageContainer background={neighborhoodItem?.thumbnailUrl} />
      <Intro>{neighborhoodItem?.intro}</Intro>
      <GoToSaleButton onClick={onClickGoToSaleButton}>
        Homes for Sale in {neighborhoodItem?.regionName}
      </GoToSaleButton>
      <Map>
        NEIGHBORHOOD OVERVIEW
        <MapContainer />
      </Map>
      <Attributes>
        <BoldTitle>Attributes</BoldTitle>
        {neighborhoodItem?.attribute}
      </Attributes>
      <Slogan>
        <ItalicTitle>{neighborhoodItem?.regionName}:</ItalicTitle>
        <Summary>{neighborhoodItem?.slogan}</Summary>
        <Detail>{neighborhoodItem?.sloganMore}</Detail>
      </Slogan>
      <WhatToExpect>
        <ItalicTitle>What To Expect:</ItalicTitle>
        <Summary>{neighborhoodItem?.whatToExpect}</Summary>
        <Detail>{neighborhoodItem?.whatToExpectMore}</Detail>
      </WhatToExpect>
      <LifeStyle>
        <ItalicTitle>The Lifestyle:</ItalicTitle>
        <Summary>{neighborhoodItem?.lifeStyle}</Summary>
        <Detail>{neighborhoodItem?.lifeStyleMore}</Detail>
      </LifeStyle>
      <UnexpectedAppeal>
        <ItalicTitle>Unexpected Appeal</ItalicTitle>
        <Summary>{neighborhoodItem?.unexpectedAppeal}</Summary>
        <Detail>{neighborhoodItem?.unexpectedAppealDetail}</Detail>
      </UnexpectedAppeal>
      <Market>
        <ItalicTitle>The Market:</ItalicTitle>
        <Summary>{neighborhoodItem?.market}</Summary>
        <Detail>{neighborhoodItem?.marketDetail}</Detail>
      </Market>
      <FallInLove>
        <ItalicTitle>You'll Fall In Love With:</ItalicTitle>
        <Summary>{neighborhoodItem?.fallInLoveWith}</Summary>
        <Detail>{neighborhoodItem?.fallInLoveWithDetail}</Detail>
      </FallInLove>
    </Container>
  );
};

const Container = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;

  margin-bottom: 200px;
`;

const State = styled.div`
  font-size: 20px;
`;

const RegionName = styled.div`
  margin-top: 50px;
  font-size: 48px;
  font-weight: bold;
`;

const ImageContainer: any = styled.div`
  width: 1000px;
  height: 800px;
  background: url(${(props: any) => props.background});
  background-size: cover;
  margin-top: 30px;
`;

const Intro = styled.div`
  margin-top: 30px;
  font-size: 20px;
`;

const Map = styled.div`
  margin-top: 50px;
  font-weight: bold;
  font-size: 24px;
`;

const MapContainer = styled.div`
  width: 1000px;
  height: 600px;
  background-color: grey;
  margin-top: 20px;
`;

const Attributes = styled.div`
  margin-top: 50px;
  font-size: 20px;
`;

const BoldTitle = styled.div`
  font-weight: bold;
`;

const Slogan = styled.div`
  margin-top: 50px;
  font-size: 20px;
`;

const ItalicTitle = styled.div`
  font-style: italic;
  font-size: 24px;
`;

const WhatToExpect = styled.div`
  margin-top: 70px;
  font-size: 20px;
`;

const LifeStyle = styled.div`
  margin-top: 70px;
  font-size: 20px;
`;

const UnexpectedAppeal = styled.div`
  margin-top: 70px;
  font-size: 20px;
`;

const Market = styled.div`
  margin-top: 70px;
  font-size: 20px;
`;

const FallInLove = styled.div`
  margin-top: 70px;
  font-size: 20px;
`;

const Summary = styled.div`
  margin-top: 10px;
  font-style: italic;
`;

const Detail = styled.div`
  margin-top: 15px;
  font-size: 22px;
`;

const GoToSaleButton = styled.button`
  width: 400px;
  height: 50px;
  color: #ffffff;
  background-color: blue;
  font-size: 20px;
  font-weight: bold;

  margin-top: 40px;
  cursor: pointer;
`;

export default NeighborhoodDetail;
