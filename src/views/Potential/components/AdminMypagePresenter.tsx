import styled from "styled-components";
import ContentPresenter from "./ContentPresenter";

enum SelectedCategory {
  POTENTIAL = "Potential",
  INESCROW = "In Escrow",
}
const AdminMypagePresenter = ({
  selectedCategory,
  onClickedCategory,
  onClickCheckButton,
  mockData,
}: any) => {
  const renderSelectedCategory = (
    selectedCategory: string = SelectedCategory.POTENTIAL
  ) => {
    switch (selectedCategory) {
      case SelectedCategory.POTENTIAL:
        return (
          <CategoryContainer>
            <Selected>{SelectedCategory.POTENTIAL}</Selected>
            <Category
              onClick={() => onClickedCategory(SelectedCategory.INESCROW)}
            >
              {SelectedCategory.INESCROW}
            </Category>
          </CategoryContainer>
        );
      case SelectedCategory.INESCROW:
        return (
          <CategoryContainer>
            <Category
              onClick={() => onClickedCategory(SelectedCategory.POTENTIAL)}
            >
              {SelectedCategory.POTENTIAL}
            </Category>
            <Selected>{SelectedCategory.INESCROW}</Selected>
          </CategoryContainer>
        );
    }
  };
  return (
    <Container>
      <Title>Admin Mypage</Title>
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
export default AdminMypagePresenter;
