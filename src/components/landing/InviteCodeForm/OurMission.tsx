import styled from "styled-components";
import { ReactComponent as LineSvg } from "../../../images/InviteCodeForm/ic_line.svg";
import WorldMapImage from "../../../images/InviteCodeForm/worldMap.jpg";
const OurMission = () => {
  return (
    <Container>
      <Category>
        <Line />
        OUR MISSION
      </Category>

      <Title>Mission statement</Title>
      <ContentBlock>
        <SubTitle>Areas Serving</SubTitle>

        <Content>
          Investors from South Korea (coming soon: Vietnam, Japan)
        </Content>
        <Content>
          Real estate brokerages in Southern California (Coming soon: San Diege,
          Las Vegas, San Francisco/San Jose, Hawaii, New York, Seattle
        </Content>
      </ContentBlock>
      <ImageContainer imgPath={WorldMapImage}></ImageContainer>
    </Container>
  );
};
const Container = styled.div`
  margin-bottom: 100px;
  width: 80vw;
  max-width: 80%;
`;
const Line = styled(LineSvg)``;
const Category = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 27px;

  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 4px;
  color: #b69142;
  ${Line} {
    margin-right: 24px;
  }
`;
const Title = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0px;
  margin-bottom: 27px;
`;
const SubTitle = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0px;
  margin-bottom: 15px;
`;
const ContentBlock = styled.div``;
const Content = styled.li`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
`;
const ImageContainer: any = styled.div`
  width: 100%;
  height: 800px;
  background: url(${(props: any) => props.imgPath});
  background-size: cover;
`;
export default OurMission;
