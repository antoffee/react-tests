import React from "react";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<number>;

export const NumberInput: React.FC<Props> = ({ input, ...rest }: Props) => (
  <input {...input} {...rest} type="number" />
);

