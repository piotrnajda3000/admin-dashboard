import React, { useState } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { useMediaQuery } from "react-responsive";

export default function App() {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);
  const showSidebar = () => {
    setIsSidebarToggled(!isSidebarToggled);
  };
  const autoToggleSidebar = useMediaQuery({ minWidth: 750 }, undefined, () => {
    if (isSidebarToggled == true) {
      setIsSidebarToggled(false);
    }
  });

  return (
    <>
      <Header showSidebar={showSidebar} />
      <Sidebar toggle={showSidebar} isToggled={isSidebarToggled} />
      <MainContent />
    </>
  );
}
