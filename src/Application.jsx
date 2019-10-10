import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicRoutes from "./Routes/PublicRoutes/PublicRoutes";
import AuthGuard from "./Routes/Guards/AuthGuard";
import PrivateRoutes from "./Routes/PrivateRoutes/PrivateRoutes";

class Application extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/auth" component={PublicRoutes} />
            <AuthGuard path="/" component={PrivateRoutes} />
            {/* <PrivateRoute path="/" component={ProtectedArea} /> */}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Application;
