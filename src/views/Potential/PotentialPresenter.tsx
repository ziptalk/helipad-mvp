import styled from "styled-components";
import ContentPresenter from "./ContentPresenter";
import List from "../../model/PotentialList";

enum SelectedCategory {
  favorite = "FAVORITE",
  onGoing = "ONGOING",
  chatHistory = "CHATHISTORY",
}
type PotentialPresenterProps = {
  selectedCategory: SelectedCategory;
  onClickedCategory: (selectedCategory: string) => void;
  onClickCheckButton: (event: any, selectedItemId: number) => void;
  favoriteList: List[];
  onGoingList: List[];
  chatHistoryList: List[];
};
const PotentialPresenter = ({
  selectedCategory,
  onClickedCategory,
  onClickCheckButton,
  favoriteList,
  onGoingList,
  chatHistoryList,
}: PotentialPresenterProps) => {
  const renderSelectedCategory = (selectedCategory: string) => {
    switch (selectedCategory) {
      case SelectedCategory.favorite:
        return (
          <CategoryContainer>
            <Selected>Favorite</Selected>
            <Category
              onClick={() => onClickedCategory(SelectedCategory.onGoing)}
            >
              OnGoing
            </Category>
            <Category
              onClick={() => onClickedCategory(SelectedCategory.chatHistory)}
            >
              Chat History
            </Category>
          </CategoryContainer>
        );
      case SelectedCategory.onGoing:
        return (
          <CategoryContainer>
            <Category
              onClick={() => onClickedCategory(SelectedCategory.favorite)}
            >
              Favorite
            </Category>
            <Selected>OnGoing</Selected>
            <Category
              onClick={() => onClickedCategory(SelectedCategory.chatHistory)}
            >
              Chat History
            </Category>
          </CategoryContainer>
        );
      case SelectedCategory.chatHistory:
        return (
          <CategoryContainer>
            <Category
              onClick={() => onClickedCategory(SelectedCategory.favorite)}
            >
              Favorite
            </Category>
            <Category
              onClick={() => onClickedCategory(SelectedCategory.onGoing)}
            >
              OnGoing
            </Category>
            <Selected>Chat History</Selected>
          </CategoryContainer>
        );
    }
  };
  const renderSelectedList = (selectedCategory: string) => {
    switch (selectedCategory) {
      case SelectedCategory.favorite:
        return (
          <ContentPresenter
            onClickCheckButton={onClickCheckButton}
            list={favoriteList}
          />
        );
      case SelectedCategory.onGoing:
        return (
          <ContentPresenter
            onClickCheckButton={onClickCheckButton}
            list={onGoingList}
          />
        );
      case SelectedCategory.chatHistory:
        return (
          <ContentPresenter
            onClickCheckButton={onClickCheckButton}
            list={chatHistoryList}
          />
        );
    }
  };
  return (
    <Container>
      <Title>Admin</Title>
      {renderSelectedCategory(selectedCategory)}
      {renderSelectedList(selectedCategory)}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  background: #f2f2f2;
`;
const Title = styled.div`
  margin-top: 46px;
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
  width: 969px;
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
  width: 323px;
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
export default PotentialPresenter;
