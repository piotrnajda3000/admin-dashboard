import React from "react";

import s from "./ProfileInfo.module.scss";

export default function ProfileInfoHorizontal({ avatar, children }) {
  return (
    <div className={s.profileInfoHorizontal}>
      <img className={s.avatar} src={avatar} />
      <div className={s.name}>{children}</div>
    </div>
  );
}
