import clsx from "clsx";
import React from "react";

import s from "./ProfileInfo.module.scss";

export default function ProfileInfoVertical({ avatar, top, bottom, size }) {
  const modifiers = clsx({
    [s.big]: size === "big",
    [s.small]: size === "small",
  });

  return (
    <div className={clsx(s.profileInfoVertical, modifiers)}>
      <img className={s.avatar} src={avatar} />
      <div className={s.topText}>{top}</div>
      <div className={s.bottomText}>{bottom}</div>
    </div>
  );
}
