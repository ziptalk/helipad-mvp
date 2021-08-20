import property from "../../images/Dashboard/propertydetails.jpg";
import styled from "styled-components";
import { useEffect } from "react";
const Properties = ({ setDashboardPage }: any) => {
  useEffect(() => {
    setDashboardPage(true);
  }, []);
  return (
    <Container>
      <ImageWrapper imgPath={property}></ImageWrapper>
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
export default Properties;
