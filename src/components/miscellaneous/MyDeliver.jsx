import React from "react";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

import IconButton from "./IconButton";

const MyDeliver = () => {
  return (
    <div className="flex justify-between bg-light-vanila p-3 h-min items-center rounded-xl shadow-sm shadow-gray">
      <div className="flex gap-5 items-center">
        <img
          src="https://media.licdn.com/dms/image/D4D35AQGHNPEsMV2nkw/profile-framedphoto-shrink_400_400/0/1699471972518?e=1706706000&v=beta&t=_LxOZd4IsZbukknYu3vTzrEAMqZLUZuPDWC6y3ek8Rw"
          className="w-9 rounded-[50%] h-9"
        />
        <div className="flex flex-col gap-[2px]">
          <h1 className="font-semibold">Robert Fox</h1>
          <p className="text-xs">My Deliver</p>
        </div>
      </div>
      <IconButton
        icon={faPhoneVolume}
        className="rounded-[50%] bg-white text-primary"
      />
    </div>
  );
};

export default MyDeliver;
