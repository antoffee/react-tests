import React from "react";
import { FieldRenderProps } from "react-final-form";

type CheckboxInputProps = FieldRenderProps<boolean>;

export const CheckboxInput: React.FC<CheckboxInputProps> = ({
  input: { value, ...input },
}: CheckboxInputProps) => <input {...input} type="checkbox" checked={!!value} />;

