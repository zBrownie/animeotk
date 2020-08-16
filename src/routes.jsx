import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/organism/Home";
import Header from "./utils/Header";
import Admin from "./components/organism/Admin";
import Dashboard from "./components/organism/Dashboard";

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/admin/u/:id" component={Dashboard} />
    </Switch>
  </Router>
);

export default Routes;
