import React from "react";
import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SearchFeild from "./SearchFeild";
import { Avatar, IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderNavbar = ({ text }) => {
  return (
    <div className="md:flex hidden md:justify-between w-full items-center">
      <h1 className="font-semibold text-xl">{text} ❤️‍🔥</h1>
      <SearchFeild className="h-max" />
      <div className="flex gap-2 h-max items-center">
        <IconButton className="rounded-full bg-white px-3 py-2.5 text-black text-sm">
          <FontAwesomeIcon icon={faEnvelope} />
        </IconButton>
        <IconButton className="rounded-full bg-white px-3 py-2.5 text-black text-sm">
          <FontAwesomeIcon icon={faBell} />
        </IconButton>
        <div className="flex gap-2">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            className="rounded-full w-10 border-white"
            withBorder={true}
          />
          <div>
            <h1 className="font-semibold">Jone Doe</h1>
            <p className="text-xs">User</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbar;
