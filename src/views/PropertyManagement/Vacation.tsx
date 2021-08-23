import styled from "styled-components";
import vacation from "../../images/PropertyManagement/vacation.png";
const Vacation = () => {
  return (
    <Container>
      <Content imgPath={vacation}></Content>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;
const Content: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  max-width: 978px;
  width: 100%;
  height: auto;
  padding: 30px;
`;
export default Vacation;
