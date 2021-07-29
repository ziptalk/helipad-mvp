import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../router/config/Provider/AuthProvider";
import AdminMypagePresenter from "./AdminMypagePresenter";
import UserMypagePresenter from "./UserMypagePresenter";
import GetUserInfo from "../../../domain/GetUserInfo";
import User from "../../../model/User";
import GetPotentialAndEscrowList from "../../../domain/GetAdminList";
import List from "../../../model/PotentialList";
import MypageListDomain from "../../../domain/MypageList";
import MypageList from "../../../model/MypageList";
import styled from "styled-components";
enum SelectedCategory {
  POTENTIAL = "Potential",
  INESCROW = "In Escrow",
  FAVORITE = "Favorite",
  ONGOING = "On Going",
}
const MypageContainer = () => {
  const { setHeaderMode, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>();
  const [userInfo, setUserInfo] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    isAgent: false,
  });
  const [potentialList, setPotentialList] = useState<List[]>([]);
  const [escrowList, setEscrowList] = useState<List[]>([]);
  const [favoriteList, setFavoriteList] = useState<List[]>([]);
  const [onGoingList, setOnGoingList] = useState<List[]>([]);
  const [mockData, setMockData] = useState<List[]>();
  useEffect(() => {
    setLoading(true);
    setHeaderMode("");
    if (user !== null && user !== undefined) {
      GetUserInfo.execute(user.uid).then((result) => setUserInfo(result));
    }
    // setMockData(GetPotentialAndEscrowList.getOnGoingList());
    setLoading(false);
  }, []);

  const onClickedCategory = (selectedCategory: string) => {
    switch (selectedCategory) {
      case SelectedCategory.POTENTIAL:
        setSelectedCategory(selectedCategory);
        break;
      case SelectedCategory.INESCROW:
        setSelectedCategory(selectedCategory);
        break;
      case SelectedCategory.FAVORITE:
        setSelectedCategory(selectedCategory);
        break;
      case SelectedCategory.ONGOING:
        setSelectedCategory(selectedCategory);
        break;
    }
  };

  const onClickCheckButton = (event: any, selectedItemId: number) => {
    const item = event.target.parentNode.classList;
    console.log("item", event.target.parentNode);
    if (item.contains("check")) {
      item.remove("check");
    } else {
      item.add("check");
    }
    setLoading(true);
    setLoading(false);
  };
  const getPotentialList = async () => {
    const result = await MypageListDomain.getPotentialList();
    console.log("getPotentialList", result);
    setPotentialList(result);
  };
  const getEscrowList = async () => {
    const result = await MypageListDomain.getEscrowList();
    setEscrowList(result);
  };
  const getFavoriteList = async () => {
    if (user) {
      const result = await MypageListDomain.getFavoriteList(user.uid);
      setFavoriteList(result);
    }
  };
  const getOnGoingList = async () => {
    if (user) {
      const result = await MypageListDomain.getOnGoingList(user.uid);

      setOnGoingList(result);
    }
  };
  const moveToPotentialList = async (list: any, userId: any, assetId: any) => {
    if (user) {
      await MypageListDomain.moveToPotentialList(list, userId, assetId);
      await moveToFavoriteList(list, userId, assetId);
      getPotentialList();
      getEscrowList();
    }
  };
  const moveToInEscrowList = async (list: any, userId: any, assetId: any) => {
    if (user) {
      await MypageListDomain.moveToEscrowList(list, userId, assetId);
      await moveToOnGoingList(list, userId, assetId);
      getPotentialList();
      getEscrowList();
    }
  };

  const moveToFavoriteList = async (list: any, userId: any, assetId: any) => {
    if (user) {
      await MypageListDomain.moveToFavoriteList(list, userId, assetId);
      getFavoriteList();
      getOnGoingList();
    }
  };
  const moveToOnGoingList = async (list: any, userId: any, assetId: any) => {
    if (user) {
      await MypageListDomain.moveToOnGoingList(list, userId, assetId);
      getFavoriteList();
      getOnGoingList();
    }
  };

  const renderByIsAgent = (isAgent: boolean) => {
    console.log("isAgent", isAgent);
    switch (isAgent) {
      case true:
        return (
          <AdminMypagePresenter
            isAgent={isAgent}
            selectedCategory={selectedCategory}
            onClickedCategory={onClickedCategory}
            onClickCheckButton={onClickCheckButton}
            potentialList={potentialList}
            getPotentialList={getPotentialList}
            getEscrowList={getEscrowList}
            escrowList={escrowList}
            moveToPotentialList={moveToPotentialList}
            moveToInEscrowList={moveToInEscrowList}
          />
        );
      case false:
        return (
          <UserMypagePresenter
            isAgent={isAgent}
            selectedCategory={selectedCategory}
            onClickedCategory={onClickedCategory}
            onClickCheckButton={onClickCheckButton}
            favoriteList={favoriteList}
            getFavoriteList={getFavoriteList}
            onGoingList={onGoingList}
            getOnGoingList={getOnGoingList}
            moveToFavoriteList={moveToFavoriteList}
            moveToOnGoingList={moveToOnGoingList}
          />
        );
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  const { firstName, lastName, email, isAgent } = userInfo;

  return <Container>{renderByIsAgent(isAgent)}</Container>;
};
const Container = styled.div`
  background: #f2f2f2;
  width: 100%;
`;
export default MypageContainer;
