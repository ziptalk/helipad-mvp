import NeighborhoodItem from "../../../../model/NeighborhoodItem";
import styled from "styled-components";

import Slogan1 from "../../../../images/Neighborhood/Detail/slogan1.jpg";
import Slogan2 from "../../../../images/Neighborhood/Detail/slogan2.jpg";
import Expect1 from "../../../../images/Neighborhood/Detail/ic_whatToExpect1.jpg";
import Expect2 from "../../../../images/Neighborhood/Detail/ic_whatToExpect2.jpg";
import LifeStyle1 from "../../../../images/Neighborhood/Detail/ic_lifeStyle1.jpg";
import LifeStyle2 from "../../../../images/Neighborhood/Detail/ic_lifeStyle2.jpg";
import Appeal1 from "../../../../images/Neighborhood/Detail/appeal1.jpg";
import Appeal2 from "../../../../images/Neighborhood/Detail/appeal2.jpg";
import Market1 from "../../../../images/Neighborhood/Detail/market1.jpg";
import Market2 from "../../../../images/Neighborhood/Detail/market2.jpg";
import Market3 from "../../../../images/Neighborhood/Detail/market3.jpg";
import FallInLove1 from "../../../../images/Neighborhood/Detail/fallInLove1.jpg";
import FallInLove2 from "../../../../images/Neighborhood/Detail/fallInLove2.jpg";
import FallInLove3 from "../../../../images/Neighborhood/Detail/fallInLove3.jpg";
import FallInLove4 from "../../../../images/Neighborhood/Detail/fallInLove4.jpg";
import FallInLove5 from "../../../../images/Neighborhood/Detail/fallInLove5.jpg";
import { Link } from "react-router-dom";
type PropertyPresenterProps = {
  regionInfo: NeighborhoodItem;
};
const PropertyPresenter = ({ regionInfo }: PropertyPresenterProps) => {
  const {
    slogan,
    whatToExpect,
    lifeStyle,
    unexpectedAppeal,
    market,
    fallInLoveWith,
  } = regionInfo;
  return (
    <Container>
      <Category>
        <ImageBlock>
          <Image imgPath={Slogan1} />
          <Image imgPath={Slogan2} />
          {/* <Image imgPath={Slogan1} />
          <Image imgPath={Slogan2} /> */}
        </ImageBlock>
        <TextBlock>
          <CategoryName>Slogan</CategoryName>
          <Title>{slogan.title}</Title>
          <Content>{slogan.content}</Content>
        </TextBlock>
      </Category>
      <Category>
        <ImageBlock>
          <Image imgPath={Expect1} />
          <Image imgPath={Expect2} />
        </ImageBlock>
        <TextBlock>
          <CategoryName>What To Expect</CategoryName>
          <Title>{whatToExpect.title}</Title>
          <Content>{whatToExpect.content}</Content>
        </TextBlock>
      </Category>
      <Category>
        <ImageBlock>
          <Image imgPath={LifeStyle1} />
          <Image imgPath={LifeStyle2} />
        </ImageBlock>
        <TextBlock>
          <CategoryName>The Lifestyle</CategoryName>
          <Title>{lifeStyle.title}</Title>
          <Content>{lifeStyle.content}</Content>
        </TextBlock>
      </Category>
      <Category>
        <ImageBlock>
          <Image imgPath={Appeal1} />
          <Image imgPath={Appeal2} />

          {/* {unexpectedAppeal.images.map((img, idx) => (
            <Image key={idx} imgPath={img} />
          ))} */}
        </ImageBlock>
        <TextBlock>
          <CategoryName>Unexpected Appeal</CategoryName>
          <Title>{unexpectedAppeal.title}</Title>
          <Content>{unexpectedAppeal.content}</Content>
        </TextBlock>
      </Category>
      <Category>
        <ImageBlock>
          <Image imgPath={Market1} />
          <Image imgPath={Market2} />
          <Image imgPath={Market3} />

          {/* {market.images.map((img, idx) => (
            <Image key={idx} imgPath={img} />
          ))} */}
        </ImageBlock>
        <TextBlock>
          <CategoryName>The Market</CategoryName>
          <Title>{market.title}</Title>
          <Content>{market.content}</Content>
        </TextBlock>
      </Category>
      <Category>
        <ImageBlock>
          <Image imgPath={FallInLove1} />
          <Image imgPath={FallInLove2} />
          <Image imgPath={FallInLove3} />
          <Image imgPath={FallInLove4} />
          <Image imgPath={FallInLove5} />
          {/* {fallInLoveWith.images.map((img, idx) => (
            <Image key={idx} imgPath={img} />
          ))} */}
        </ImageBlock>
        <TextBlock>
          <CategoryName>You'll Fall In Love With</CategoryName>
          <Title>{fallInLoveWith.title}</Title>
          <Content>{fallInLoveWith.content}</Content>
        </TextBlock>
      </Category>
      <ListButtonBlock>
        <Link to="/asset/neighborhood">
          <ListButton>LIST</ListButton>
        </Link>
      </ListButtonBlock>
    </Container>
  );
};

const Container = styled.div``;
const Category = styled.div`
  margin-bottom: 60px;
`;
const TextBlock = styled.div`
  width: 1496px;
  height: 149px;
  margin-bottom: 60px;
  text-align: center;
  margin: auto;
`;
const CategoryName = styled.div`
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 45px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 6px;
`;

const Title = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #b69142;
  margin-bottom: 20px;
`;
const Content = styled.div`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
`;
const ImageBlock: any = styled.div`
  margin: 0 212px;
  width: 1492px;
  min-height: 70vh;
  display: flex;

  flex-wrap: wrap;
`;

const Image: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  max-width: 100%;
  height: auto;

  &:nth-child(odd) {
    margin-right: 20px;
  }
`;
const ListButtonBlock = styled.div`
  text-align: center;
  margin-bottom: 158px;
`;
const ListButton = styled.button`
  width: 160px;
  height: 60px;
  border: 2px solid black;
  background: white;
  margin: 0 auto;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0px;
  cursor: pointer;
`;

export default PropertyPresenter;
