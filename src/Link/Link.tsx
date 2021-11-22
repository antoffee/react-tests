import React, { useState } from "react";

import { ILinkProps } from "./Link.types";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

export const Link: React.FC<ILinkProps> = ({
  page,
  children,
}) => {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.NORMAL);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <a
      className={status}
      href={page || "#"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};
