import {
  faGrinHearts,
  faPlus,
  faHeart as faSolidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import IconTextButton from "./IconTextButton";

const FevoriteItemCard = ({
  image,
  icon,
  title,
  description,
  price,
  btnText,
  btnIcon,
}) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike((p) => !p);
  };
  return (
    <div className="bg-light-blue p-3 border-4 border-white rounded-xl shadow-sm shadow-gray flex flex-col gap-2">
      <div className="flex justify-between">
        <img
          src="https://i.pinimg.com/564x/50/7e/0d/507e0d8a384c12c41f2e67f41cfd19b7.jpg"
          className="w-40 rounded-[50%] border-2 border-white mix-blend-multiply"
        />
        <FontAwesomeIcon
          icon={like ? faSolidHeart : faHeart}
          className="text-xl text-red-500"
          onClick={handleLike}
        />
      </div>
      <div>
        <h1 className="font-semibold mt-2">Italian Cuisine</h1>
        <p className="mt-1 text-gray text-sm">
          Delicious mashroom burger a savor, vegetarian delight
        </p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <h2 className="font-bold text-base">$9.89</h2>
        <IconTextButton text="Add" icon={faPlus}  className="bg-primary text-white rounded-xl w-max px-4"/>
      </div>
    </div>
  );
};

export default FevoriteItemCard;
