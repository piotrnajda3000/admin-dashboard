import React from "react";

import s from "./SidebarCollapsed.module.scss";

import Icon from "@mdi/react";
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
} from "@mdi/js";

export default function SidebarCollapsed() {
  return (
    <div className={s.sidebar}>
      <Logo />
      <Menu />
    </div>
  );
}

function Logo() {
  return <div className={s.logo}>D</div>;
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
      <IconWrapper icon={icon} />
    </a>
  );
}

function IconWrapper(props) {
  return <Icon path={props.icon} size={1} />;
}
