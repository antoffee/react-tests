import React from "react";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<string>;

const TextInput: React.FC<Props> = ({ input, ...rest }: Props) => (
  <input type="text" {...input} {...rest} cy-data={`input-${input.name}`} />
);

export default TextInput;
