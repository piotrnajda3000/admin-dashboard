import React from "react";

import s from "./Projects.module.scss";
import mainContent from "../MainContent.module.scss";

import StyledIcon from "../../shared/StyledIcon/StyledIcon";
import { mdiEyePlusOutline, mdiSourceFork, mdiStarPlusOutline } from "@mdi/js";

export default function Projects() {
  return (
    <div className={s.projects}>
      <div className={mainContent.sectionHeading}>Your projects</div>
      <div className={s.cards}>
        <ProjectCard heading="Another project">
          Lorem ipsum dolor sit amet.
        </ProjectCard>
        <ProjectCard heading="Another project">
          Lorem ipsum dolor sit amet.
        </ProjectCard>
        <ProjectCard heading="Another project">
          Lorem ipsum dolor sit amet.
        </ProjectCard>
        <ProjectCard heading="Another project">
          Lorem ipsum dolor sit amet.
        </ProjectCard>
        <ProjectCard heading="Another project">
          Lorem ipsum dolor sit amet.
        </ProjectCard>
      </div>
    </div>
  );
}

function ProjectCard({ heading, children }) {
  return (
    <div className={s.card}>
      <div>
        <div className={s.card__heading}>{heading}</div>
        <div className={s.card__text}>{children}</div>
      </div>
      <div className={s.icons}>
        <StyledIcon size="small" theme="dark" path={mdiEyePlusOutline} />
        <StyledIcon size="small" theme="dark" path={mdiSourceFork} />
        <StyledIcon size="small" theme="dark" path={mdiStarPlusOutline} />
      </div>
    </div>
  );
}
