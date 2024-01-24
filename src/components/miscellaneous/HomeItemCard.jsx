import {
  faGrinHearts,
  faPlus,
  faHeart as faSolidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import IconButton from "./IconButton";
import IconTextButton from "./IconTextButton";

const HomeItemCard = ({
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
    <div className="bg-light-blue p-3 border-4 border-white rounded-xl shadow-md flex flex-col gap-2">
     <IconTextButton text={"12% Off"} className="bg-light-sky text-app-sky rounded-md py-2 w-max px-4"/>
      <div className="flex justify-center">

        <img
          src="https://i.pinimg.com/564x/50/7e/0d/507e0d8a384c12c41f2e67f41cfd19b7.jpg"
          className="w-40 rounded-[50%] border-2 border-white mix-blend-multiply"
        />
      </div>
      <div>
        <div className="flex justify-between items-center">

        <h1 className="font-semibold mt-2">Italian Cuisine</h1>  
        <FontAwesomeIcon
          icon={like ? faSolidHeart : faHeart}
          className="text-xl text-red-500"
          onClick={handleLike}
        />
        </div>
        <p className="mt-1 text-gray text-sm">
          Delicious mashroom burger a savor, vegetarian delight
        </p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <h2 className="font-bold text-xl">$9.89</h2>
        <IconButton icon={faPlus}/>
      </div>
    </div>
  );
};

export default HomeItemCard;
