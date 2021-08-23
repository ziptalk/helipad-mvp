import styled from "styled-components";
import Management from "./Management";
import Seattle from "./Seattle";
import NoMatter from "./NoMatter";
import Rentar from "./Rentar";
import Vacation from "./Vacation";
import WithHelipad from "./WithHelipad";
import Contact from "./Contact";
const Presenter = () => {
  return (
    <Container>
      <ContentContainer>
        <Management></Management>
        <Seattle></Seattle>
        <NoMatter></NoMatter>
        <Rentar></Rentar>
        <Vacation></Vacation>
        <WithHelipad></WithHelipad>
        <Contact></Contact>
      </ContentContainer>
    </Container>
  );
};
const Container = styled.div``;
const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1904px;
`;
export default Presenter;
