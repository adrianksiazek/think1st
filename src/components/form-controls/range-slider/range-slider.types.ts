import { FormControlProps } from "../form-control.types";

export interface RangeSliderProps extends FormControlProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  tickMarks?: boolean;
}
