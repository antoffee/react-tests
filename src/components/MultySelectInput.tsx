import React from "react";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<string[]>;

const MultiSelectInput: React.FC<Props> = ({ input, ...props }: Props) => (
  <select {...input} {...props} multiple value={input.value || []} />
);

export default MultiSelectInput;
