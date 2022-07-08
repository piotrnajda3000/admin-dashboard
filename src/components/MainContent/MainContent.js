import React from "react";

import s from "./MainContent.module.scss";

import Projects from "./Projects/Projects";
import RightSidebar from "./RightSidebar/RightSidebar";

export default function MainContent() {
  return (
    <div className={s.mainContent}>
      <Projects />
      <RightSidebar />
    </div>
  );
}
