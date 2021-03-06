import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoutes = ({ component: Component, ...parentProps }) => {
  const { authenticated, loadingAuthState } = useContext(AuthContext);
  if (loadingAuthState) {
    console.log("Render loading page...");
    return <></>;
  }
  console.log("parentProps:", { ...parentProps });
  return (
    <Route
      {...parentProps}
      render={(routeProps) =>
        authenticated ? (
          <Component {...routeProps} />
        ) : (
          <>
            {console.log("routeProps", routeProps)}
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
