import escrow from "../../images/Dashboard/escrow.jpg";
import styled from "styled-components";
import { useEffect } from "react";
const EscrowInProcess = ({ setDashboardPage }: any) => {
  useEffect(() => {
    setDashboardPage(true);
  }, []);
  return (
    <Container>
      <ImageWrapper imgPath={escrow}></ImageWrapper>
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
export default EscrowInProcess;
