import myAgent from "../../images/Dashboard/myAgent.jpg";
import styled from "styled-components";
import { useEffect } from "react";
const MyAgent = () => {
  return (
    <Container>
      <ImageWrapper imgPath={myAgent}></ImageWrapper>
    </Container>
  );
};
const Container = styled.div``;
const ImageWrapper: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  width: 100%;
  height: auto;
`;
export default MyAgent;
