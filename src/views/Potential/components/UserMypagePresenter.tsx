import styled from "styled-components";
import { useEffect, useState } from "react";
import UserContentPresenter from "./UserContentPresenter";
import { PagingContainer } from "./Pagination/index";
enum SelectedCategory {
  FAVORITE = "Favorite",
  ONGOING = "On Going",
}
const UserMypagePresenter = ({
  isAgent,
  selectedCategory,
  onClickedCategory,
  onClickCheckButton,
  favoriteList,
  getFavoriteList,
  onGoingList,
  getOnGoingList,
  moveToFavoriteList,
  moveToOnGoingList,
  currentPage,
  onChangePage,
  favoriteTotalCount,
  onGoingTotalCount,
}: any) => {
  // useEffect(() => {
  //   getFavoriteList();
  //   getOnGoingList();
  // }, []);
  const [click, setClick] = useState(false);
  const onClickEvent = () => {
    setClick(!click);
  };
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
  const renderContentBySelectedCategory = (
    selectedCategory: string = SelectedCategory.FAVORITE
  ) => {
    switch (selectedCategory) {
      case SelectedCategory.FAVORITE:
        return (
          <>
            {favoriteList.length > 0 &&
              favoriteList.map((item: any, idx: number) => (
                <UserContentPresenter
                  item={item}
                  onClickCheckButton={onClickCheckButton}
                  moveTo={moveToOnGoingList}
                  onClickEvent={onClickEvent}
                ></UserContentPresenter>
              ))}
            <PagingContainer
              currentPage={currentPage}
              totalCount={favoriteTotalCount}
              onChangePage={onChangePage}
            />
          </>
        );
      case SelectedCategory.ONGOING:
        return (
          <>
            {onGoingList.length > 0 &&
              onGoingList.map((item: any, idx: number) => (
                <UserContentPresenter
                  item={item}
                  onClickCheckButton={onClickCheckButton}
                  moveTo={moveToFavoriteList}
                  onClickEvent={onClickEvent}
                ></UserContentPresenter>
              ))}
            <PagingContainer
              currentPage={currentPage}
              totalCount={onGoingTotalCount}
              onChangePage={onChangePage}
            />
          </>
        );
    }
  };
  return (
    <Container>
      <Header>User Mypage</Header>
      {renderSelectedCategory(selectedCategory)}
      <TitleContainer>
        <Title id="no">No.</Title>
        <Title id="name">Name</Title>
        <Title id="listing">Listing</Title>
        <Title id="request">
          Requested helipad
          <br /> contact date
        </Title>
        <Title id="initial">
          Helipad initial <br />
          contact date
        </Title>
        <Title id="accepted">
          Offer accepted <br />
          date
        </Title>
        <Title id="escrow">In Escrow</Title>
      </TitleContainer>
      {renderContentBySelectedCategory(selectedCategory)}
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 1904px;
  width: 80vw;
  height: 110vh;
`;
const Header = styled.div`
  padding-top: 46px;
  margin-bottom: 21px;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 72px;
  letter-spacing: 0em;
  text-align: center;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 36px;
  }
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

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  margin: 0 auto;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    height: 50px;
  }
  
  #no {
    max-width: 13%;
    /* width: 64.39px; */
    height: 22px;
      min-width: 70px;
  }
  #name {
    /* width: 169.4px; */
    
    height: 22px;
      min-width: 100px;
  }
  #listing {
    /* width: 122.84px; */
    max-width: 13%;
    height: 22px;
      min-width: 100px;
  #request {
    /* width: 179.31px; */
    max-width: 13%;
    height: 44px;
      min-width: 180px;
      
  }
  #initial {
    /* width: 163.46px; */
    max-width: 13%;
    height: 44px;
      min-width: 180px;
  }
  #accepted {
    max-width: 13%;
    height: 44px;
      min-width: 180px;
  }
  #escrow {
    /* width: 122.84px; */
    max-width: 13%;
    height: 22px;
      min-width: 180px;
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  max-width: 190px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 13px;
    line-height: 15px;
  }
`;
const PresenterContainer = styled.div``;
export default UserMypagePresenter;
