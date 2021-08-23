import styled from "styled-components";
import management from "../../images/PropertyManagement/managementImg.png";
const Management = () => {
  return (
    <Container>
      <Content imgPath={management}></Content>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
`;
const Content: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  width: 100%;
  height: auto;
`;
export default Management;
