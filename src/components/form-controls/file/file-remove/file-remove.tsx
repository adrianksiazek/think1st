import { useState } from "react";
import deleteIcon from "../../../../assets/images/deleteIcon.svg";
import deleteIconHover from "../../../../assets/images/deleteIconHover.svg";
import { FileRemoveProps } from "./file-remove.types";

const FileRemove = ({ photoName, handleRemoveFile }: FileRemoveProps) => {
  const [isHover, setIsHovered] = useState(false);

  return (
    <div className="form-control p-9 flex items-center gap-2 justify-center">
      {photoName}{" "}
      <button
        type="button"
        onClick={handleRemoveFile}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        {isHover ? <img src={deleteIconHover} /> : <img src={deleteIcon} />}
      </button>
    </div>
  );
};

export default FileRemove;
