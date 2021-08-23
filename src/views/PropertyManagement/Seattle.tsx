import styled from "styled-components";
import seattle from "../../images/PropertyManagement/seattle.png";
const Seattle = () => {
  return (
    <Container>
      <Content imgPath={seattle}></Content>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
`;
const Content: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  background-color: black;
  max-width: 978px;
  width: 100%;
  height: auto;
  padding: 30px;
`;
export default Seattle;
