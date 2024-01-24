import React, { useState } from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ReviewerItemCard = () => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike((p) => !p);
  };
  return (
    <div className="flex p-3 h-min items-center rounded-xl shadow-sm shadow-gray">
      <div className="w-full">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              src="https://media.licdn.com/dms/image/D4D35AQGHNPEsMV2nkw/profile-framedphoto-shrink_400_400/0/1699471972518?e=1706706000&v=beta&t=_LxOZd4IsZbukknYu3vTzrEAMqZLUZuPDWC6y3ek8Rw"
              className="w-8 rounded-[50%] h-8"
            />
            <h1 className="font-semibold">Robert Fox</h1>
          </div>
          <div>
            <FontAwesomeIcon
              icon={like ? faSolidHeart : faHeart}
              className="text-xl text-red-500"
              onClick={handleLike}
            />
          </div>
        </div>
        <p>
          <span className="font-semibold">Turkish Beef: </span>Delicious
          mashroom burger a savor, vegetarian delight
        </p>
      </div>
    </div>
  );
};

export default ReviewerItemCard;
