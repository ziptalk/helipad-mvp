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
  margin-bottom: 100px;
`;
const Content: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  background-color: black;
  max-width: 1904px;
  width: 60vw;
  height: auto;
  padding: 50px 0;
`;
export default Seattle;
