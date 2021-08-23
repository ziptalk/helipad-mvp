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
export default Vacation;
