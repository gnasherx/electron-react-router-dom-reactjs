import React from "react";

import AppLayout from "../components/AppLayout";
import Sidebar from "../containers/Sidebar";
import Header from "../components/Header";
import Document from "../containers/Document";

const MainScreen = () => (
  <AppLayout>
    <Sidebar />
    <Header documentName="Adhar form" />
    <Document />
  </AppLayout>
);

export default MainScreen;
