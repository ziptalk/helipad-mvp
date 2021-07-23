import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../router/config/Provider/AuthProvider";
import AdminMypagePresenter from "./AdminMypagePresenter";
import UserMypagePresenter from "./UserMypagePresenter";
import GetUserInfo from "../../../domain/GetUserInfo";
import User from "../../../model/User";
import GetPotentialAndEscrowList from "../../../domain/GetAdminList";
import List from "../../../model/PotentialList";
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
  const [potentialList, setPotentialList] = useState();
  const [escrowList, setEscrowList] = useState();
  const [mockData, setMockData] = useState<List[]>();
  useEffect(() => {
    setLoading(true);
    setHeaderMode("");
    if (user !== null && user !== undefined) {
      GetUserInfo.execute(user.uid).then((result) => setUserInfo(result));
    }
    setMockData(GetPotentialAndEscrowList.getOnGoingList());
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
    if (item.contains("check")) {
      item.remove("check");
    } else {
      item.add("check");
    }
  };

  const renderByIsAgent = (isAgent: boolean) => {
    console.log("isAgent", isAgent);
    switch (isAgent) {
      case true:
        return (
          <AdminMypagePresenter
            selectedCategory={selectedCategory}
            onClickedCategory={onClickedCategory}
            onClickCheckButton={onClickCheckButton}
            mockData={mockData}
          />
        );
      case false:
        return (
          <UserMypagePresenter
            selectedCategory={selectedCategory}
            onClickedCategory={onClickedCategory}
            onClickCheckButton={onClickCheckButton}
            mockData={mockData}
          />
        );
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  const { firstName, lastName, email, isAgent } = userInfo;

  return <>{renderByIsAgent(isAgent)}</>;
};

export default MypageContainer;
