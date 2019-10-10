import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { connect } from 'react-redux';

const AuthGuard = ({ component: Component, ...rest }) => {
  //   const isAuthenticated = user && user.accountId;
  const isAuthenticated = true;
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: {
                from: props.location
              }
            }}
          />
        )
      }
    />
  );
};

export default AuthGuard;
