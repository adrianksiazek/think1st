import clsx from "clsx";
import { FileInputProps } from "./file.types";
import { useId } from "react";

const File = ({
  name,
  disabled = false,
  accept = "",
  className = "",
  onDrop,
  onDragOver,
  ...rest
}: FileInputProps) => {
  const id = useId();

  return (
    <div
      className={clsx("flex flex-col", disabled && "cursor-not-allowed")}
      onDrop={onDrop}
      onDragOver={onDragOver}>
      <label htmlFor={id} className={clsx("pointer-events-non", className)}>
        <input id={id} name={name} type="file" hidden accept={accept} {...rest} />
        <p className="text-[#898DA9] text-base">
          <span className="underline text-tertiary-light">Upload a file</span>{" "}
          <span className="hidden md:inline">or drag and drop here</span>
        </p>
      </label>
    </div>
  );
};

export default File;
