import styled from "styled-components";
import noMatter from "../../images/PropertyManagement/Card.png";
const NoMatter = () => {
  return (
    <Container>
      <Content imgPath={noMatter}></Content>
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
`;
export default NoMatter;
