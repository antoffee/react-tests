import { DetailedHTMLProps, HTMLAttributes } from "react";

export type ButtonProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "ref"
>;
