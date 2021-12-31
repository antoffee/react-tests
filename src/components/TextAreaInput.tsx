import React from "react";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<string>;

const TextAreaInput: React.FC<Props> = ({ input, ...rest }: Props) => (
  <textarea {...input} {...rest} />
);

export default TextAreaInput;
