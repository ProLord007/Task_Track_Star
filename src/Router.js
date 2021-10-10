import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Dashboard from "./Components/dashboard/dashboard";
import Auth from "./Components/auth/Auth";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/auth/:component">
          <Auth />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
