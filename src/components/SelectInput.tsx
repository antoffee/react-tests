import React from "react";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<string>;

const SelectInput: React.FC<Props> = ({ input, ...rest }: Props) => (
  <select {...input} {...rest} />
);

export default SelectInput;
