import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import {  faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const CheckBox = ({ className }) => {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    setChecked((p) => !p);
  };
  return (
    <div
      className={`w-max ${
        checked
          ? "text-primary"
          : "text-gray"
      } rounded-[28%] px-1 ${className}`}
      onClick={handleCheck}
    >
      <FontAwesomeIcon icon={!checked ? faSquare : faSquareCheck} className="rounded-md"/>
    </div>
  );
};

export default CheckBox;
