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
  console.log("thumbnailUrl", thumbnailUrl);
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
  max-width: calc(1904px * 0.8);
  width: 80vw;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const RegionName = styled.div`
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: 96px;
  letter-spacing: -2px;
  height: 96px;
  margin: auto;
  margin-bottom: 30px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 50px;
    line-height: 70px;
  }
`;
const Thumbnail: any = styled.img.attrs((props: any) => ({
  src: props.thumbnail,
}))`
  margin-bottom: 58px;
  width: 100%;
  height: auto;
  max-height: 990px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    max-height: 600px;
  }
  /* background-image: url(${(props: any) =>
    props.thumbnail && props.thumbnail});

  background-repeat: no-repeat;
  background-position: center center; */
`;
const Intro = styled.div`
  max-width: 1904px;
  width: 100%;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 29px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 14px;
    line-height: 22px;
  }
`;
const SalesButton = styled.button`
  width: 387px;
  height: 60px;
  background: #b69142;
  border: none;
  cursor: pointer;
  margin-bottom: 60px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    width: 300px;
    height: 50px;
  }
`;
const ForSale = styled(ForSaleSvg)`
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    width: 280px;
  }
`;

export default HeaderPresenter;
