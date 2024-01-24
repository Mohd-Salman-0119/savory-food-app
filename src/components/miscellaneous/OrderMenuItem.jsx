import React from "react";

const OrderMenuItem = () => {
  return (
    <div className="flex justify-between p-3 h-min items-center rounded-xl shadow-sm shadow-gray">
      <div className="flex justify-between items-center gap-3">
        <div className="p-1 bg-light-orange rounded-md">
          <img
            src="https://i.pinimg.com/564x/14/c2/9e/14c29ed1c3e05d765dc4ee751cbe2ceb.jpg"
            className="w-9 h-9 mix-blend-multiply"
          />
        </div>
        <div>
          <h1 className="font-semibold">Hamburger</h1>
          <p className="text-xs">$3.98</p>
        </div>
      </div>
      <p>X3</p>
    </div>
  );
};

export default OrderMenuItem;
