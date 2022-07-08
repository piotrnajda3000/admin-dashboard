import React from "react";

import { useMediaQuery } from "react-responsive";

import Sidebar from "./components/Sidebar/expanded/Sidebar";
import SidebarCollapsed from "./components/Sidebar/collapsed/SidebarCollapsed";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

export default function App() {
  const isSidebarCollapsed = useMediaQuery({ maxWidth: 905 });

  return (
    <>
      <Header />
      {isSidebarCollapsed ? <SidebarCollapsed /> : <Sidebar />}
      <MainContent />
    </>
  );
}
