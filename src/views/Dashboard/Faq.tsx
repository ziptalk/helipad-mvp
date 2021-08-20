import { useEffect } from "react";
import styled from "styled-components";
const Faq = ({ setDashboardPage }: any) => {
  useEffect(() => {
    setDashboardPage(true);
    return () => {
      setDashboardPage(false);
    };
  }, []);
  return (
    <Container>
      <div>FAQ page</div>
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
