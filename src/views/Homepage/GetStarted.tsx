import styled from "styled-components";
import linear from "../../images/Homepage/linear.png";
import { Link } from "react-router-dom";
const GetStarted = () => {
  return (
    <Container>
      <ContentContainer>
        <Content>
          <TitleWrapper>
            <Title>Get started now.</Title>
            <SubTitle>Your newest property awaits you.</SubTitle>
          </TitleWrapper>
          <ButtonWrapper>
            <StyledLink to="">
              <Button>Contact Us</Button>
            </StyledLink>
          </ButtonWrapper>
        </Content>
      </ContentContainer>
    </Container>
  );
};
export default GetStarted;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 600px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;
const ContentContainer = styled.div`
  width: 80vw;
  max-width: 1904px;
  margin: 0 auto;
  background: black;
  min-height: 371px;
  display: flex;
  align-items: center;
`;
const Content: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const TitleWrapper = styled.div`
  margin-left: 100px;
`;
const Title = styled.div`
  color: #ffffff;
  font-size: 49px;
`;
const SubTitle = styled.div`
  color: #ffffff;
  font-size: 32px;
`;
const ButtonWrapper = styled.div`
  margin-right: 120px;
`;
const Button = styled.button`
  width: 212px;
  height: 68px;
  background: #ff4243;
  color: white;
  font-size: 25px;
  font-weight: 600;
  border: none;
  outline: none;
  border-radius: 7px;
  padding: 0;
`;
const StyledLink = styled(Link)``;
