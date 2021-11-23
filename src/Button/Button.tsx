import React from "react";

import { ButtonStyled } from "./Button.style";
import { ButtonProps } from "./Button.types";

export const Button = (props: ButtonProps = { children: "" }) => (
  <ButtonStyled {...props} />
);
