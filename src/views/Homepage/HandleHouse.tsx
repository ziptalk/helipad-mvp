import styled from "styled-components";
import iphone1 from "../../images/Homepage/HandleHouse/iphone1.png";
import iphone2 from "../../images/Homepage/HandleHouse/iphone2.png";
const HandleHouse = () => {
  return (
    <Container>
      <BgContainer>
        <ContentContainer>
          {/* <ImageWrapper>
          <ImageBlock imgPath={iphone1}></ImageBlock>
          <ImageBlock imgPath={iphone2}></ImageBlock>
        </ImageWrapper> */}
          <TitleWrapper>
            <ImageBlock1 imgPath={iphone1}></ImageBlock1>
            <ImageBlock2 imgPath={iphone2}></ImageBlock2>
            <Category>부동산 운용</Category>
            <Title>We'll handle the house</Title>
            <SubTitle>
              Worried that you won’t be able to take care of the house? Let our
              experienced property managers take care of repairs, maintenance,
              tenant issues, and more.
            </SubTitle>
            <SubTitle>
              Helipad will take care of all the work and even connect you to be
              able to have your home well taken care of.
            </SubTitle>
          </TitleWrapper>
        </ContentContainer>
      </BgContainer>
    </Container>
  );
};
export default HandleHouse;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;
const BgContainer = styled.div`
  background-color: #c4c4c4;
  width: 100vw;
  height: 100vh;
  max-height: 834px;
`;
const ContentContainer = styled.div`
  margin: 0 auto;
  width: 80vw;
  height: 100%;
  max-width: 1482px;

  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "one two"
    "three four";
`;
const ImageWrapper = styled.div`
  background-color: blue;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const TitleWrapper = styled.div`
  grid-area: four;
  position: relative;
`;
const Category = styled.div`
  font-size: 42px;
  margin-bottom: 24px;
  font-weight: 600;
  color: #b69142;
`;
const Title = styled.div`
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 77px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 22px;
`;
const SubTitle = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 35px;
`;
const ImageBlock1: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  position: absolute;

  top: -506px;
  left: -330px;
`;
const ImageBlock2: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  position: absolute;
  top: -384px;
  left: -575px;
`;
