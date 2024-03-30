import clsx from "clsx";
import { InputProps } from "./input.types";
import errorIcon from "../../../assets/images/errorIcon.svg";

const Input = ({
  type = "text",
  placeholder = "",
  label = "",
  name,
  error = "",
  className,
  disabled,
  labelClass = "",
  formControlClass = "",
  value,
  ...rest
}: InputProps) => {
  return (
    <div className={className}>
      {!!label?.trim() && (
        <label htmlFor={name} className={clsx("label", labelClass)}>
          <span>{label}</span>
        </label>
      )}
      <input
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        className={clsx(
          "form-control w-full",
          error !== "" && "border-alert-dark bg-alert-light border-2",
          formControlClass
        )}
        {...rest}
      />
      {error && (
        <div className="text-xs text-black flex gap-2 mt-3">
          <span>
            <img src={errorIcon} />
          </span>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
