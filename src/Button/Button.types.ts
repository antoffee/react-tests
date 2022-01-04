import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from "react";

export type ButtonProps = Omit<
  DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "ref"
>;
