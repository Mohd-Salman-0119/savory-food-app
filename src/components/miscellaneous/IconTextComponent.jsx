import React from "react";

const IconTextComponent = ({ component,text,className }) => {
  return (
    <div className={`items-center py-1 gap-2 ${className}`}>
      {component}
      <h1>{text}</h1>
    </div>
  );
};

export default IconTextComponent;
