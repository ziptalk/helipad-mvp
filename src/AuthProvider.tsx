import React, { useEffect, useState } from "react";
import LoginUseCase from "./domain/LoginUseCase";
import { firebase } from "./shared/Firebase";

type ContextProps = {
    user: firebase.User | null;
    authenticated: boolean;
    setUser: any;
    loadingAuthState: boolean;
}

export const AuthContext = React.createContext<Partial<ContextProps>>({});

export const AuthProvider = ({children}: any) => {
    // TODO : remove dependency between view and firebase
    const [user, setUser] = useState(null);
    const [loadingAuthState, setLoadingAuthState] = useState(true);

    useEffect(() => {
        // LoginUseCase.registerAuthStateChangeListener((user: any) => {
        //    console.log("result of registerAuthStateChangeListener");
        //    setUser(user);
        //    console.log("user: ", user);
        //    setLoadingAuthState(false);
        // }).then((result) => {
        //     console.log("success to authorization: ", result);
        // }).catch((error) => {
        //     console.log("error during authorization: ", error);
        // });
        firebase.auth().onAuthStateChanged((user: any) => {
            if (user != null) {
                setUser(user);
            }
            setLoadingAuthState(false);
            console.log(user, 'ap user');
            console.log(user !== null, 'ap authenticated');
        })
    }, []);

    console.log("AuthProvider user: ", user);

    return (
        <AuthContext.Provider
            value={{
                user,
                authenticated: user !== null,
                setUser,
                loadingAuthState
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}