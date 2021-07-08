import styled from "styled-components";
import NeighborhoodItem from "../../../../model/NeighborhoodItem";
import { ReactComponent as ForSaleSvg } from "../../../../images/Neighborhood/ic_forSaleIcon.svg";
type HeaderPresenterProps = {
  regionInfo: NeighborhoodItem;
  onClickHomesForSale: (event: any) => void;
};
const HeaderPresenter = ({
  regionInfo,
  onClickHomesForSale,
}: HeaderPresenterProps) => {
  const { regionName, thumbnailUrl, intro } = regionInfo;

  return (
    <Container>
      <Content>
        <RegionName>{regionName}</RegionName>
        <Thumbnail thumbnail={thumbnailUrl} />
        <Intro>{intro}</Intro>
        <SalesButton onClick={onClickHomesForSale}>
          <ForSale />
        </SalesButton>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 1496px; */
  height: 1260px;
`;
const RegionName = styled.div`
  font-family: Poppins;
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: 96px;
  letter-spacing: -2px;
  height: 96px;
  margin: auto;
  margin-bottom: 30px;
`;
const Thumbnail: any = styled.div`
  width: 80%;
  height: 880px;
  margin-bottom: 58px;
  background: url(${(props: any) => props.thumbnail});
  background-size: cover;
`;
const Intro = styled.div`
  width: 80%;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 29px;
`;
const SalesButton = styled.button`
  width: 387px;
  height: 60px;
  background: #b69142;
  border: none;
  cursor: pointer;
  margin-bottom: 60px;
`;
const ForSale = styled(ForSaleSvg)``;

export default HeaderPresenter;
