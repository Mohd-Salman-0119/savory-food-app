import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconButton = ({ icon, onClick, className = "rounded-md" }) => {
  return (
    <div
      className={`bg-white px-3 py-2 text-primary ${className}`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default IconButton;
