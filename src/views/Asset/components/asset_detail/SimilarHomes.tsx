import styled from "styled-components";
import { Link } from "react-router-dom";
import similarHomes1 from "../../../../images/AssetDetail_similarHomes/similarHomes1.jpg";
import similarHomes2 from "../../../../images/AssetDetail_similarHomes/similarHomes2.jpg";
import similarHomes3 from "../../../../images/AssetDetail_similarHomes/similarHomes3.jpg";
import { ReactComponent as NeighborhoodSvg } from "../../../../images/AssetDetail_similarHomes/neighborhoodLink.svg";
const SimilarHomes = () => {
  return (
    <Container>
      <TitleBlock>Similar Homes</TitleBlock>
      <ImageBlock>
        <Image imgPath={similarHomes1}></Image>
        <Image imgPath={similarHomes2}></Image>
        <Image imgPath={similarHomes3}></Image>
      </ImageBlock>
      <NeighborhoodBlock>
        <Link to="/asset/neighborhood">
          <Neighborhood />
        </Link>
      </NeighborhoodBlock>
    </Container>
  );
};
const Container = styled.div``;
const TitleBlock = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 15px;
`;
const ImageBlock = styled.div`
  /* display: flex;
  width: 100%;

  min-height: 250px;
  height: auto;
  gap: 20px; */
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(135px, auto));
  margin-bottom: 60px;
`;
const Image: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  width: 100%;
  height: auto;
`;
const NeighborhoodBlock = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 70px;
`;
const NeighborhoodButton = styled(Link)``;
const Neighborhood = styled(NeighborhoodSvg)`
  min-height: 45px;
  padding: 10px 30px;
  border: 2px solid #212121;
  color: #212121;
  cursor: pointer;
`;
export default SimilarHomes;
