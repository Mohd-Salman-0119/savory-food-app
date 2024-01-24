import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconButton = ({ icon, onClick }) => {
  return (
    <div
      className="bg-white px-3 py-2 rounded-md text-primary"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default IconButton;
