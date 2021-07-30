import styled from "styled-components";
import { useEffect, useState } from "react";
import AdminContentPresenter from "./AdminContentPresenter";
import { PagingContainer } from "./Pagination/index";
enum SelectedCategory {
  POTENTIAL = "Potential",
  INESCROW = "In Escrow",
}
const AdminMypagePresenter = ({
  potentialTotalCount,
  escrowTotalCount,
  currentPage,
  onChangePage,
  selectedCategory,
  onClickedCategory,
  onClickCheckButton,
  potentialList,
  getPotentialList,
  escrowList,
  getEscrowList,
  moveToPotentialList,
  moveToInEscrowList,
  moveToFavoriteList,
  moveToOnGoingList,
}: any) => {
  // useEffect(() => {
  //   getPotentialList();
  //   getEscrowList();
  // }, []);
  const [click, setClick] = useState(false);

  const onClickEvent = () => {
    setClick(!click);
  };
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
  const renderContentBySelectedCategory = (
    selectedCategory: string = SelectedCategory.POTENTIAL
  ) => {
    switch (selectedCategory) {
      case SelectedCategory.POTENTIAL:
        return (
          <>
            {potentialList.length > 0 &&
              potentialList.map((item: any, idx: number) => (
                <AdminContentPresenter
                  item={item}
                  onClickCheckButton={onClickCheckButton}
                  moveTo={moveToInEscrowList}
                  userMoveTo={moveToOnGoingList}
                  onClickEvent={onClickEvent}
                ></AdminContentPresenter>
              ))}
            <PagingContainer
              currentPage={currentPage}
              totalCount={potentialTotalCount}
              onChangePage={onChangePage}
            />
          </>
        );
      case SelectedCategory.INESCROW:
        return (
          <>
            {escrowList.length > 0 &&
              escrowList.map((item: any, idx: number) => (
                <AdminContentPresenter
                  item={item}
                  onClickCheckButton={onClickCheckButton}
                  moveTo={moveToPotentialList}
                  userMoveTo={moveToFavoriteList}
                  onClickEvent={onClickEvent}
                ></AdminContentPresenter>
              ))}
            <PagingContainer
              currentPage={currentPage}
              totalCount={escrowTotalCount}
              onChangePage={onChangePage}
            />
          </>
        );
    }
  };

  return (
    <Container>
      <Header>Admin Mypage</Header>
      {renderSelectedCategory(selectedCategory)}
      <TitleContainer>
        <Title id="no">No.</Title>
        <Title id="name">Name</Title>
        <Title id="listing">Listing</Title>
        <Title id="request">
          Requested helipad
          <br /> contact date
        </Title>
        <Title id="initial">Helipad initial contact date</Title>
        <Title id="accepted">Offer accepted date</Title>
        <Title id="escrow">In Escrow</Title>
      </TitleContainer>
      {renderContentBySelectedCategory(selectedCategory)}
    </Container>
  );
};
const Container = styled.div`
  margin: 0 auto;
  max-width: 80%;
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
  #no {
    width: 64.39px;
    height: 22px;
      min-width: 70px;
  }
  #name {
    width: 169.4px;
    height: 22px;
      min-width: 100px;
  }
  #listing {
    width: 122.84px;
    height: 22px;
      min-width: 100px;
  #request {
    width: 179.31px;
    height: 44px;
      min-width: 180px;
      
  }
  #initial {
    width: 163.46px;
    height: 44px;
      min-width: 180px;
  }
  #accepted {
    width: 163.46px;
    height: 44px;
      min-width: 180px;
  }
  #escrow {
    width: 122.84px;
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
`;
export default AdminMypagePresenter;
