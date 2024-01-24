import React from "react";

const OutlineButton = ({ text, className }) => {
  return (
    <div
      className={`px-12 py-1.5 border border-red-500 w-max rounded-md text-red-500 ${className}`}
     >
      Delete
    </div>
  );
};

export default OutlineButton;
