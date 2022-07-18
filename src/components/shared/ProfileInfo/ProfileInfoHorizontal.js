import React from "react";

import clsx from "clsx";

import s from "./ProfileInfo.module.scss";

export default function ProfileInfoHorizontal({
  avatar,
  children,
  className,
  ...props
}) {
  const classes = clsx(
    {
      [s.profileInfoHorizontal]: true,
    },
    className
  );
  return (
    <div className={classes} {...props}>
      <img className={s.avatar} src={avatar} />
      <div className={s.name}>{children}</div>
    </div>
  );
}
