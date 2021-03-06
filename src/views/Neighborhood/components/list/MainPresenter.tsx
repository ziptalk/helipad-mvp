import styled from "styled-components";
import NeighborhoodItem from "../../../../model/NeighborhoodItem";
import { Link } from "react-router-dom";
import { ReactComponent as LineSvg } from "../../../../images/Neighborhood/ic_lineImg.svg";
import { ReactComponent as readMoreSvg } from "../../../../images/Neighborhood/ic_readMore.svg";

import LazyLoadingImg from "../../../../components/LazyLoadingImg";
import "react-lazy-load-image-component/src/effects/opacity.css";
type NeighborhoodProps = {
  order: number;
  neighborhood: NeighborhoodItem;
};

const MainPresenter = ({ order, neighborhood }: NeighborhoodProps) => {
  console.log("MainPresenter");
  const { thumbnailUrl, state, regionName, intro } = neighborhood;
  return (
    <>
      {order % 2 === 0 ? (
        <Container>
          {/* <Thumbnail thumbnail={thumbnailUrl}></Thumbnail> */}
          <LazyLoadingImg thumbnailUrl={thumbnailUrl}></LazyLoadingImg>
          <ContentContainer>
            <Content>
              <StateBlock>
                <StateIcon />
                <State>{state}</State>
              </StateBlock>
              <RegionName>{regionName}</RegionName>
              <Intro>{intro}</Intro>
              <ReadMoreButton
                to={"/asset/neighborhoodInfo/" + neighborhood.regionName}
              >
                <ReadMore />
              </ReadMoreButton>
            </Content>
          </ContentContainer>
        </Container>
      ) : (
        <Container>
          <ContentContainer>
            <Content>
              <StateBlock>
                <StateIcon />
                <State>{state}</State>
              </StateBlock>
              <RegionName>{regionName}</RegionName>
              <Intro>{intro}</Intro>
              <ReadMoreButton
                to={"/asset/neighborhoodInfo/" + neighborhood.regionName}
              >
                <ReadMore />
              </ReadMoreButton>
            </Content>
          </ContentContainer>
          {/* <Thumbnail thumbnail={thumbnailUrl}></Thumbnail> */}
          <LazyLoadingImg thumbnailUrl={thumbnailUrl}></LazyLoadingImg>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  max-width: 1904px;
  width: 100vw;
  display: flex;
  color: black;
`;

const ContentContainer = styled.div`
  flex: 1;
  width: 50%;
  position: relative;
`;
const Content = styled.div`
  /* width: 854px; */
  width: 55%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: -40% 0 0 -27.5%;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    width: 65%;
  }
  /* margin-top: 95px;
  margin-left: 106px; */
`;
const StateBlock = styled.div`
  display: flex;
  align-items: center;
`;
const StateIcon = styled(LineSvg)``;
const State = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  margin-left: 15px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 14px;
    line-height: 20px;
  }
`;
const RegionName = styled.div`
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: 96px;
  letter-spacing: -2px;
  text-align: left;
  margin-bottom: 15px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 32px;
    line-height: 50px;
  }
`;
const Intro = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  width: 90%;
  margin-bottom: 29px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 14px;
    line-height: 20px;
  }
`;
const ReadMoreButton = styled(Link)`
  background-color: white;
  border: none;
  outline: none;
`;
const ReadMore = styled(readMoreSvg)`
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    width: 100px;
  }
`;
const MainHeaderBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 286px;
  padding-top: 30px;
`;
const MainTitle = styled.div`
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: 90px;
  letter-spacing: -2px;
  text-align: left;
  margin-left: 212px;
`;
const MainSubTitle = styled.div`
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: 0px;
  text-align: left;
  margin-left: 45px;
  padding-top: 17px;
`;
export default MainPresenter;
