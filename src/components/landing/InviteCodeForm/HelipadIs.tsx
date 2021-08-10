import styled from "styled-components";
import { ReactComponent as LineSvg } from "../../../images/InviteCodeForm/ic_line.svg";
import HelipasIsImage from "../../../images/InviteCodeForm/helipadIs.jpg";
const HelipadIs = () => {
  return (
    <Container>
      <TextContainer>
        <Text>
          <Category>
            <Line />
            HELIPAD IS
          </Category>
          <Title>
            Helipad will help you own the house or profitable investment
            property you want in the United States.
          </Title>

          <Content>
            US Real Estate transactions made simple and safe for foreign
            investors.
          </Content>

          <ListContent>
            Whether you purchase your US home to live in, or investment property
            to produce rental income or value appreciation
          </ListContent>

          <Content>
            Helipad is the first online platform that enables foreign investors
            to complete buying, selling, or renting transactions of the US real
            estate properties in a safe and easy way online but at the higher
            level of personalized services just for you. Owning your dream home
            or profitable investment property in the US shouldn’t be
            complicated.
          </Content>
        </Text>
      </TextContainer>
      <ImageContainer imgPath={HelipasIsImage}></ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  max-width: 1904px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 100px 0px;
`;
const TextContainer = styled.div`
  flex: 1;
  position: relative;
`;
const Text = styled.div`
  width: 60%;

  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: -40% 0 0 -27.5%;
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
  color: #665a3f;
  ${Line} {
    margin-right: 24px;
  }
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 13px;
    line-height: 23px;
  }
`;
const Title = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0em;
  margin-bottom: 27px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 19px;
    line-height: 30px;
  }
`;
const ContentBlock = styled.ul``;
const Content = styled.li`
  list-style-type: none;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;

  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 12px;
    line-height: 17px;
  }
`;
const ListContent = styled.li`
  margin: 30px 10px 30px 30px;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;

  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 12px;
    line-height: 17px;
    margin: 15px 5px 15px 5px;
  }
`;
const ImageContainer: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  flex: 1;
  /* width: 952px;
  height: 880px; */
  width: 100%;
  height: auto;
`;
export default HelipadIs;
