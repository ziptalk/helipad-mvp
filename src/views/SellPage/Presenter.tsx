import styled from "styled-components";
import sellPageImg from "../../images/SellPage/SellPageImg.png";
const Presenter = () => {
  return (
    <Container>
      <BackgroundImg>
        <ContentContainer>
          <TitleWrapper>
            <Title>부동산 판매</Title>
            <SubTitle>
              Sell your US home with Helipad and get the return your house
              deserves.
            </SubTitle>
          </TitleWrapper>
        </ContentContainer>
      </BackgroundImg>
      {/* <BackgroundImg imgPath={sellPageImg}></BackgroundImg> */}
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1904px;
  width: 100%;
  height: 100%;
`;
const TitleWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: clamp(380px, 30vh, 650px);
  left: clamp(200px, 20vw, 350px);
`;
const Title = styled.div`
  font-size: clamp(48px, 3.7vw, 72px);
  font-style: normal;
  font-weight: 600;
  line-height: 86px;
  letter-spacing: -0.03em;
  text-align: left;
`;
const SubTitle = styled.div`
  max-width: 454px;
  font-size: clamp(16px, 1.2vw, 24px);
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
`;
// const BackgroundImg: any = styled.img.attrs((props: any) => ({
//   src: props.imgPath,
// }))`
//   position: absolute;
//   top: 0px;
//   width: 100%;
//   height: auto;
// `;
const BackgroundImg: any = styled.div`
  background: url(${sellPageImg});
  background-size: cover;

  width: 100vw;
  height: 100vh;
`;
export default Presenter;
