import clsx from "clsx";
import { ButtonProps } from "./button.types";

const Button = ({ disabled, className }: ButtonProps) => {
  return (
    <button disabled={disabled} type="submit" className={clsx("btn", className)}>
      Send application
    </button>
  );
};

export default Button;
