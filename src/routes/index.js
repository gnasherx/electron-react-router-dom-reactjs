import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainScreen from "./MainScreen";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={MainScreen} />
    </Switch>
  </BrowserRouter>
);
