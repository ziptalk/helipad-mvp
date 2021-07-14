import PotentialPresenter from "./PotentialPresenter";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../router/config/Provider/AuthProvider";
import GetPotentialAndEscrowList from "../../domain/GetPotentialAndEscrowList";
import List from "../../model/PotentialList";
enum SelectedCategory {
  favorite = "FAVORITE",
  onGoing = "ONGOING",
  chatHistory = "CHATHISTORY",
}
const PotentialContainer = () => {
  const { setHeaderMode } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>(
    SelectedCategory.favorite
  );
  const [favoriteList, setFavoriteList] = useState<List[]>([]);
  const [onGoingList, setOnGoingList] = useState<List[]>([]);
  const [chatHistoryList, setChatHistoryList] = useState<List[]>([]);
  console.log(favoriteList);
  useEffect(() => {
    setHeaderMode("black");
    const getResult = GetPotentialAndEscrowList.getFavoriteList();
    setFavoriteList(getResult);
  }, []);

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

  if (favoriteList === []) {
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
        chatHistoryList={chatHistoryList}
      />
    </>
  );
};

export default PotentialContainer;
