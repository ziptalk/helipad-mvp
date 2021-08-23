import homeScreen from "../../images/Dashboard/dashboard_home_screen.jpg";
import styled from "styled-components";
import { useEffect } from "react";
const DashboardHome = () => {
  return (
    <Container>
      <ImageWrapper imgPath={homeScreen}></ImageWrapper>
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
export default DashboardHome;
