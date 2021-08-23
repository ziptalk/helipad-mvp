import styled from "styled-components";
import contact from "../../images/PropertyManagement/contact.png";
const Contact = () => {
  return (
    <Container>
      <Content imgPath={contact}></Content>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  background-color: #c4c4c4;
`;
const Content: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  max-width: 1904px;
  width: 90vw;
  height: auto;
  padding: 50px 0;
`;
export default Contact;
