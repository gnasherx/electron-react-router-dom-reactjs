import React, { Component } from "react";
import MainRoutes from "../components/MainRoutes";
import SubRoutes from "../components/SubRoutes";

class Sidebar extends Component {
  render() {
    return [<MainRoutes />, <SubRoutes />];
  }
}

export default Sidebar;
