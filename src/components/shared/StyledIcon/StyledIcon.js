import React from "react";

import Icon from "@mdi/react";

import s from "./StyledIcon.module.scss";
import clsx from "clsx";

export default function StyledIcon({ path, theme, size }) {
  const classes = clsx({
    [s.small]: size === "small",
    [s[theme]]: true,
  });

  return <Icon path={path} className={classes} />;
}
