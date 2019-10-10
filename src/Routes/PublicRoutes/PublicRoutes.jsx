import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import LoginPageContainer from "../../Pages/Auth/Login/LoginPageContainer";
import RegisterPageContainer from "../../Pages/Auth/Register/RegisterPageContainer";

class PublicRoutes extends Component {
  state = {};
  render() {
    return (
      <div className="PublicArea__content">
        <Route path="/auth/login" component={LoginPageContainer} />
        <Route path="/auth/register" component={RegisterPageContainer} />
      </div>
    );
  }
}

export default withRouter(PublicRoutes);
