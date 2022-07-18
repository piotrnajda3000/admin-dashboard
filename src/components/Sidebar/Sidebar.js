import React from "react";

import s from "./Sidebar.module.scss";

import {
  mdiAccountGroup,
  mdiFormatListChecks,
  mdiHome,
  mdiAccount,
  mdiMessage,
  mdiHistory,
  mdiCog,
  mdiFaceAgent,
  mdiShieldCheck,
  mdiCloseBox,
} from "@mdi/js";

import StyledIcon from "../shared/StyledIcon/StyledIcon";
import clsx from "clsx";

export default function Sidebar({ toggle, isToggled }) {
  return (
    <div className={clsx(s.sidebar, isToggled && s.show)}>
      <Logo toggle={toggle} />
      <Menu />
    </div>
  );
}

function Logo({ toggle }) {
  return (
    <>
      <div className={s.logo}>
        <StyledIcon
          className={s.md}
          path={mdiCloseBox}
          theme="light"
          onClick={toggle}
        />
        Dashboard
      </div>
      <div className={clsx(s.logo, s.lg)}>D</div>
    </>
  );
}

function Menu() {
  return (
    <>
      <div className={s.menu}>
        <MenuItem icon={mdiHome} title="Home" />
        <MenuItem icon={mdiAccount} title="Profile" />
        <MenuItem icon={mdiMessage} title="Messages" />
        <MenuItem icon={mdiHistory} title="History" />
        <MenuItem icon={mdiFormatListChecks} title="Tasks" />
        <MenuItem icon={mdiAccountGroup} title="Communities" />
      </div>
      <div className={s.menu}>
        <MenuItem icon={mdiCog} title="Settings" />
        <MenuItem icon={mdiFaceAgent} title="Support" />
        <MenuItem icon={mdiShieldCheck} title="Privacy" />
      </div>
    </>
  );
}

function MenuItem({ icon, title }) {
  return (
    <a href="#" className={s.item} title={title}>
      <StyledIcon path={icon} theme="light" />
      <div className={s.title}>{title}</div>
    </a>
  );
}
