import styled from "styled-components";
import rentar from "../../images/PropertyManagement/rentar.png";
const Rentar = () => {
  return (
    <Container>
      <Content imgPath={rentar}></Content>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: black;
`;
const Content: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  max-width: 1463px;
  background-color: black;
  width: 100%;
  height: auto;
  padding: 30px;
`;
export default Rentar;
