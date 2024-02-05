import React from "react";
import IconButton from "./IconButton";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const CategorieItemCard = ({ text }) => {
  return (
    <div className="flex flex-col justify-center p-3 h-min items-center rounded-xl shadow-sm shadow-gray bg-white">
      <div>
        <div className="p-1 bg-light-orange rounded-md flex justify-center">
          <img
            src="https://i.pinimg.com/564x/14/c2/9e/14c29ed1c3e05d765dc4ee751cbe2ceb.jpg"
            className="mix-blend-multiply"
          />
        </div>
        <div className="flex flex-col gap-3 mt-2 items-center">
          <h1 className="font-semibold">{text}</h1>
          <IconButton
            icon={faAngleRight}
            className="bg-red bg-primary text-white rounded-[50%] px-2 py-0.5"
          />
        </div>
      </div>
    </div>
  );
};

export default CategorieItemCard;
