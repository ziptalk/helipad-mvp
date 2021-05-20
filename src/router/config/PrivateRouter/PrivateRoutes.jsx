import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoutes = ({ component: Component, ...parentProps }) => {
  const { authenticated, loadingAuthState } = useContext(AuthContext);
  if (loadingAuthState) {
    console.log("Render loading page...");
    return <></>;
  }

  return (
    <Route
      {...parentProps}
      render={(routeProps) =>
        authenticated ? (
          <Component {...routeProps} />
        ) : (
          <>
            {alert("로그인 후 이용 가능합니다")}
            <Redirect
              to={{ pathname: "/", state: { prevPath: routeProps.location } }}
            />
          </>
        )
      }
    />
  );
};

export default PrivateRoutes;
