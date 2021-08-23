import { useEffect } from "react";
import styled from "styled-components";
import faq from "../../images/Dashboard/faqScreen.png";
const Faq = () => {
  return (
    <Container>
      <ImageWrapper imgPath={faq}></ImageWrapper>
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
export default Faq;
