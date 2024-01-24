import React from "react";
import IconButton from "./IconButton";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const SettingItemCard = () => {
  return (
    <div className="flex flex-col p-3 h-min items-start rounded-xl shadow-sm shadow-gray">
      <div className="flex justify-between items-start gap-3">
        <div className="p-1 rounded-md">
          <IconButton icon={faUser} className="bg-primary text-white rounded-md px-3 py-2"/>
        </div>
        <div>
          <h1 className="font-semibold text-2xl text-primary">Account</h1>
          <p className="text-gray py-2">Account setting offer personalization options for a tailored experience.
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default SettingItemCard;
