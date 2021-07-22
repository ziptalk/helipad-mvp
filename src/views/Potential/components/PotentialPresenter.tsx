import styled from "styled-components";
import ContentPresenter from "./ContentPresenter";
import List from "../../../model/PotentialList";
import PaginationPresenter from "./PaginationPresenter";
import FooterPresenter from "../../../components/FooterPresenter";
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

  favoriteCurrentPage: number;
  onGoingCurrentPage: number;

  listPerPage: number;
  setCurrentList: (
    list: List[],
    listOfFirst: number,
    listOfLast: number
  ) => List[];
  favoriteOfLast: number;
  favoriteOfFirst: number;
  onGoingOfLast: number;
  onGoingOfFirst: number;

  setFavoriteCurrentPage: (number: number) => void;
  setOnGoingCurrentPage: (number: number) => void;
};
const PotentialPresenter = ({
  selectedCategory,
  onClickedCategory,
  onClickCheckButton,
  favoriteList,
  onGoingList,

  listPerPage,
  setCurrentList,
  favoriteOfLast,
  favoriteOfFirst,
  onGoingOfLast,
  onGoingOfFirst,

  setFavoriteCurrentPage,
  setOnGoingCurrentPage,
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
          </CategoryContainer>
        );
    }
  };
  const renderSelectedList = (selectedCategory: string) => {
    switch (selectedCategory) {
      case SelectedCategory.favorite:
        return (
          <ContentContainer>
            <ContentPresenter
              onClickCheckButton={onClickCheckButton}
              list={setCurrentList(
                favoriteList,
                favoriteOfFirst,
                favoriteOfLast
              )}
            />
            <PaginationPresenter
              listPerPage={listPerPage}
              totalList={favoriteList.length}
              paginate={setFavoriteCurrentPage}
            />
          </ContentContainer>
        );
      case SelectedCategory.onGoing:
        return (
          <ContentContainer>
            <ContentPresenter
              onClickCheckButton={onClickCheckButton}
              list={setCurrentList(onGoingList, onGoingOfFirst, onGoingOfLast)}
            />
            <PaginationPresenter
              listPerPage={listPerPage}
              totalList={onGoingList.length}
              paginate={setOnGoingCurrentPage}
            />
          </ContentContainer>
        );
    }
  };
  return (
    <Container>
      <Title>Admin</Title>
      {renderSelectedCategory(selectedCategory)}
      {renderSelectedList(selectedCategory)}
      <FooterPresenter />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 110vh;
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
  width: 500px;
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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default PotentialPresenter;
