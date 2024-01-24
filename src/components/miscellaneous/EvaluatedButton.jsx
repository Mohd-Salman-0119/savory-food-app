import React from "react";

const EvaluatedButton = ({ className }) => {
  return (
    <div
      className={`flex items-center w-max rounded-md bg-primary text-white ${className}`}
    >
      Save Setting
    </div>
  );
};

export default EvaluatedButton;
