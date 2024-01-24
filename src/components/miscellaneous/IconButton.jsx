import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconButton = ({ icon, onClick, className = "rounded-md bg-white text-primary" }) => {
  return (
    <div
      className={` px-3 py-2 ${className}`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default IconButton;
