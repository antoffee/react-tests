import React from "react";
import { FieldRenderProps } from "react-final-form";

type MultiCheckboxInputProps = FieldRenderProps<string>;

export const MultiCheckboxInput: React.FC<MultiCheckboxInputProps> = ({
  input,
}: MultiCheckboxInputProps) => <input {...input} type="checkbox" />;
