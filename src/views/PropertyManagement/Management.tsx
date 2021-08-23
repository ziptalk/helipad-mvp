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
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
`;
const Content: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  max-width: 1904px;
  width: 100%;
  height: auto;
`;
export default Management;
