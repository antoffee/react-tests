import React from "react";
import { FieldRenderProps } from "react-final-form";

export const RadioInput = <T extends string>({
  input,
  ...rest
}: FieldRenderProps<T>) => {
  return <input type="radio" {...input} {...rest} />;
};
