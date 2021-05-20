import React, { useEffect, useState } from "react";
import LoginUseCase from "../../../domain/LoginUseCase";
import { firebase } from "../../../shared/Firebase";

type ContextProps = {
  user: firebase.User | null;
  authenticated: boolean;
  setUser: any;
  loadingAuthState: boolean;
  inviteCodeValidation: boolean;
  setInviteCodeValidation: any;
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});

export const AuthProvider = ({ children }: any) => {
  // TODO : remove dependency between view and firebase
  const [user, setUser] = useState(null);
  const [loadingAuthState, setLoadingAuthState] = useState(true);
  const [inviteCodeValidation, setInviteCodeValidation] = useState(true);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      setUser(user);
      setLoadingAuthState(false);
      console.log(user, "ap user");
      console.log(user !== null, "ap authenticated");
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
