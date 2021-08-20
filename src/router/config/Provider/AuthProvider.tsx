import React, {
  useEffect,
  useState,
  Dispatch,
  useReducer,
  createContext,
} from "react";
import LoginUseCase from "../../../domain/LoginUseCase";
import { firebase } from "../../../shared/Firebase";
import GetUserInfo from "../../../domain/GetUserInfo";
import User from "../../../model/User";
type State = {
  invitationCode: {
    validation: boolean;
  };
};

type Action = { type: "success" } | { type: "fail" };
const initialState = {
  invitationCode: {
    validation: true,
  },
};
type DispatchType = Dispatch<Action>;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "success":
      return {
        ...state,
        invitationCode: {
          validation: true,
        },
      };
    case "fail":
      return {
        ...state,
        invitationCode: {
          validation: false,
        },
      };
    default:
      return state;
  }
};

type ContextProps = {
  user: firebase.User | null;
  authenticated: boolean;
  setUser: any;
  loadingAuthState: boolean;
  inviteCodeValidation: string;
  setInviteCodeValidation: any;
  headerMode: string;
  setHeaderMode: any;
  userInfo: User;
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});

export const AuthProvider = ({ children }: any) => {
  // TODO : remove dependency between view and firebase
  const [user, setUser] = useState(null);
  const [loadingAuthState, setLoadingAuthState] = useState(true);
  const [inviteCodeValidation, setInviteCodeValidation] = useState("default");
  const [headerMode, setHeaderMode] = useState("inviteCodeForm");
  const [userInfo, setUserInfo] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    isAgent: false,
  });
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      setUser(user);
      setLoadingAuthState(false);
      GetUserInfo.execute(user.uid).then((result) => setUserInfo(result));
    });
  }, []);

  console.log("AuthProvider user: ", user);

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: user !== null,
        setUser,
        loadingAuthState,
        inviteCodeValidation,
        setInviteCodeValidation,
        headerMode,
        setHeaderMode,
        userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
