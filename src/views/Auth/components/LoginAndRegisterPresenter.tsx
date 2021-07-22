import styled from "styled-components";
import LoginContainer from "./login/LoginContainer";
import RegisterContainer from "./register/RegisterContainer";
enum SelectedCategory {
  TITLE = "Login/Register",
  LOGIN = "Login",
  REGISTER = "Register",
}
const LoginAndRegisterPresenter = ({
  selectedCategory,
  setSelectedCategory,
}: any) => {
  console.log("selectedCategory", selectedCategory);
  const renderSelectedItem = () => {
    switch (selectedCategory) {
      case SelectedCategory.LOGIN:
        return (
          <Category>
            <SelectedItem>{SelectedCategory.LOGIN}</SelectedItem>
            <Item
              onClick={() => setSelectedCategory(SelectedCategory.REGISTER)}
            >
              {SelectedCategory.REGISTER}
            </Item>
          </Category>
        );
        break;
      case SelectedCategory.REGISTER:
        return (
          <Category>
            <Item onClick={() => setSelectedCategory(SelectedCategory.LOGIN)}>
              {SelectedCategory.LOGIN}
            </Item>
            <SelectedItem>{SelectedCategory.REGISTER}</SelectedItem>
          </Category>
        );
        break;
      default:
        throw new Error("Invalid item");
    }
  };
  return (
    <Container selectedCategory={selectedCategory}>
      <FormContainer>
        <HeaderContainer>
          <Title>{SelectedCategory.TITLE}</Title>
          {renderSelectedItem()}
        </HeaderContainer>
        {selectedCategory === SelectedCategory.LOGIN && <LoginContainer />}
        {selectedCategory === SelectedCategory.REGISTER && (
          <RegisterContainer />
        )}
      </FormContainer>
    </Container>
  );
};

const Container: any = styled.div`
  width: 100%;
  height: ${(props: any) =>
    props.selectedCategory === SelectedCategory.REGISTER ? "170vh" : "100vh"};

  background-color: ${({ theme }) => theme.colors.beige};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 200px;
`;
const HeaderContainer = styled.div`
  width: 474px;
  height: 148px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 0px #dadada;
`;
const Title = styled.div`
  width: 410px;
  height: 40px;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: center;

  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: center;

  margin: 40px 32px 24px;
`;
const Category = styled.div`
  width: 410px;
  height: 44px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
`;
const Item = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  padding-top: 15px;
  text-align: center;
  color: #a3a3a3;

  width: 83px;
  height: 100%;
`;
const SelectedItem = styled(Item)`
  color: #212121;
  border-bottom: 2px solid black;
`;

export default LoginAndRegisterPresenter;
