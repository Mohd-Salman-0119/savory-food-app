import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconButton = ({ icon, onClick, className}) => {
  return (
    <div className={`${className} cursor-pointer`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default IconButton;
