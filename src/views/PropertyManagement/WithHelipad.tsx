import styled from "styled-components";
import withHelipadImg from "../../images/PropertyManagement/withHelipad.png";
const WithHelipad = () => {
  return (
    <Container>
      <Content imgPath={withHelipadImg}></Content>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;
const Content: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  max-width: 1904px;
  width: 70vw;
  height: auto;
  padding: 50px 0;
`;
export default WithHelipad;
