import PotentialPresenter from "./PotentialPresenter";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../router/config/Provider/AuthProvider";
import GetPotentialAndEscrowList from "../../../domain/GetAdminList";
import List from "../../../model/PotentialList";
enum SelectedCategory {
  favorite = "FAVORITE",
  onGoing = "ONGOING",
  chatHistory = "CHATHISTORY",
}
const PotentialContainer = () => {
  const { setHeaderMode } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [favoriteCurrentPage, setFavoriteCurrentPage] = useState(1);
  const [onGoingCurrentPage, setOnGoingCurrentPage] = useState(1);
  const [chatHistoryCurrentPage, setChatHistoryCurrentPage] = useState(1);
  const [listPerPage, setListPerPage] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>(
    SelectedCategory.favorite
  );
  const [favoriteList, setFavoriteList] = useState<List[]>([]);
  const [onGoingList, setOnGoingList] = useState<List[]>([]);

  // left arrow 클릭 시
  // right arrow 클릭 시

  useEffect(() => {
    setLoading(true);
    setHeaderMode("black");
    const favoriteList = GetPotentialAndEscrowList.getFavoriteList();
    const onGoingList = GetPotentialAndEscrowList.getOnGoingList();

    setFavoriteList(favoriteList);
    setOnGoingList(onGoingList);

    setLoading(false);
  }, []);
  console.log("Rerendering");
  const favoriteOfLast = favoriteCurrentPage * listPerPage;
  const favoriteOfFirst = favoriteOfLast - listPerPage;
  const onGoingOfLast = onGoingCurrentPage * listPerPage;
  const onGoingOfFirst = onGoingOfLast - listPerPage;
  const chatHistoryOfLast = chatHistoryCurrentPage * listPerPage;
  const chatHistoryOfFirst = chatHistoryOfLast - listPerPage;

  const setCurrentList = (
    list: List[],
    listOfFirst: number,
    listOfLast: number
  ) => {
    let currentList = list.slice(listOfFirst, listOfLast);
    return currentList;
  };

  const onClickedCategory = (selectedCategory: string) => {
    console.log("selectedCategory:", selectedCategory);
    switch (selectedCategory) {
      case SelectedCategory.favorite:
        setSelectedCategory(selectedCategory);
        break;
      case SelectedCategory.onGoing:
        setSelectedCategory(selectedCategory);
        break;
      case SelectedCategory.chatHistory:
        setSelectedCategory(selectedCategory);
    }
  };
  const onClickCheckButton = (event: any, selectedItemId: number) => {
    const item = event.target.parentNode.classList;
    if (item.contains("check")) {
      item.remove("check");
    } else {
      item.add("check");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <PotentialPresenter
        selectedCategory={selectedCategory}
        onClickedCategory={onClickedCategory}
        onClickCheckButton={onClickCheckButton}
        favoriteList={favoriteList}
        onGoingList={onGoingList}
        favoriteCurrentPage={favoriteCurrentPage}
        onGoingCurrentPage={onGoingCurrentPage}
        listPerPage={listPerPage}
        setCurrentList={setCurrentList}
        favoriteOfLast={favoriteOfLast}
        favoriteOfFirst={favoriteOfFirst}
        onGoingOfLast={onGoingOfLast}
        onGoingOfFirst={onGoingOfFirst}
        setFavoriteCurrentPage={setFavoriteCurrentPage}
        setOnGoingCurrentPage={setOnGoingCurrentPage}
      />
    </>
  );
};

export default PotentialContainer;
