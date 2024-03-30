import { ChangeEvent } from "react";
import { FormControlProps } from "../form-control.types";

export interface InputProps extends FormControlProps {
  value: string;
  name: string;
  className?: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}
