import React from "react";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

import { Avatar, IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyDeliver = ({ avatar, name, status, className }) => {
  return (
    <div
      className={`flex justify-between bg-light-vanila p-3 h-min items-center rounded-xl ${className}`}
    >
      <div className="flex gap-5 items-center">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          className="rounded-full w-10 border-white"
          withBorder={true}
        />
        <div className="flex flex-col gap-[2px]">
          <h1 className="font-semibold">{name}</h1>
          <p className="text-xs">{status}</p>
        </div>
      </div>
      <IconButton className="rounded-full bg-white px-3 py-2.5 text-primary text-sm shadow-none">
        <FontAwesomeIcon icon={faPhoneVolume} />
      </IconButton>
    </div>
  );
};

export default MyDeliver;
