import styled from "styled-components";
import ContentPresenter from "./ContentPresenter";

enum SelectedCategory {
  FAVORITE = "Favorite",
  ONGOING = "On Going",
}
const UserMypagePresenter = ({
  selectedCategory,
  onClickedCategory,
  onClickCheckButton,
  mockData,
}: any) => {
  const renderSelectedCategory = (
    selectedCategory: string = SelectedCategory.FAVORITE
  ) => {
    switch (selectedCategory) {
      case SelectedCategory.FAVORITE:
        return (
          <CategoryContainer>
            <Selected>{SelectedCategory.FAVORITE}</Selected>
            <Category
              onClick={() => onClickedCategory(SelectedCategory.ONGOING)}
            >
              {SelectedCategory.ONGOING}
            </Category>
          </CategoryContainer>
        );
      case SelectedCategory.ONGOING:
        return (
          <CategoryContainer>
            <Category
              onClick={() => onClickedCategory(SelectedCategory.FAVORITE)}
            >
              {SelectedCategory.FAVORITE}
            </Category>
            <Selected>{SelectedCategory.ONGOING}</Selected>
          </CategoryContainer>
        );
    }
  };
  return (
    <Container>
      <Title>User Mypage</Title>
      {renderSelectedCategory(selectedCategory)}
      <ContentPresenter
        list={mockData}
        onClickCheckButton={onClickCheckButton}
      ></ContentPresenter>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 110vh;
  background: #f2f2f2;
`;
const Title = styled.div`
  padding-top: 46px;
  margin-bottom: 21px;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 72px;
  letter-spacing: 0em;
  text-align: center;
`;
const CategoryContainer = styled.div`
  width: 30%;
  height: 52px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 44px;
  .selected {
    font-weight: bold;
    color: black;
    border-bottom: 2px solid black;
  }
`;

const Category = styled.div`
  width: 100%;
  height: 52px;
  border-bottom: 1px solid #a3a3a3;
  color: #a3a3a3;
  text-align: center;
  padding: 15px 0;
  cursor: pointer;
`;
const Selected = styled(Category)`
  font-weight: bold;
  color: black;
  border-bottom: 2px solid black;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default UserMypagePresenter;
