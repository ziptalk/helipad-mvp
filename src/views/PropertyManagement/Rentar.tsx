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
  margin-bottom: 100px;
`;
const Content: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  max-width: 1904px;
  background-color: black;
  width: 70vw;
  height: auto;
  padding: 50px 0;
`;
export default Rentar;
