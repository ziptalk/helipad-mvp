import styled from "styled-components";
import NeighborhoodItem from "../../../../model/NeighborhoodItem";
import { Link } from "react-router-dom";
import { ReactComponent as LineSvg } from "../../../../images/Neighborhood/ic_lineImg.svg";
import { ReactComponent as readMoreSvg } from "../../../../images/Neighborhood/ic_readMore.svg";
type NeighborhoodProps = {
  order: number;
  neighborhood: NeighborhoodItem;
};

const MainPresenter = ({ order, neighborhood }: NeighborhoodProps) => {
  const { thumbnailUrl, state, regionName, intro } = neighborhood;
  return (
    <>
      {order % 2 === 0 ? (
        <Container>
          <Thumbnail thumbnail={thumbnailUrl}></Thumbnail>
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
        </Container>
      ) : (
        <Container>
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
          <Thumbnail thumbnail={thumbnailUrl}></Thumbnail>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  color: black;
`;
const Thumbnail: any = styled.div`
  width: 960px;
  height: 880px;
  background: url(${(props: any) => props.thumbnail});
  background-size: cover;
  text-decoration: none;
`;
const Content = styled.div`
  width: 854px;
  margin-top: 95px;
  margin-left: 106px;
`;
const StateBlock = styled.div`
  display: flex;
  align-items: center;
`;
const StateIcon = styled(LineSvg)``;
const State = styled.div`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  margin-left: 15px;
`;
const RegionName = styled.div`
  font-family: Poppins;
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: 96px;
  letter-spacing: -2px;
  text-align: left;
`;
const Intro = styled.div`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  width: 643px;
  margin-bottom: 29px;
`;
const ReadMoreButton = styled(Link)`
  background-color: white;
  border: none;
  outline: none;
`;
const ReadMore = styled(readMoreSvg)``;

export default MainPresenter;