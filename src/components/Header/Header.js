import React from "react";

import s from "./Header.module.scss";

import { mdiBellRingOutline, mdiMagnify, mdiMenu } from "@mdi/js";

import StyledIcon from "../shared/StyledIcon/StyledIcon";

import ProfileInfoHorizontal from "../shared/ProfileInfo/ProfileInfoHorizontal";
import ProfileInfoVertical from "../shared/ProfileInfo/ProfileInfoVertical";
import profilePic1 from "../../assets/profilePic1.jpg";
import clsx from "clsx";

export default function Header({ showSidebar }) {
  return (
    <div className={s.header}>
      <Top showSidebar={showSidebar} />
      <Bottom />
    </div>
  );
}

const Top = ({ showSidebar }) => {
  return (
    <div className={s.top}>
      <StyledIcon
        path={mdiMenu}
        theme="dark"
        className={clsx(s.md)}
        onClick={showSidebar}
      />
      <ProfileInfoHorizontal avatar={profilePic1} className={clsx(s.md)} />
      <SearchBar />
      <div className={s.topRight}>
        <StyledIcon path={mdiBellRingOutline} theme="dark" />
        <ProfileInfoHorizontal avatar={profilePic1}>
          Piotr Najda
        </ProfileInfoHorizontal>
      </div>
    </div>
  );
};

const Bottom = () => {
  return (
    <div className={s.bottom}>
      <ProfileInfoVertical
        avatar={profilePic1}
        top="Hi there,"
        bottom="Piotr Najda (@piotrnajda3000)"
        size="big"
      />
      <ProjectOptions />
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className={s.search}>
      <StyledIcon path={mdiMagnify} theme="dark" />
      <input type="text" className={s.search__bar} autoComplete="false" />
    </div>
  );
};

const ProjectOptions = () => {
  return (
    <div className={s.projectOptions}>
      <div className={s.button}>New</div>
      <div className={s.button}>Upload</div>
      <div className={s.button}>Share</div>
    </div>
  );
};
