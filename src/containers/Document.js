import React, { Component } from "react";
import OpenDocument from "../components/OpenDocument";
import { Switch, Route } from "react-router-dom";
import UseDocument from "../components/UseDocument";
import EditDocument from "../components/EditDocument";

const Document = () => (
  <Switch>
    <Route path="/" component={OpenDocument} />
    <Route exact path="/use" component={UseDocument} />
    <Route exact path="/edit" component={EditDocument} />
  </Switch>
);

export default Document;
