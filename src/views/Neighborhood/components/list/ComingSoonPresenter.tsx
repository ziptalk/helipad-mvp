import styled from "styled-components";
import LasVegasSvg from "../../../../images/Neighborhood/lasVegas.jpg";
import SanDiegoSvg from "../../../../images/Neighborhood/sanDiego.jpg";
const ComingSoonPresenter = () => {
  return (
    <Container>
      <Title>Coming Soon</Title>
      <Content>
        <ImageBlock>
          <Image imgPath={LasVegasSvg}>Las Vegas</Image>
          <Image imgPath={SanDiegoSvg}>San Diego</Image>
        </ImageBlock>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  max-width: 1920px;
  margin-top: 103px;
`;
const Title = styled.div`
  font-family: Poppins;
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: 90px;
  letter-spacing: -2px;
  text-align: center;
  margin-bottom: 85px;
`;
const Content = styled.div`
  margin: 0 60px;
  display: flex;
  justify-content: space-between;
`;

const ImageBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  max-width: 100vw;
  gap: 20px;
`;
// const Image: any = styled.img.attrs((props: any) => ({
//   src: props.imgPath,
// }))``;

const Image: any = styled.div`
  width: 100%;

  background: url(${(props: any) => props.imgPath});
  background-size: cover;

  font-family: Poppins;
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: 96px;
  letter-spacing: -2px;
  text-align: center;
  color: white;
  padding: 25%;
`;

// const ImageName = styled.div`
//   position: absolute;
//   width: 312px;
//   height: 96px;
//   font-family: Poppins;
//   font-size: 64px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 96px;
//   letter-spacing: -2px;
//   text-align: center;
// `;

const Name = styled.div``;
export default ComingSoonPresenter;
